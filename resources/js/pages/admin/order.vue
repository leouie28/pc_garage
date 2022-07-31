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
        :items="orders"
        max-height="100%"
        :search="data.keyword"
        :loading="data.isFetching"
        :server-items-length="total"
        v-model="itemsSelected"
        item-key="id"
        @input="selectOption()"
        :single-select="false"
        show-select
        :footer-props="footerPages"
        :options.sync="options"
        :items-per-page="options.itemsPerPage"
        @update:options="fetchPage"
        @click:row="viewOrder"
        class="cursor-pointer table-fix-height"
        fixed-header
      >
        <template v-slot:[`header.status`]>
          <div class="d-flex justify-center align-center">
            <span class="mr-2">Status</span>
            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-chip
                    class="mx-auto d-flex justify-center"
                    label
                    small
                    outlined
                    color="secondary"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon small>
                      mdi-filter-outline
                    </v-icon>
                    All
                  </v-chip>
                </template>
                <v-list dense>
                  <v-list-item-group>
                    <v-list-item
                      v-for="stat in statItem"
                      :key="stat.id"
                    >
                      <v-list-item-title>{{ stat.text }}</v-list-item-title>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
          </div>
          </div>
        </template>
        <template v-slot:[`item.customer`]="{ item }">
          {{ item.customer.first_name+' '+item.customer.last_name }} 
        </template>
        <template v-slot:[`item.products`]="{ item }">
          <v-chip
            v-if="item.products.length>0"
            small
            dark
            color="teal"
            class="mr-1 prod-truncate"
          >
          {{ item.products[0].name }}
           <!-- ({{ product.pivot.quantity }}) {{ product.name }} -->
          </v-chip>
          <span v-if="item.products.length>1">+ more...</span>
        </template>
        <template v-slot:[`item.created_at`]="{ item }">
          {{ moment(item.created_at).format('MMMM DD YYYY') }}
        </template>
        <template v-slot:[`item.arrival`]="{ item }">
          <v-chip
          outlined
          :color="arrivalStat(item.arrival)"
          @click.stop="arrivalPicker(item.id), arriveSelected = item.arrival"
          label>
            <v-icon left small>
              mdi-calendar
            </v-icon>
            <span v-if="item.arrival">
              {{ moment(item.arrival).format('MMMM DD YYYY') }}
            </span>
            <span v-else style="width:80px;">
              Set Arrival
            </span>
          </v-chip>
          <!-- {{ moment(item.arrival).format('MMMM DD YYYY') }} -->
        </template>
        <template v-slot:[`item.total`]="{ item }">
          &#8369; {{ item.total }}
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  style="width:120px;"
                  :color="status(item.status).color"
                  class="mx-auto d-flex justify-end"
                  label
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
        </template>
        <template v-slot:no-data>
          <div>No Data</div>
        </template>
      </v-data-table>
    </v-card>
    <v-fab-transition>
      <v-btn
        v-if="changeBtn"
        elevation="12"
        large
        color="primary"
        bottom
        @click=" multiple_update = true"
        class="v-btn--example"
      >
        <v-icon>mdi-square-edit-outline</v-icon>
        Multiple Update
      </v-btn>
    </v-fab-transition>
    <v-dialog
    v-model="arrivalDatePicker"
    persistent
    max-width="300"
    >
        <v-date-picker
        full-width
        width="340"
        show-adjacent-months
        scrollable
        v-model="arriveSelected"
        >
        <v-spacer></v-spacer>
        <v-btn
            text
            color="primary"
            @click="arrivalDatePicker = false"
        >
            Cancel
        </v-btn>
        <v-btn
            text
            color="primary"
            @click="updateArrival(arrivalId, arriveSelected)"
        >
            OK
        </v-btn>
        </v-date-picker>
    </v-dialog>
    <v-dialog v-model="showForm" persistent max-width="600">
      <order-form @cancel="close" @save="save"></order-form>
    </v-dialog>
    <v-dialog v-model="multiple_update" persistent max-width="500">
      <multiple-update @cancel="close" @confirm="updateMultiple"></multiple-update>
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
import TableHeader from "../../components/table-header.vue";
import OrderForm from '../../components/admin/order/form.vue'
import multipleUpdate from "../../components/admin/order/multiple-update.vue";
import productVue from './product.vue';
  export default {
    components: {
      OrderForm,
      TableHeader,
      multipleUpdate
    },
    data: () => ({
      date: moment().format('MMMM DD YYYY'),
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
      changeBtn: false,
      showForm: false,
      multiple_update: false,
      dialogDelete: false,
      orders: [],
      arriveSelected: new Date().toISOString().slice(0, 10),
      arrivalId: '',
      arrivalDatePicker: false,
      itemsSelected: [],
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
          text: 'Order Code',
          align: 'start',
          sortable: true,
          value: 'order_code',
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
          align: 'center',
          sortable: true,
          value: 'arrival',
        },
        {
          text: 'Date Received',
          align: 'start',
          sortable: true,
          value: 'date_received',
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
          sortable: false,
          value: 'status',
        },
      ],
    }),
    methods: {
      viewOrder(item) {
        // console.log(this.$route)
        this.$router.push({path: this.$route.fullPath+'/'+item.id})
      },
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
      updateMultiple(val) {
        console.log(val)
        console.log(this.itemsSelected, 'selected')
        let groupPayload = {}
        groupPayload.items = []
        this.itemsSelected.forEach(elem => {
          groupPayload.items.push(elem.id)
        });
        groupPayload.arrival = val.arrival
        groupPayload.status = val.status
        axios.put(`/admin-api/order/group-update`, groupPayload).then(({ data }) => {
          this.fetchPage()
          this.itemsSelected = []
          this.newAlert(true, data.type, data.message)
        }).finally(()=>{
        })
        this.multiple_update = false
      },
      arrivalPicker(val) {
        this.arrivalDatePicker = true
        this.arrivalId = val
        console.log(val)
      },
      updateStatus(ord, stat){
        let order = { order: ord, status: stat}
        axios.put(`/admin-api/order/update-status/${ord}`, order).then(({ data }) => {
          this.fetchPage()
          this.newAlert(true, data.type, data.message)
        }).finally(()=>{
          this.showForm = false;
          this.payload = null;
        })
      },
      updateArrival(ord, arv){
        // let arrival = { order: ord, arrive: arv}
        axios.put(`/admin-api/order/update-arrival/${ord}?arrive=${arv}`).then(({ data }) => {
          this.fetchPage()
          this.newAlert(true, data.type, data.message)
        }).finally(()=>{
          this.arrivalDatePicker = false;
        })
      },
      save(payload) {
        axios.post(`/admin-api/order`, payload).then(({ data }) => {
          this.fetchPage()
          this.newAlert(true, data.type, data.message)
        }).finally(()=>{
          this.showForm = false;
          this.payload = null;
        })
      },
      close() {
        this.multiple_update = false
        this.showForm = false
      },
      prodName(val) {
        let prod = []
        val.forEach((elem, index) => {
          if(!prod.includes(elem.name)){
            prod.push(elem.name)
          }
        });
        return prod
      },
      selectOption() {
        if(this.itemsSelected.length>0){
          this.changeBtn = true
        }else{
          this.changeBtn = false
        }
      },
      arrivalStat(val){
        let now = moment()
        if(val!=null){
          if(moment(val)>=now){
            return 'primary'
          }else{
            return 'secondary'
          }
        }else{
          return 'success'
        }
      },
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
    },
    watch: {

    }
  }
</script>

<style scoped>
.v-btn--example {
    bottom: 0;
    right: 0;
    position: absolute;
    margin: 0 32px 32px 0;
  }
</style>