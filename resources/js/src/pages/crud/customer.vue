<template>
  <div>
    <v-row>
      <v-col lg="12">
        <v-card rounded="24" elevation="2">

          <v-data-table
            :headers="headers"
            :items="company"
            item-key="name"
            class="elevation-1"
            :search="search"
            dense
          >
          
            <template v-slot:[`item.name`]="{ item }">
              <span>{{ item.customers.name }}</span>
            </template>

            <template v-slot:[`item.phone`]="{ item }">
              <span>{{ item.customers.phone }}</span>
            </template>

            <template v-slot:[`item.email`]="{ item }">
              <span>{{ item.customers.email }}</span>
            </template>

            <template v-slot:top>
              <v-toolbar
                  flat
              >
                <v-toolbar-title>Customers</v-toolbar-title>
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
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'ID',
          align: 'center',
          sortable: false,
          value: 'id',
        },
        { text: 'Name', align: 'center', value: 'name' },
        { text: 'Phone', align: 'center', value: 'phone', sortable: false },
        { text: 'Email', value: 'email', sortable: false },

      ],
      company: [],
      search: '',
    }),

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        axios.get('/admin/customer').then(({data}) => {
          this.company = data;
        })
      },
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