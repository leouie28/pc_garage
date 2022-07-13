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
        <!-- <template v-slot:[`item.name`]="{ item }">
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
        </template> -->
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
          >
            Delete
          </v-btn>

          <!-- <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon> -->
          <!-- <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->
        </template>
        <template v-slot:no-data>
          <div>No Data</div>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="showForm" persistent max-width="600">
      <customer-form :selectedItem="selectedItem" @cancel="close" @save="save"> </customer-form>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
import CustomerForm from "../../components/admin/customer/form.vue";
import TableHeader from "../../components/table-header.vue";
export default {
  components: {
    CustomerForm,
    TableHeader,
  },
  data: () => ({
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
    showForm: false,
    dialogDelete: false,
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
        align: "start",
        sortable: false,
        value: "orders",
      },
      {
        text: "Date Joined",
        align: "start",
        sortable: false,
        value: "created_at",
      },
      {
        text: "Action",
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
    addNew() {
      this.showForm = true;
    },
    close() {
      this.selectedItem = {}
      this.showForm = false;
    },
  },
};
</script>