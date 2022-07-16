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
        :items="customers"
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
          {{ item.first_name+ ' '+item.last_name }}
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
        <div>
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
    alert: {
      trigger: false,
      color: '',
      text: ''
    },
    data: {
      title: "Customers",
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
    customers: [],
    selectedItem: {},
    selected: [],
    title: "Customers",
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
        text: "Gender",
        align: "start",
        sortable: false,
        value: "gender",
      },
      {
        text: "Birthday",
        align: "start",
        sortable: false,
        value: "birthday",
      },
      {
        text: "Address",
        align: "start",
        sortable: false,
        value: "address",
      },
      {
        text: "Phone",
        align: "start",
        sortable: true,
        value: "phone",
      },
      {
        text: "Email",
        align: "start",
        sortable: true,
        value: "email",
      },
      {
        text: "Orders",
        align: "center",
        sortable: false,
        value: "orders_count",
      },
      {
        text: "Date Joined",
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
      axios.get(`/admin-api/customer?${params}`).then(({ data }) => {
        this.customers = data.data;
        this.total = data.total;
        this.data.isFetching = false;
      });
    },
    editItem(val){
      this.selectedItem = val
      this.showForm = true
    },
    save(payload) {
      axios.post(`/admin-api/customer`, payload).then(({ data }) => {
        this.fetchPage()
      }).finally(()=>{
        this.showForm = false;
        this.payload = null;
      })
    },
    update(payload) {
      axios.put(`/admin-api/customer/${this.selectedItem.id}`, payload).then(({ data }) => {
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
          this.alert.color = data.type
          this.alert.text = data.message
      });
      this.deleteForm = false
      this.fetchPage()
      setTimeout(() => {
        this.alert.trigger = true
      }, 1000)
    }
  },
};
</script>