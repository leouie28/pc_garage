<template>
<div>
    <v-card>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon
                color="red darken-1"
                @click="close"
                >
                mdi-close-circle
                </v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
    <v-row>
      <v-col lg="12">
        <v-card rounded="24" elevation="2">

          <v-data-table
            :headers="headers"
            :items="details"
            item-key="name"
            class="elevation-1"
            dense
          >

            <template v-slot:[`item.prepared`]="{ item }">
              <v-icon v-if="item.prepared" color="success">mdi-check-circle</v-icon>
              <v-icon v-else color="error">mdi-close-circle</v-icon>
            </template>

            <template v-slot:[`item.product_id`]="{ item }">
              <span><h3>{{ item.products.name }}</h3></span>
            </template>

            <!-- <template v-slot:[`item.option_id`]="{ item }">
              <span><h3>{{ item.options.name }}</h3></span>
            </template> -->

            <template v-slot:[`item.quantity`]="{ item }">
              <span><h3>{{ item.quantity }}</h3></span>
            </template>

            <template v-slot:[`item.price`]="{ item }">
              <span><h3>₱ {{ item.price }}.00</h3></span>
            </template>

            <template v-slot:top>
              <v-toolbar
                  flat
              >
                <v-toolbar-title>Order Details</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
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
        headers: [
        { text: 'Product', value: 'product_id', sortable: false },
        { text: 'Quantity', align: 'center', value: 'quantity', sortable: false },
        { text: 'Price', value: 'price', sortable: false },
        // { text: 'Option', align: 'center', value: 'option_id', sortable: false },
        { text: 'Comment', value: 'comment', sortable: false },
        { text: 'Prepared', align: 'center', value: 'prepared', sortable: false },

      ],
      products: [],
      options: [],
    }),

    props:{
        details:{}
    },

    methods: {
        close () {
            this.$emit("close")
      },
    }
}
</script>
