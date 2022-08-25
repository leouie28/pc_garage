<template>
    <div v-if="orders.length">
        <div class="pt-3"
        v-for="order in orders"
        :key="order.id">
            <v-card elevation="0" outlined @click="$router.push({path: 'orders/'+order.id})">
                <v-card-title class="py-2">
                Order<span class="tohide"> Code</span>: {{ order.order_code }}
                <v-spacer></v-spacer>
                <v-btn color="grey darken-1" @click.stop="warning = true, selected=order" small outlined elevation="0">
                    Receive Order
                </v-btn>
                </v-card-title>
                <v-card-text class="white pt-4">
                <div class="d-flex justify-space-between">
                    <div class="mb-2 d-flex justify-center align-center">
                        <v-avatar height="60" width="80" tile style="min-width:60px;">
                            <v-img
                            alt="Product Image"
                            :src="order.products[0].images.length?'/images/products/' + order.products[0].id + '/' + order.products[0].images[0].file_name:'/images/default/noimage.png'"
                            ></v-img>
                        </v-avatar>
                        <div class="ml-2">
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
                <v-sheet rounded="" color="primary">
                    <span class="white--text text-h6 px-2">
                    &#8369; {{ order.total }}
                    </span>
                </v-sheet>
                </v-card-actions>
            </v-card>
        </div>
        <v-dialog
        v-model="warning"
        persistent
        max-width="500">
            <v-card>
                <v-card-title>
                    Warning
                </v-card-title>
                <v-card-text class="text-center">
                    Are you sure you want to mark <span class="primary--text">"{{selected.order_code}}"</span> order as received?
                </v-card-text>
                <v-card-actions class="white">
                    <v-spacer></v-spacer>
                    <v-btn text color="secondary" @click="warning=false">
                        Cancel
                    </v-btn>
                    <v-btn color="success" @click="receivedOrder">
                        Confirm
                    </v-btn>
                </v-card-actions>
            </v-card>
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
        warning: false,
        orders: [],
        selected: {}
        }
    },
    mounted() {
        this.getOrders()
    },
    methods: {
        getOrders() {
            axios.get(`/customer-api/orders?status=delivery`).then(({ data }) => {
                this.orders = data
            });
        },
        receivedOrder() {
            axios.put(`/customer-api/orders/receive-order/${this.selected.id}`).then(({ data }) => {
                this.newAlert(true, data.type, data.message)
                this.getOrders()
                this.warning = false
            });
        }
    }
}
</script>