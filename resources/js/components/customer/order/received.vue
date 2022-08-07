<template>
    <div v-if="orders.length">
        <div class="pt-3"
        v-for="order in orders"
        :key="order.id">
            <v-card elevation="0" outlined>
                <v-card-title class="py-2">
                Order Code: {{ order.order_code }}
                <v-spacer></v-spacer>
                <v-btn color="grey darken-1" small outlined elevation="0">
                    Cancel Order
                </v-btn>
                </v-card-title>
                <v-card-text class="white pt-4">
                <div class="d-flex justify-space-between">
                    <div class="mb-2 d-flex justify-center align-center">
                    <v-avatar height="60" width="80" tile>
                        <v-img
                        alt="Product Image"
                        :src="order.products[0].images.length?'/images/products/' + order.products[0].id + '/' + order.products[0].images[0].file_name:'/images/default/noimage.png'"
                        ></v-img>
                    </v-avatar>
                    <div class="ml-3">
                        <h3 class="cus-font text--primary text-max-width">
                        {{ order.products[0].name }}
                        </h3>
                        <div class="cus-font secondary--text text-max-width">
                        {{ order.products[0].description }}
                        </div>
                    <!-- <p class="text-h6 cus-font">Quantity: 8</p> -->
                    </div>
                    </div>
                    <div class="d-flex">
                    <!-- <span class="text-h6 cus-font">&#8369; 89</span> -->
                    <span class="mr-2">Qty: {{ order.products[0].pivot.quantity }}x</span>
                    <h3>&#8369; {{ order.products[0].price }}</h3>
                    </div>
                </div>
                <v-btn v-if="order.products.length>1" block outlined text>
                +{{ order.products.length -1 }} more products
                </v-btn>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="py-2 ">
                <div>Date Order 2022-07-28</div>
                <v-spacer></v-spacer>
                <span class="text-h6 mr-2">Total:</span>
                <v-sheet rounded="" color="secondary">
                    <span class="white--text text-h6 px-2">
                    &#8369; {{ order.total }}
                    </span>
                </v-sheet>
                </v-card-actions>
            </v-card>
        </div>
    </div>
    <empty v-else></empty>
</template>
<script>
import Empty from '@/components/global/empty.vue'
export default {
    components: {
        Empty
    },
    data () {
        return {
        tab: 0,
        orders: [],
        }
    },
    mounted() {
        this.getOrders()
    },
    methods: {
        getOrders() {
        axios.get(`/customer-api/orders?status=received`).then(({ data }) => {
            this.orders = data
        });
        }
    }
}
</script>