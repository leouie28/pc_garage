<template>
  <div>
    <v-card elevation="0" class="pa-2">
        <v-data-table
            :headers="headers"
            :single-select="false"
            :items="customers"
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
            <template v-slot:[`item.name`]="{ item }">
                {{ item.first_name }} {{ item.last_name }}
            </template>
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
import ProductForm from '../../components/admin/product/form.vue'
  export default {
    components: {
      ProductForm
    },
    data: () => ({
      showForm: false,
      dialogDelete: false,
      customers: [],
      selected: [],
      title: 'Customers',
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {
          text: 'Birthday',
          align: 'start',
          sortable: true,
          value: 'birthday',
        },
        {
          text: 'Address',
          align: 'start',
          sortable: true,
          value: 'address',
        },
        {
          text: 'Phone',
          align: 'start',
          sortable: true,
          value: 'phone',
        },
        {
          text: 'Email',
          align: 'start',
          sortable: true,
          value: 'email',
        },
        {
          text: 'Orders',
          align: 'start',
          sortable: true,
          value: 'orders_count',
        },
        {
          text: 'Date Added',
          align: 'start',
          sortable: true,
          value: 'created_at',
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
        this.getProduct()
      },
      getProduct() {
        axios.get(`/admin-api/customer`).then(({data})=>{
          this.customers = data
          console.log(data)
        })
      },
      save(payload) {
        axios.post(`/admin-api/product`, payload).then(({data})=>{
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