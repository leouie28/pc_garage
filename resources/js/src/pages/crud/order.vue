<template>
  <div>
    <v-row>
      <v-col lg="12">
        <v-card rounded="24" elevation="2">

          <v-data-table
            :headers="headers"
            :items="orderproducts"
            item-key="name"
            class="elevation-1"
            :search="search"
            dense
          >

            <template v-slot:[`item.status`]="{ item }">
              <v-icon  v-if="item.status" color="success" > mdi-account-check</v-icon>
              <v-icon v-else color="error">mdi-account-clock</v-icon>
            </template>

            <template v-slot:[`item.product_id`]="{ item }">
              <span>{{ item.products.name }}</span>
            </template>

            <template v-slot:[`item.option_id`]="{ item }">
              <span>{{ item.options.name }}</span>
            </template>

            <template v-slot:[`item.customer`]="{ item }">
              <span>{{ item.orders.customers.name }}</span>
            </template>

            <template v-slot:[`item.total`]="{ item }">
              <span><h3>₱ {{ item.orders.total }}.00</h3></span>
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
                <v-toolbar-title>Order_Products</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-col
                  cols="6"
                  md="3"
                  sm="4"
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
              max-width="500px"
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
        { text: 'Quantity', align: 'center', value: 'quantity', sortable: false },
        { text: 'Price', align: 'center', value: 'price', sortable: false },
        { text: 'Product', align: 'center', value: 'product_id', sortable: false },
        { text: 'Option', align: 'center', value: 'option_id', sortable: false },
        { text: 'Customer', align: 'center', value: 'customer', sortable: false },
        { text: 'Total', align: 'center', value: 'total', sortable: false },
        { text: 'Action', align: 'center', value: 'actions', sortable: false },

      ],
      orderproducts: [],
      products: [],
      orders: [],
      options: [],
      search: '',
      show_details: false,
      details:{}
    }),

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        axios.get('/admin/orderProduct').then(({data}) => {
          this.orderproducts = data;
          //console.log(this.orderproducts, 'test')
        })
      },

      view_details(item) {
        this.show_details = true;
        this.details = item;
        //console.log(this.details)
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