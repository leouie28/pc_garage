<template>
  <div>
    <v-card elevation="0" class="pa-2">
        <v-data-table
            v-model="selected"
            show-select
            :headers="headers"
            :single-select="false"
            :items="products"
            item-key="name"
            multi-sort
            sort-by="calories"
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
                    color="primary"
                    dark
                    class="mb-2"
                >
                    New Item
                </v-btn>
            </v-toolbar>
            </template>
            <template v-slot:actions="{ item }">
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
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      products: [],
      selected: [],
      title: 'Products',
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {
          text: 'Description',
          align: 'start',
          sortable: true,
          value: 'description',
        },
        {
          text: 'Stocks',
          align: 'start',
          sortable: true,
          value: 'stock',
        },
        {
          text: 'Sold',
          align: 'start',
          sortable: true,
          value: 'order',
        },
        {
          text: 'Date Added',
          align: 'start',
          sortable: true,
          value: 'stock',
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

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        
      },
      getProduct() {

      }
    },
  }
</script>