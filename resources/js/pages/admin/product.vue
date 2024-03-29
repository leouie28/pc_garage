<template>
  <div>
    <v-card elevation="0" class="pa-2">
      <table-header
        :data="data"
        @addNew="addNew"
        @refresh="fetchPage"
        @search="fetchPage"
        @resetFilters="resetFilter"
        @filterRecord="fetchPage"
        :hide="['filter', 'download']"
      >
        <template v-slot:custom_filter>
          <admin-filter :filter="data.filter"></admin-filter>
        </template>
      </table-header>
      <v-data-table
        :headers="headers"
        :items="products"
        max-height="100%"
        :search="data.keyword"
        :loading="data.isFetching"
        :server-items-length="total"
        :footer-props="footerPages"
        :options.sync="options"
        :items-per-page="options.itemsPerPage"
        @update:options="fetchPage"
        @click:row="viewProduct"
        class="cursor-pointer table-fix-height"
        fixed-header
      >
        <template v-slot:[`item.name`]="{ item }">
          <v-avatar size="35" tile style="border: 1px solid #ccc">
            <img
              alt="image"
              :src="item.images.length?'/images/products/' + item.id + '/' + item.images[0].file_name:'/images/default/noimage.png'"
            />
          </v-avatar>
          <span class="pa-2 font-weight-bold"> {{ item.name }} </span>
        </template>
        <template v-slot:[`item.category`]="{ item }">
          <v-chip
            v-for="category in item.categories"
            :key="category.id"
            small
            :color="category.color"
            class="mr-1 mb-1"
          >
            {{ category.name }}
          </v-chip>
        </template>
        <template v-slot:[`item.stocks_sum_stocksstocks`]="{ item }">
          <span v-if="!item.stocks_sum_stocksstocks || item.stocks_sum_stocksstocks==0" class="red--text">
            Out of stock
          </span>
          <span v-else>{{ item.stocks_sum_stocksstocks }}</span>
        </template>
        <template v-slot:[`item.price`]="{ item }">
          &#8369; {{ item.price }}
        </template>
        <template v-slot:[`item.created_at`]="{ item }">
          {{ moment(item.created_at).format('MMMM DD YYYY') }}
        </template>
        <template v-slot:[`item.action`]="{ item }">
          <v-tooltip left color="blue">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                style="min-width:10px;"
                class="px-2"
                small
                v-bind="attrs"
                v-on="on"
                elevation="0"
                color="secondary"
                @click.stop="addStocks(item)"
              >
                <v-icon small>mdi-plus-circle</v-icon>
              </v-btn>
            </template>
            <span>Add Stocks</span>
          </v-tooltip>
          <v-btn
            class="px-2"
            small
            elevation="0"
            color="primary"
            @click.stop="editItem(item)"
          >
            <v-icon small>mdi-square-edit-outline</v-icon>
          </v-btn>
          <v-btn
            class="px-2"
            small
            elevation="0"
            color="error"
            @click.stop="warning(item)"
          >
            <v-icon small>mdi-trash-can</v-icon>
          </v-btn>
        </template>
        <template v-slot:no-data>
          <div>No Data</div>
        </template>
      </v-data-table>
    </v-card>
    <v-expand-x-transition>
    <v-dialog v-model="showProd" fullscreen hide-overlay>
      <product-profile :selectedItem="selectedItem" @cancel="close"></product-profile>
    </v-dialog>
    </v-expand-x-transition>
    <v-dialog v-model="stockForm" persistent max-width="500">
      <stock-form :selectedItem="selectedItem" @cancel="close"></stock-form>
    </v-dialog>
    <v-dialog v-model="showForm" persistent max-width="600">
      <product-form :selectedItem="selectedItem" @cancel="close" @save="save" @update="update"> </product-form>
    </v-dialog>
    <v-dialog v-model="deleteForm" persistent width="500">
      <delete-dialog :data="item" @close="close" @confirm="confirm"></delete-dialog>
    </v-dialog>
    <v-snackbar
    v-model="alert.trigger"
    multi-line
    elevation="12"
    :color="alert.color"
    transition="scroll-x-reverse-transition"
    top
    right>
      <div class="d-flex justify-space-between">
        <div class="mr-2">
          <v-icon large>info</v-icon>
          {{ alert.text }}
        </div>
        <v-btn @click="alert.trigger = false">
          Close
        </v-btn>
      </div>
    </v-snackbar>
  </div>
</template>

