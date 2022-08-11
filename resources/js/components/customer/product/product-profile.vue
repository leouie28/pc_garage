<template>
    <div>
        <v-sheet color="blue-grey lighten-5" class="pa-10">
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
                            class="mb-6"
                            alt="image"
                            :src="product.images?'/images/products/' + product.id + '/' + product.images[0].file_name:'/images/default/noimage.png'">
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
                                <div class="text-h5">Price: &#8369; {{ product.price }}</div>
                                <div class="text-h6 ml-4">Stocks: {{ product.price }}</div>
                            </div>
                            <v-sheet color="grey lighten-3" rounded="" class="pa-3">
                                <h4 class="text-uppercase">Description</h4>
                                <p class="text-subtitle-1" style="font-size:18px;">
                                    {{ product.description }}
                                </p>
                            </v-sheet>
                            <h4 class="text-uppercase mt-4 mb-2">Category:

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
                    <v-divider></v-divider>
                    <v-subheader>
                        Feedback
                    </v-subheader>
                    <div v-if="product.feedback.length>0">
                        <div class="d-flex fb" v-for="fb in product.feedback" :key="fb.id">
                            <v-avatar size="36" color="blue-grey" class="mr-2 mt-1">
                                <v-img
                                v-if="fb.customer.avatar!=null"
                                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
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
                                    <div>
    
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
                    <div>
                        
                    </div>
                </v-card-text>
            </v-card>
        </v-sheet>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    data: () => ({
        product: {}
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
            })
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
.fb >>> .cus-rate{
    margin-top: -5px !important;
    padding-top: 0 !important;
}
</style>