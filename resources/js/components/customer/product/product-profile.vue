<template>
    <div class="profile-prod">
        <v-sheet color="blue-grey lighten-5" class="prod-profile">
            <v-card style="max-width:1000px;" class="mx-auto">
                <v-card-title>
                    Product Info
                    <v-spacer></v-spacer>
                    <v-btn color="secondary" @click="$router.go(-1)">
                        <v-icon class="mr-2">mdi-backspace</v-icon>
                        Return
                    </v-btn>
                </v-card-title>
                <v-card-text class="py-4 pb-6">
                    <v-row>
                        <v-col md="5" cols="12" class="text-center">
                            <v-img
                            class="prod-profile-img"
                            style="border: 1px solid #ccc;"
                            alt="image"
                            :src="product.images.length>0?'/images/products/' + product.id + '/' + product.images[0].file_name:'/images/default/noimage.png'">
                            </v-img>
                            <!-- <v-sheet color="primary" rounded="" dark class="py-2">
                                <span class="text-h5">Price: &#8369; {{ product.price }}</span>
                            </v-sheet>
                            <div class="text-center mt-4">
                                <p class="text-h6 my-0">Canceled: <span class="red--text">{{ pars(product.canceled_sum_order_productquantity) }}</span></p>
                                <p class="text-h6 my-0">Pending: <span class="secondary--text">{{ pars(product.pending_sum_order_productquantity) }}</span></p>
                                <p class="text-h6 my-0">To Deliver: <span class="blue--text">{{ pars(product.to_deliver_sum_order_productquantity) }}</span></p>
                                <p class="text-h6 my-0">Sold: <span class="green--text">{{ pars(product.sold_sum_order_productquantity) }}</span></p>
                            </div> -->
                        </v-col>
                        <v-col md="7" cols="12">
                            <span class="text-h5 font-weight-bold">
                                {{ product.name }}
                            </span>
                            <div class="d-flex py-3">
                                <div class="text-h5 mr-2">Price: &#8369; {{ product.price }}</div>
                                <v-chip label outlined :color="product.stocks_sum_stocksstocks>0? 'secondary' : 'error'">
                                    Stocks: {{ product.stocks_sum_stocksstocks>0 ? product.stocks_sum_stocksstocks : 'Out of Stocks' }}
                                </v-chip>
                                <!-- <div class="text-h6 ml-4">Stocks: {{ product.price }}</div> -->
                            </div>
                            <div class="d-flex justify-start flex-wrap">
                                <v-btn color="secondary" class="mb-2" @click="$router.push({path: '/compatibility/'+product.id})">
                                    <span class="tohide">Compatibility</span>
                                    <span class="formobile">Check</span>
                                    <v-icon small class="ml-2">mdi-play</v-icon>
                                </v-btn>
                                <v-btn
                                color="primary"
                                class="mx-2 mb-2"
                                @click="addCart(product)"
                                >
                                    <span class="tohide">Add to</span> Cart
                                    <v-icon small class="ml-2">mdi-cart-outline</v-icon>
                                </v-btn>
                                <v-btn
                                :disabled="product.stocks_sum_stocksstocks>0?false:true"
                                color="success"
                                class="mb-2"
                                @click="checkout(product)"
                                >
                                    Buy<span class="tohide"> Now</span>
                                    <v-icon small class="ml-2">mdi-currency-php</v-icon>
                                </v-btn>
                            </div>
                            <h4 class="text-uppercase mt-2 mb-2">Category:

                                <v-chip
                                v-for="category in product.categories"
                                :key="category.id"
                                class="mr-2"
                                small
                                :color="category.color">
                                    {{category.name}}
                                </v-chip>
                            </h4>
                        </v-col>
                    </v-row>
                    <v-sheet color="grey lighten-3" rounded="" class="pa-3 mt-4">
                        <h4 class="text-uppercase">Description</h4>
                        <p class="text-subtitle-1" style="font-size:18px;">
                            {{ product.description }}
                        </p>
                    </v-sheet>
                    <v-divider class="mt-4"></v-divider>
                    <v-subheader>
                        <h3>Feedback</h3>
                    </v-subheader>
                    <div v-if="product.feedback.length>0">
                        <div class="d-flex fb mb-3" v-for="fb in product.feedback" :key="fb.id">
                            <v-avatar size="36" color="blue-grey" class="mr-2 mt-1">
                                <v-img
                                v-if="fb.customer.images.length>0"
                                :src="'/images/customer/'+fb.customer.images[0].file_name"
                                ></v-img>
                                <v-icon v-else color="white">mdi-account</v-icon>
                            </v-avatar>
                            <v-sheet rounded="" color="grey lighten-5" elevation="2" class="pa-2" width="100%">
                                <h4>{{ fb.CustomerName }}</h4>
                                <v-rating
                                class="cus-rate mt-n10"
                                :value="fb.rating"
                                half-increments
                                readonly
                                color="yellow darken-3"
                                background-color="grey darken-1"
                                empty-icon="mdi-star-outline"
                                size="16"
                                ></v-rating>
                                <div>
                                    {{ fb.text }}
                                    <br>
                                    <div class="ma-2" v-if="fb.images.length>0">
                                        <v-img
                                        max-width="100"
                                        max-height="80"
                                        :src="'/images/feedback/' + fb.id + '/' + fb.images[0].file_name"
                                        ></v-img>
                                    </div>
                                    <span>{{ moment(fb.created_at).format('YYYY/MM/DD') }}</span>
                                </div>
                            </v-sheet>
                        </div>
                    </div>
                    <div v-else class="text-center">
                        <h3>No feedback yet</h3>
                    </div>
                    <v-divider class="mt-4"></v-divider>
                    <v-subheader>
                        <h3>Recommended Products</h3>
                    </v-subheader>
                    <div :class="similar.length>=4 ? 'd-flex justify-center py-2 flex-wrap' : 'd-flex justify-start py-2 flex-wrap'">
                        <v-card
                        v-for="product in similar"
                        :key="product.id"
                        class="mr-4 mb-4 prod"
                        max-width="200"
                        @click="$router.push({path: '/product/'+product.id})"
                        >
                            <v-img
                            height="150"
                            :src="product.images.length>0?'/images/products/' + product.id + '/' + product.images[0].file_name:'/images/default/noimage.png'"
                            ></v-img>
                            <v-card-text>
                                <h4 class="oneline">
                                    {{ product.name }}
                                </h4>
                                <h3 class="text--primary">
                                    &#8369; {{ product.price }}
                                </h3>
                                <div class="d-flex">
                                    <v-rating
                                    class="cus-rate mr-1"
                                    :value="product.rates"
                                    readonly
                                    color="yellow darken-3"
                                    background-color="grey darken-1"
                                    empty-icon="mdi-star-outline"
                                    size="16"
                                    ></v-rating>
                                    <span>({{product.rating_count}})</span>
                                </div>
                            </v-card-text>
                            <v-divider class="mx-2"></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn block small color="secondary">
                                    View Details
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </div>
                </v-card-text>
            </v-card>
        </v-sheet>
        <v-dialog
        v-model="cartDialog"
        max-width="800">
            <cart-checkout :item="item" :checkout="isCheckout" @save="saveCart" @cancel="cartDialog = false"></cart-checkout>
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
</template>

