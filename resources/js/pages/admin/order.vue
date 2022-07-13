<template>
  <div>
    <v-card elevation="0" class="pa-2">
        <v-data-table
            :headers="headers"
            :single-select="false"
            :items="orders"
            item-key="name"
            multi-sort
        >
            <template v-slot:top>
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
            </template>
            <!-- <template v-slot:[`item.name`]="{ item }">
                {{ item.first_name }} {{ item.last_name }}
            </template> -->
            <template v-slot:[`item.action`]="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
            </template>
            <template v-slot:no-data>
            <div>
                No Data
            </div>
            </template>
        </v-data-table>
    </v-card>
    <v-dialog
      v-model="showForm"
      persistent
      max-width="600"
    >
      <product-form
        @cancel="close"
        @save="save"
      >
      </product-form>
    </v-dialog>
  </div>
</template>

<script>
import moment from 'moment';
import ProductForm from '../../components/admin/order/form.vue'
  export default {
    components: {
      ProductForm
    },
    data: () => ({
      showForm: false,
      dialogDelete: false,
      orders: [],
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
          value: 'product',
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
          align: 'start',
          sortable: true,
          value: 'status',
        },
        {
          text: 'Action',
          align: 'start',
          sortable: true,
          value: 'action',
        },
      ],
    }),

    computed: {

    },

    watch: {

    },

    created() {
      this.initialize()
    },
    methods: {
      initialize () {
        this.getOrder()
      },
      getOrder() {
        axios.get(`/admin-api/order`).then(({data})=>{
          this.orders = data
          console.log(data)
        })
      },
      save(payload) {
        console.log(payload)
        axios.post(`/admin-api/order`, payload).then(({data})=>{
          console.log(data)
        })
        this.initialize()
        this.showForm = false
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