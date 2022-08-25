<template>
  <div>
    <v-card elevation="0" outlined class="pa-2">
      <table-header
        :data="data"
        @addNew="addNew"
        @refresh="fetchPage"
        @search="fetchPage"
        @resetFilters="resetFilter"
        @filterRecord="fetchPage"
        :hide="['filter', 'download', 'addNew']"
      >
        <template v-slot:custom_filter>
          <admin-filter :filter="data.filter"></admin-filter>
        </template>
      </table-header>
      <v-data-table
        :headers="headers"
        :items="feedback"
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
        <template v-slot:[`item.customer`]="{ item }">
            <v-avatar size="35" style="border: 1px solid #ccc">
                <img
                alt="image"
                :src="item.customer.images.length?'/images/customer/' + item.customer.images[0].file_name:'/images/default/person.png'"
                />
            </v-avatar>
          <span class="text-capitalize">{{item.customer.first_name}}</span>
        </template>
        <template v-slot:[`item.feedback`]="{ item }">
            <v-avatar size="35" style="border: 1px solid #ccc" v-if="item.image.length>0">
                <img
                alt="image"
                :src="item.images.length?'/images/customer/' + item.images[0].file_name:'/images/default/person.png'"
                />
            </v-avatar>
            <span class="text-capitalize">{{item.feedback}}</span>
        </template>
        <template v-slot:[`item.rating`]="{ item }">
            <div class="d-flex align-center">
                <span class="mr-1">{{item.rating}}</span>
                <v-icon color="amber">mdi-star</v-icon>
            </div>
        </template>
        <template v-slot:[`item.created_at`]="{ item }">
          {{ moment(item.created_at).format('MMMM DD YYYY') }}
        </template>
        <template v-slot:no-data>
          <div>No Data</div>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="showForm" persistent max-width="500">
      <data-form :selectedItem="selectedItem" @cancel="close" @save="save" @update="update"> </data-form>
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
import DeleteDialog from "@/components/deleteDialog.vue";
import DataForm from "@/components/admin/category/form.vue";
import TableHeader from "@/components/table-header.vue";
export default {
  components: {
    DeleteDialog,
    DataForm,
    TableHeader,
  },
  data: () => ({
    data: {
      title: "Feedback",
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
    feedback: [],
    selectedItem: {},
    item: {},
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
        text: "Customer",
        align: "start",
        sortable: true,
        value: "customer",
      },
      {
        text: "Feedback",
        align: "start",
        sortable: true,
        value: "text",
      },
      {
        text: "Rate",
        align: "start",
        sortable: false,
        value: "rating",
      },
      {
        text: "Date Added",
        align: "start",
        sortable: false,
        value: "created_at",
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
      if (this.data.keyword) params = params + "&keyword=" + this.data.keyword
      params = params + '&product=' + this.$route.params.id
      axios.get(`/admin-api/admin-feedback?${params}`).then(({ data }) => {
        this.feedback = data.data;
        this.total = data.total;
        this.data.isFetching = false;
      });
    },
    editItem(val){
      // console.log(this.alert.trigger,'trigger')
      this.selectedItem = val
      this.showForm = true
    },
    save(payload) {
      axios.post(`/admin-api/category`, payload).then(({ data }) => {
        this.fetchPage()
        this.newAlert(true, data.type, data.message)
      }).finally(()=>{
        this.showForm = false;
        this.payload = {};
      })
    },
    update(payload) {
      axios.put(`/admin-api/category/${this.selectedItem.id}`, payload).then(({ data }) => {
        this.showForm = false;
        this.fetchPage()
        this.newAlert(true, data.type, data.message)
        this.payload = {};
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
      this.item = {
        id: val.id,
        text: val.name,
        model: 'category'
      }
      this.deleteForm = true
    },
    confirm() {
      axios.delete(`/admin-api/${this.item.model}/${this.item.id}`).then(({data})=>{
        this.deleteForm = false
        this.fetchPage()
        this.newAlert(true, data.type, data.message)
      });
    }
  },
};
</script>