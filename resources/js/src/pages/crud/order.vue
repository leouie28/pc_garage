<template>
  <div>
    <v-row>
      <v-col lg="12">
        <v-card rounded="24" elevation="2">

          <v-data-table
            :headers="headers"
            :items="orders"
            item-key="name"
            class="elevation-1"
            :search="search"
            dense
          >

            <template v-slot:[`item.status`]="{ item }">
              <v-icon v-if="item.status" color="success">mdi-account-cash</v-icon>
              <v-icon v-else color="error">mdi-account-clock</v-icon>
            </template>

            <template v-slot:[`item.customer_id`]="{ item }">
              <span>{{ item.customers.name }}</span>
            </template>

            <template v-slot:[`item.employee_id`]="{ item }">
              <span>{{ item.employees.name }}</span>
            </template>

            <template v-slot:[`item.total`]="{ item }">
              <span><h3>₱ {{ item.total }}.00</h3></span>
            </template>

            <template v-slot:[`item.actions`]="{ item }">
              <v-btn
                icon
                color="green darken-1"
                @click="view_details(item)"
              >
                <v-icon> mdi-eye</v-icon>
              </v-btn>
            </template>

            <template v-slot:top>
              <v-toolbar
                  flat
              >
                <v-toolbar-title>Orders</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-col
                  cols="3"
                  md="2"
                  sm="2"
                >
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  class="mr-4"
                  single-line
                  hide-details
                ></v-text-field>
                </v-col>
              </v-toolbar>
            </template>
          </v-data-table>
            <v-dialog
              v-model="show_details"
              persistent
              max-width="50%"
            >
              <order-details
                :details="details"
                @close="show_details=false"
              >
              </order-details>
            </v-dialog>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import OrderDetails from './orderDetails.vue';
  export default {
    components:{
      OrderDetails
    },

    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'ID',
          align: 'center',
          sortable: false,
          value: 'id',
        },
        { text: 'Status', align: 'center', value: 'status' },
        { text: 'Quantity', align: 'center', value: 'order_qty', sortable: false },
        { text: 'Customer', align: 'center', value: 'customer_id', sortable: false },
        { text: 'Employee', align: 'center', value: 'employee_id', sortable: false },
        { text: 'Total', align: 'center', value: 'total', sortable: false },
        { text: 'Action', align: 'center', value: 'actions', sortable: false },

      ],
      orders: [],
      products: [],
      search: '',
      show_details: false,
      details:{}
    }),

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        axios.get('/admin/order').then(({data}) => {
          this.orders = data;
        })
      },

      view_details(item) {
        axios.get(`/admin/order/${item.id}/details`).then(({data}) => {
          this.show_details = true;
          this.details = data;
        })
      }
    },
  }
</script>

<style scoped>
  .dashboard{
      padding: 10px;
      border-radius: 10px;
      border: 1px solid rgb(235, 235, 235);
      box-shadow: 1px 5px 5px #ccc;
  }
</style>