<script>
import moment from 'moment'
import CartCheckout from '@/components/customer/product/CartOrCheckout.vue'
export default {
    components: {
        CartCheckout,
    },
    data: () => ({
        product: {
            images: [],
            feedback: []
        },
        isCheckout: true,
        cartDialog: false,
        warningDialog: false,
        item: {},
        similar: [],
        data: {
            product_id: '',
            quantity: 1
        },
    }),
    props: {
        selectedItem: {}
    },
    created() {
        this.show()
    },
    methods: {
        show() {
            let id = this.$route.params.id
            axios.get(`/customer-api/products/${id}`).then(({data})=>{
                this.product = data.product
                this.similar = data.similar
            })
        },
        saveCart(data) {
            axios.post(`/customer-api/cart`, data).then(({ data }) => {
                this.newAlert(true, data.type, data.message)
                this.cartDialog = false
                this.$emit('event')
            });
        },
        addCart(item){
            this.item = item
            this.isCheckout = false
            this.cartDialog = true
        },
        checkout(item){
            this.item = item
            this.isCheckout = true
            this.cartDialog = true
        },
        pars(val){
            if(val){
                return val
            }else{
                return 0
            }
        }
    },
    watch: {
        '$route': {
            handler(val) {
                if(val) {
                    this.show()
                }
            },immediate:true, deep:true
        }
    }
}
</script>
<style scoped>
.cus-rate >>> .v-icon{
    padding: 0 !important;
    margin-top: 0 !important;
}
.cus-rate{
    margin-top: 0 !important;
}
.oneline{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
            line-clamp: 1; 
    -webkit-box-orient: vertical;
}
.fb >>> .cus-rate{
    margin-top: -5px !important;
    padding-top: 0 !important;
}
</style>