<script>
import moment from "moment";
import DeleteDialog from "../../components/deleteDialog.vue";
import ProductForm from "../../components/admin/product/form.vue";
import TableHeader from "../../components/table-header.vue";
import StockForm from "../../components/admin/product/StockForm.vue";
import ProductProfile from "../../components/admin/product/product-profile.vue";
export default {
  components: {
    DeleteDialog,
    ProductForm,
    TableHeader,
    StockForm,
    ProductProfile
},
  data: () => ({
    alert: {
      trigger: false,
      color: '',
      text: ''
    },
    data: {
      title: "Products",
      isFetching: false,
      keyword: "",
      filter: {},
    },
    footerPages: {
      "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100, -1],
    },
    options: {
      itemsPerPage: 15,
    },
    total: 0,
    showForm: false,
    showProd: false,
    stockForm: false,
    deleteForm: false,
    item: {},
    products: [],
    selectedItem: {},
    selected: [],
    title: "Products",
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: true,
        value: "id",
      },
      {
        text: "Name",
        align: "start",
        sortable: true,
        value: "name",
      },
      {
        text: "Category",
        align: "start",
        sortable: false,
        value: "category",
      },
      {
        text: "Description",
        align: "start",
        sortable: false,
        value: "description",
      },
      {
        text: "Cost Price",
        align: "start",
        sortable: true,
        value: "cost_price",
      },
      {
        text: "Selling Price",
        align: "start",
        sortable: true,
        value: "price",
      },
      {
        text: "Total Stocks",
        align: "start",
        sortable: true,
        value: "stocks_sum_stocksstocks",
      },
      // {
      //   text: "Canceled",
      //   align: "center",
      //   sortable: false,
      //   value: "canceled_sum_order_productquantity",
      // },
      // {
      //   text: "Pending",
      //   align: "center",
      //   sortable: false,
      //   value: "pending_sum_order_productquantity",
      // },
      // {
      //   text: "To Deliver",
      //   align: "center",
      //   sortable: false,
      //   value: "to_deliver_sum_order_productquantity",
      // },
      // {
      //   text: "Sold",
      //   align: "center",
      //   sortable: false,
      //   value: "sold_sum_order_productquantity",
      // },
      {
        text: "Date Added",
        align: "start",
        sortable: true,
        value: "created_at",
      },
      {
        text: "Actions",
        align: "center",
        sortable: false,
        value: "action",
      },
    ],
  }),
  methods: {
    viewProduct(item) {
      // this.selectedItem = item
      // this.showProd = true
      this.$router.push({path: '/admin/product/'+item.id})
    },
    resetFilter() {},
    fetchPage() {
      this.data.isFetching = true;
      let params = this._createParams(this.options);
      params = params + this._createFilterParams(this.data.filter);
      if (this.data.keyword) params = params + "&keyword=" + this.data.keyword;
      axios.get(`/admin-api/product?${params}`).then(({ data }) => {
        this.products = data.data;
        this.total = data.total;
        this.data.isFetching = false;
      });
    },
    addStocks(val){
      this.selectedItem = val
      this.stockForm = true
    },
    editItem(val){
      this.selectedItem = val
      this.showForm = true
    },
    save(payload) {
      axios.post(`/admin-api/product`, payload).then(({ data }) => {
        this.fetchPage()
        this.newAlert(true, data.type, data.message)
      }).finally(()=>{
        this.showForm = false;
        this.payload = null;
      })
    },
    update(payload) {
      axios.put(`/admin-api/product/${this.selectedItem.id}`, payload).then(({ data }) => {
        this.showForm = false;
        this.fetchPage()
        this.newAlert(true, data.type, data.message)
        this.payload = null;
      })
    },
    addNew() {
      this.showForm = true;
    },
    close() {
      this.selectedItem = {}
      this.stockForm = false
      this.showForm = false;
      this.showProd = false;
      this.deleteForm = false
      this.fetchPage()
    },
    confirm() {
      axios.delete(`/admin-api/${this.item.model}/${this.item.id}`).then(({data})=>{
        this.deleteForm = false
        this.fetchPage()
        this.newAlert(true, data.type, data.message)
      });
    },
    warning(val){
      this.item = {
        id: val.id,
        text: val.name,
        model: 'product'
      }
      this.deleteForm = true
    },
    // confirm() {
    //   axios.delete(`/admin-api/${this.item.model}/${this.item.id}`).then(({data})=>{
    //     this.deleteForm = false
    //     this.fetchPage()
    //     this.newAlert(true, data.type, data.message)
    //   });
    // }
  },
};
</script>