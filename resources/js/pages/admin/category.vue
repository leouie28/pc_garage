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
        :items="categories"
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
        <template v-slot:[`item.color`]="{ item }">
          <v-chip small :color="item.color">
            <span class="text-capitalize">{{ item.color }}</span>
          </v-chip>
        </template>
        <template v-slot:[`item.icon`]="{ item }">
            <v-chip label small v-if="item.icon!=null">
                <v-icon>mdi-account</v-icon>
                mdi-account
            </v-chip>
            <span v-else>No icon</span>
        </template>
        <template v-slot:[`item.created_at`]="{ item }">
          {{ moment(item.created_at).format('MMMM DD YYYY') }}
        </template>
        <template v-slot:[`item.action`]="{ item }">
          <v-btn
            small
            elevation="0"
            color="primary"
            @click="editItem(item)"
          >
            Edit
          </v-btn>
          <v-btn
            small
            elevation="0"
            color="error"
            @click="warning(item)"
          >
            Delete
          </v-btn>
        </template>
        <template v-slot:no-data>
          <div>No Data</div>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="showForm" persistent max-width="600">
      <customer-form :selectedItem="selectedItem" @cancel="close" @save="save" @update="update"> </customer-form>
    </v-dialog>
    <v-dialog v-model="deleteForm" persistent width="500">
      <delete-dialog :data="user" @close="close" @confirm="confirm"></delete-dialog>
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
import CustomerForm from "../../components/admin/customer/form.vue";
import TableHeader from "../../components/table-header.vue";
export default {
  components: {
    DeleteDialog,
    CustomerForm,
    TableHeader,
  },
  data: () => ({
    data: {
      title: "Categories",
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
    deleteForm: false,
    showForm: false,
    dialogDelete: false,
    user: {},
    categories: [],
    selectedItem: {},
    selected: [],
    title: "Categories",
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
        text: "Color",
        align: "start",
        sortable: false,
        value: "color",
      },
      {
        text: "Icon",
        align: "start",
        sortable: false,
        value: "icon",
      },
      {
        text: "Products",
        align: "start",
        sortable: false,
        value: "products_count",
      },
      {
        text: "Date Added",
        align: "start",
        sortable: false,
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
    viewProduct() {},
    resetFilter() {},
    fetchPage() {
      this.data.isFetching = true;
      let params = this._createParams(this.options);
      params = params + this._createFilterParams(this.data.filter);
      if (this.data.keyword) params = params + "&keyword=" + this.data.keyword;
      axios.get(`/admin-api/category?${params}`).then(({ data }) => {
        this.categories = data.data;
        this.total = data.total;
        this.data.isFetching = false;
      });
    },
    editItem(val){
      console.log(this.alert.trigger,'trigger')
      this.selectedItem = val
      this.showForm = true
    },
    save(payload) {
      axios.post(`/admin-api/customer`, payload).then(({ data }) => {
        this.fetchPage()
        this.newAlert(true, data.type, data.message)
      }).finally(()=>{
        this.showForm = false;
        this.payload = null;
      })
    },
    update(payload) {
      axios.put(`/admin-api/customer/${this.selectedItem.id}`, payload).then(({ data }) => {
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
      this.showForm = false;
      this.deleteForm = false
    },
    warning(val){
      this.user = {
        id: val.id,
        text: val.first_name+' '+val.last_name,
        model: 'customer'
      }
      this.deleteForm = true
    },
    confirm() {
      axios.delete(`/admin-api/${this.user.model}/${this.user.id}`).then(({data})=>{
        this.deleteForm = false
        this.fetchPage()
        this.newAlert(true, data.type, data.message)
      });
    }
  },
};
</script>