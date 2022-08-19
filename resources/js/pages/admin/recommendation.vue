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
        :hide="['filter', 'addNew','download']"
      >
        <template v-slot:custom_filter>
          <admin-filter :filter="data.filter"></admin-filter>
        </template>
      </table-header>
      <v-data-table
        :headers="headers"
        :items="recommendations"
        max-height="100%"
        :search="data.keyword"
        :loading="data.isFetching"
        :server-items-length="total"
        :footer-props="footerPages"
        :options.sync="options"
        :items-per-page="options.itemsPerPage"
        @update:options="fetchPage"
        @click:row="viewRcmd"
        class="cursor-pointer table-fix-height"
        fixed-header
      >
        <template v-slot:[`item.customer`]="{ item }">
          {{ item.customer.first_name+ ' '+item.customer.last_name }}
        </template>
        <template v-slot:[`item.created_at`]="{ item }">
          {{ moment(item.created_at).format('MMMM DD YYYY') }}
        </template>
        <template v-slot:[`item.action`]="{ item }">
            <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                class="px-2"
                small
                elevation="0"
                color="secondary"
                dark
                v-bind="attrs"
                v-on="on"
                >
                <v-icon small>mdi-email-mark-as-unread</v-icon>
                </v-btn>
            </template>
            <span>Mark as read</span>
            </v-tooltip>
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
    <v-dialog v-model="deleteForm" persistent width="500">
      <delete-dialog :data="user" @close="close" @confirm="confirm"></delete-dialog>
    </v-dialog>
    <v-dialog persistent v-model="showRcmd" max-width="600">
      <v-card>
        <v-card-title>
          Recommendation
          <v-spacer></v-spacer>
          <v-btn icon @click="showRcmd=false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
              dense
              filled
              readonly
              v-model="selectedItem.customer_name"
              hide-details=""
              label="Sender">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-textarea
              dense
              filled
              readonly
              v-model="selectedItem.recommendation"
              hide-details=""
              label="Message">
              </v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="markRead" color="secondary">
            Mark as read
          </v-btn>
        </v-card-actions>
      </v-card>
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
import DeleteDialog from "../../components/deleteDialog.vue";
import TableHeader from "../../components/table-header.vue";
export default {
  components: {
    DeleteDialog,
    TableHeader,
  },
  data: () => ({
    showRcmd: false,
    data: {
      title: "Recommendations",
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
    user: {},
    recommendations: [],
    selectedItem: {
      customer_name: ''
    },
    selected: [],
    title: "Recommendations",
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
        text: "Recommendation",
        align: "start",
        sortable: false,
        value: "recommendation",
      },
      {
        text: "Date added",
        align: "start",
        sortable: false,
        value: "created_at",
      },
      {
        text: "Status",
        align: "start",
        sortable: false,
        value: "status",
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
    viewRcmd(val) {
      this.showRcmd = true
      this.selectedItem = val
      this.selectedItem.customer_name = val.customer.first_name + ' ' + val.customer.last_name
    },
    resetFilter() {},
    fetchPage() {
      this.data.isFetching = true;
      let params = this._createParams(this.options);
      params = params + this._createFilterParams(this.data.filter);
      if (this.data.keyword) params = params + "&keyword=" + this.data.keyword;
      axios.get(`/admin-api/recommendation?${params}`).then(({ data }) => {
        this.recommendations = data.data;
        this.total = data.total;
        this.data.isFetching = false;
      });
    },
    markRead() {
      axios.put(`/admin-api/recommendation/mark-read/${this.selectedItem.id}`).then(({data})=>{
        this.showRcmd = false
        this.newAlert(true, data.type, data.message)
        this.fetchPage()
        this.selectedItem = {
          customer_name: ''
        }
      });
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
        text: val.customer.first_name + ' ' + val.customer.last_name,
        model: 'recommendation'
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