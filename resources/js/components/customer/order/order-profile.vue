<template>
    <div>
        <v-card elevation="0" max-width="1200" class="mx-auto pa-2">
            <v-card-title>
                Order Info
                <v-spacer></v-spacer>
                <v-btn color="secondary"
                @click="$router.go(-1)">
                    <v-icon class="mr-2">mdi-backspace</v-icon>
                    Back
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col md="5" cols="12">
                        <v-card elevation="0">
                            <v-card-text>
                            <div class="d-flex justify-space-between">
                                <div>
                                    <h4>Order Id:</h4>
                                    <p class="text-h3 text--primary">
                                        {{ order.order_code }}
                                    </p>
                                </div>
                                <div>
                                    <h4>
                                        Status: 
                                        <v-chip
                                        label
                                        outlined
                                        v-if="order.status==1"
                                        color="secondary">
                                            Pending
                                            <v-icon class="ml-1">mdi-alert-circle-outline</v-icon>
                                        </v-chip>
                                        <v-chip
                                        label
                                        outlined
                                        v-if="order.status==2 || order.status==3"
                                        color="primary">
                                            Delivery
                                            <v-icon class="ml-1">mdi-truck-delivery-outline</v-icon>
                                        </v-chip>
                                        <v-chip
                                        label
                                        outlined
                                        v-if="order.status==4"
                                        color="success">
                                            Delivered
                                            <v-icon class="ml-1">mdi-check-all</v-icon>
                                        </v-chip>
                                    </h4>
                                </div>
                            </div>
                            <h4>Shipping Information:</h4>
                            <div class="mb-4">
                                <v-timeline
                                dense
                                class="py-3 pb-1"
                                align-top>
                                    <v-timeline-item
                                    class="py-0 ma-0"
                                    left
                                    icon="mdi-account">
                                        <p class="text-h5 text--primary">
                                            {{ order.customer.first_name }}
                                        </p>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    class="py-0 ma-0"
                                    left
                                    icon="mdi-map-marker">
                                        <p class="text-h5 text--primary">
                                            {{ order.customer.address }}
                                        </p>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    class="py-0 ma-0"
                                    left
                                    icon="mdi-phone">
                                        <p class="text-h5 text--primary">
                                            {{ order.customer.phone }}
                                        </p>
                                    </v-timeline-item>
                                </v-timeline>
                            </div>
                            <div class="d-flex justify-space-between">
                                <div>
                                    <h4>Date Order:</h4>
                                    <p class="text-h5 text--primary">
                                        {{ moment(order.created_at).format('MMM Do YY') }}
                                    </p>
                                </div>
                                <div>
                                    <h4>Date Arrival:</h4>
                                    <p class="text-h5 primary--text" v-if="order.arrival">
                                        {{ moment(order.arrival).format('MMM Do YY') }}
                                    </p>
                                    <p class="text-h5 primary--text" v-else>
                                        Not set..
                                    </p>
                                </div>
                            </div>
                            <v-divider class="my-2"></v-divider>
                            <v-sheet class="pa-2 text-center" color="success" rounded="">
                                <span class="white--text text-h5">Total: &#8369; {{ order.total }}</span>
                            </v-sheet>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col md="7" cols="12" class="cus-border">
                        <v-card class="mb-4" elevation="0">
                            <v-card-title>
                                Order Items
                            </v-card-title>
                            <v-card-text>
                                <v-divider></v-divider>
                                <div class="d-flex justify-space-between align-center py-4 my-0 px-8"
                                    v-for="product in order.products" :key="product.id" style="border-bottom: 1px dotted #ccc;">

                                    <div class="mb-2 d-flex justify-center ml-3 align-center">
                                        <v-avatar height="60" width="80" tile>
                                            <v-img
                                            :src="product.images.length?'/images/products/' + product.id + '/' + product.images[0].file_name:'/images/default/noimage.png'"
                                            ></v-img>
                                        </v-avatar>
                                        <div class="ml-3">
                                            <h3 class="cus-font secondary--text">
                                                &#8369; {{ product.price }}
                                            </h3>
                                            <h3 class="cus-font text--primary oneline">
                                                {{ product.name }}
                                            </h3>
                                            <div class="cus-font secondary--text twoline">
                                                {{ product.description }}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <v-tooltip top v-if="order.status==4">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                @click="feedback(product)"
                                                v-bind="attrs"
                                                v-on="on"
                                                icon>
                                                <v-icon>mdi-message-processing-outline</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Add Feedback</span>
                                        </v-tooltip>
                                    </div>
                                </div>
                                <!-- <div
                                v-for="product in order.products"
                                :key="product.pivot.id">
                                    <div class="my-2 d-flex justify-space-between">
                                        <div class="d-flex justify-space-between align-center">
                                            <v-img
                                            style="width:60px;height:60px;"
                                            alt="image"
                                            :src="product.images.length?'/images/products/' + product.id + '/' + product.images[0].file_name:'/images/default/noimage.png'"
                                            max-height="100"
                                            max-width="100">
                                            </v-img>
                                            <div class="ml-3">
                                                <span class="text-h5 text--primary">
                                                    {{ product.name }}
                                                </span>
                                                <h4 class="blue--text">Quantity: {{ product.pivot.quantity }}</h4>
                                            </div>
                                        </div>
                                        <v-sheet class="pa-4 text-right">
                                            <h2>&#8369; {{ product.pivot.price }}</h2>
                                        </v-sheet>
                                    </div>
                                    <v-divider></v-divider>
                                </div> -->
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-dialog v-model="feedbackForm" max-width="500" persistent>
            <feedback-form :show="item" @close="feedbackForm=false"></feedback-form>
        </v-dialog>
    </div>
</template>
<script>
import FeedbackForm from './feedback-form.vue'
export default {
    components: {
        FeedbackForm,
    },
    data: () => ({
        feedbackForm: false,
        item: {},
        order: {
            customer: ''
        },
    }),
    mounted() {
        this.show()
    },
    methods: {
        show() {
            let id = this.$route.params.id
            axios.get(`/customer-api/orders/${id}`).then(({data})=>{
                this.order = data
                console.log(data)
            })
        },
        feedback(val){
            this.item = val
            this.feedbackForm = true
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
.cus-border{
    border-left: 1px solid #ccc;
}
.oneline, .twoline{
    max-width: 290px !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>