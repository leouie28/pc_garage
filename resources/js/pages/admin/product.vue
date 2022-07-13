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
        :hide="['filter']"
      >
        <template v-slot:custom_filter>
          <admin-filter :filter="data.filter"></admin-filter>
        </template>
      </table-header>
      <v-data-table
        :headers="headers"
        :items="products"
        max-height="100%"
        :single-select="false"
        show-select
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
        <!-- <template v-slot:top>
            <v-toolbar
                flat
            >
              <v-toolbar-title>{{ title }}</v-toolbar-title>
              <v-divider
              class="mx-4"
              inset
              vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <v-col cols="6" md="3" sm="4">
                  <v-text-field
                      append-icon="mdi-magnify"
                      label="Search"
                      class="mr-4"
                      single-line
                      hide-details
                  ></v-text-field>
              </v-col>
              <v-btn
                color="success"
                @click="addNew"
              >
                Add
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-toolbar>
            </template> -->
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
            class="mr-1"
          >
            {{ category.name }}
          </v-chip>
        </template>
        <template v-slot:[`item.price`]="{ item }">
          &#8369; {{ item.price }}
        </template>
        <template v-slot:[`item.action`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <div>No Data</div>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="showForm" persistent max-width="600">
      <product-form @cancel="close" @save="save"> </product-form>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
import ProductForm from "../../components/admin/product/form.vue";
import TableHeader from "../../components/table-header.vue";
export default {
  components: {
    ProductForm,
    TableHeader,
  },
  data: () => ({
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
    dialogDelete: false,
    products: [],
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
        text: "Price",
        align: "start",
        sortable: true,
        value: "price",
      },
      {
        text: "Stocks",
        align: "start",
        sortable: true,
        value: "stocks",
      },
      {
        text: "Sold",
        align: "start",
        sortable: false,
        value: "orders_count",
      },
      {
        text: "Date Added",
        align: "start",
        sortable: true,
        value: "created_at",
      },
      {
        text: "Action",
        align: "start",
        sortable: false,
        value: "action",
      },
    ],
  }),
  methods: {
    viewProduct() {},
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
    save(payload) {
      axios.post(`/admin-api/product`, payload).then(({ data }) => {
        this.fetchPage()
      }).finally(()=>{
        this.showForm = false;
        this.payload = null;
      })
    },
    addNew() {
      this.showForm = true;
    },
    close() {
      this.showForm = false;
    },
  },
};
</script>