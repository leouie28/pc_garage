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
        :items="orders"
        max-height="100%"
        :search="data.keyword"
        :loading="data.isFetching"
        :server-items-length="total"
        :single-select="false"
        show-select
        :footer-props="footerPages"
        :options.sync="options"
        :items-per-page="options.itemsPerPage"
        @update:options="fetchPage"
        @click:row="viewProduct"
        class="cursor-pointer table-fix-height"
        fixed-header
      >
        <template v-slot:[`item.customer`]="{ item }">
          {{ item.customer.first_name+' '+item.customer.last_name }} 
        </template>
        <template v-slot:[`item.products`]="{ item }">
          <v-chip
            v-for="product in item.products"
            :key="product.id"
            small
            color="primary"
          >
           ({{ product.pivot.quantity }}) {{ product.name }}
          </v-chip>
        </template>
        <template v-slot:[`item.created_at`]="{ item }">
          {{ moment(item.created_at).format('MMMM DD YYYY') }}
        </template>
        <template v-slot:[`item.arrival`]="{ item }">
          {{ moment(item.arrival).format('MMMM DD YYYY') }}
        </template>
        <template v-slot:[`item.total`]="{ item }">
          &#8369; {{ item.total }}
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  :color="status(item.status).color"
                  class="pr-0"
                  outlined
                  label
                  small
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ status(item.status).text }} 
                  <v-icon>
                    mdi-menu-down
                  </v-icon>
                </v-chip>
              </template>
              <v-list dense>
                <v-list-item-group
                :v-model="statSelected=item.status">
                  <v-list-item
                    v-for="stat in statItem"
                    :key="stat.id"
                    @click="updateStatus(item.id, stat.id)"
                  >
                    <v-list-item-title>{{ stat.text }}</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </div>
          <!-- <v-chip small :color="status(item.status).color">
            {{ status(item.status).text }}
          </v-chip> -->
        </template>
        <!-- <template v-slot:[`item.action`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template> -->
        <template v-slot:no-data>
          <div>No Data</div>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="showForm" persistent max-width="600">
      <order-form @cancel="close" @save="save"></order-form>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
import TableHeader from "../../components/table-header.vue";
import OrderForm from '../../components/admin/order/form.vue'
  export default {
    components: {
      OrderForm,
      TableHeader
    },
    data: () => ({
      data: {
        title: "Orders",
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
      orders: [],
      statSelected: '',
      statItem: [
          {id: 0, text: 'Cancel' },
          {id: 1, text: 'Pending' },
          {id: 2, text: 'Confirm' },
          {id: 3, text: 'On Delivery' },
          {id: 4, text: 'Delivered' },
      ],
      selected: [],
      title: 'Orders',
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        {
          text: 'Customer',
          align: 'start',
          sortable: true,
          value: 'customer',
        },
        {
          text: 'Product',
          align: 'start',
          sortable: true,
          value: 'products',
        },
        {
          text: 'Note',
          align: 'start',
          sortable: true,
          value: 'note',
        },
        {
          text: 'Date Order',
          align: 'start',
          sortable: true,
          value: 'created_at',
        },
        {
          text: 'Arrival',
          align: 'start',
          sortable: true,
          value: 'arrival',
        },
        {
          text: 'Total',
          align: 'start',
          sortable: true,
          value: 'total',
        },
        {
          text: 'Status',
          align: 'center',
          sortable: true,
          value: 'status',
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
        axios.get(`/admin-api/order?${params}`).then(({ data }) => {
          this.orders = data.data;
          this.total = data.total;
          this.data.isFetching = false;
        });
      },
      updateStatus(ord, stat){
        let order = { order: ord, status: stat}
        axios.put(`/admin-api/order/${ord}`, order).then(({ data }) => {
          this.fetchPage()
        }).finally(()=>{
          this.showForm = false;
          this.payload = null;
        })
      },
      // initialize () {
      //   this.getOrder()
      // },
      // getOrder() {
      //   axios.get(`/admin-api/order`).then(({data})=>{
      //     this.orders = data
      //     console.log(data)
      //   })
      // },
      save(payload) {
        axios.post(`/admin-api/order`, payload).then(({ data }) => {
          this.fetchPage()
        }).finally(()=>{
          this.showForm = false;
          this.payload = null;
        })
      },
      // save(payload) {
      //   console.log(payload)
      //   axios.post(`/admin-api/order`, payload).then(({data})=>{
      //     console.log(data)
      //   })
      //   this.initialize()
      //   this.showForm = false
      // },
      status(val){
        if(val==0){
          return {text: 'Canceled', color: 'error'}
        }
        else if(val==1){
          return {text: 'Pending', color: 'secondary'}
        }
        else if(val==2){
          return {text: 'Confirmed', color: 'primary'}
        }
        else if(val==3){
          return {text: 'On Delivery', color: 'orange'}
        }
        else if(val==4){
          return {text: 'Delivered', color: 'success'}
        }
      },
      addNew(){
        this.showForm = true
      },
      close() {
        this.showForm = false
      }
    },
  }
</script>