<template>
  <div>
    <v-card outlined class="pa-2 my-4">
      <table-header
        :data="data"
        @addNew="addNew"
        @refresh="fetchPage"
        @search="fetchPage"
        @resetFilters="resetFilter"
        @filterRecord="fetchPage"
        :hide="['filter', 'download']"
      >
      </table-header>
      <v-data-table
        :headers="headers"
        :items="stocks"
        max-height="100%"
        :search="data.keyword"
        :loading="data.isFetching"
        :server-items-length="total"
        :footer-props="footerPages"
        :options.sync="options"
        :items-per-page="options.itemsPerPage"
        @update:options="fetchPage"
        @click:row="viewItem"
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
            class="px-2"
            small
            elevation="0"
            color="secondary"
          >
            <v-icon small>mdi-plus-circle</v-icon>
          </v-btn>
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
    <v-dialog v-model="showForm" persistent max-width="500">
      <sku-form :selectedItem="selectedItem" @cancel="close" @save="save" @update="update"> </sku-form>
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
import DeleteDialog from "@/components/deleteDialog.vue";
import SkuForm from "@/components/admin/inventory/forms/SkuForm.vue"
import TableHeader from "@/components/table-header.vue";
export default {
  components: {
    DeleteDialog,
    SkuForm,
    TableHeader,
  },
  data: () => ({
    data: {
      title: "Sku Profile",
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
    item: {},
    stocks: [],
    selectedItem: {},
    selected: [],
    title: "Sales ",
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: true,
        value: "id",
      },
      {
        text: "Supplier/Name",
        align: "start",
        sortable: true,
        value: "name",
      },
      {
        text: "Sku Code",
        align: "center",
        sortable: false,
        value: "sku_code",
      },
      {
        text: "Products",
        align: "center",
        sortable: false,
        value: "products_count",
      },
      {
        text: "Date Created",
        align: "center",
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
    viewItem(item) {
        this.$router.push({path: this.$route.fullPath+'/'+item.id})
    },
    resetFilter() {},
    fetchPage() {
      this.data.isFetching = true;
      let params = this._createParams(this.options);
      params = params + this._createFilterParams(this.data.filter);
      if (this.data.keyword) params = params + "&keyword=" + this.data.keyword;
      axios.get(`/admin-api/sku-profile?${params}`).then(({ data }) => {
        this.stocks = data.data
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
      axios.post(`/admin-api/sku-profile`, payload).then(({ data }) => {
        this.fetchPage()
        this.newAlert(true, data.type, data.message)
      }).finally(()=>{
        this.showForm = false;
      })
    },
    update(payload) {
      axios.put(`/admin-api/sku-profile/${this.selectedItem.id}`, payload).then(({ data }) => {
        this.showForm = false;
        this.fetchPage()
        this.newAlert(true, data.type, data.message)
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
        model: 'sku-profile'
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