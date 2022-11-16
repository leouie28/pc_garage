<template>
    <div>
        <v-sheet color="blue-grey lighten-5" class="">
            <v-card  class="mx-auto" elevation="0">
                <v-card-title>
                    Product Info
                    <v-spacer></v-spacer>
                    <v-btn color="secondary"
                    @click="$router.go(-1)">
                        <v-icon class="mr-2">mdi-backspace</v-icon>
                        Back
                    </v-btn>
                </v-card-title>
                <v-card-text class="py-4 pb-6">
                    <v-row>
                        <v-col md="4" lg="4" cols="12">
                            <v-img
                            class="mb-6"
                            alt="image"
                            :src="product.images.length?'/images/products/' + product.id + '/' + product.images[0].file_name:'/images/default/noimage.png'">
                            </v-img>
                            <h3 class="text-uppercase">Actions</h3>
                            <div class="my-2">
                                <v-btn outlined color="primary">
                                    Edit Info
                                    <v-icon>mdi-square-edit-outline</v-icon>
                                </v-btn>
                                <v-btn outlined color="warning">
                                    Reorder Point
                                    <v-icon>mdi-clipboard-play-multiple-outline</v-icon>
                                </v-btn>
                            </div>
                            <v-sheet color="primary" rounded="" dark class="py-2">
                                <span class="text-h5">Price: &#8369; {{ product.price }}</span>
                            </v-sheet>
                            <div class="text-center mt-4">
                                <p class="text-h6 my-0">Canceled: <span class="red--text">{{ pars(product.canceled_sum_order_productquantity) }}</span></p>
                                <p class="text-h6 my-0">Pending: <span class="secondary--text">{{ pars(product.pending_sum_order_productquantity) }}</span></p>
                                <p class="text-h6 my-0">To Deliver: <span class="blue--text">{{ pars(product.to_deliver_sum_order_productquantity) }}</span></p>
                                <p class="text-h6 my-0">Sold: <span class="green--text">{{ pars(product.sold_sum_order_productquantity) }}</span></p>
                            </div>
                        </v-col>
                        <v-col md="8" lg="8" cols="12">
                            <span class="text-h4 font-weight-bold">
                                {{ product.name }}
                            </span>
                            <div class="d-flex align-center">
                                <h3 class="text-uppercase">Rating:</h3>
                                <div class="d-flex align-center">
                                    <v-rating
                                    :value="product.rates"
                                    readonly
                                    half-increments
                                    color="yellow darken-3"
                                    background-color="grey darken-1"
                                    empty-icon="mdi-star-outline"
                                    size="32"
                                    ></v-rating>
                                    <h3 class="text-h6">({{product.rating_count}})</h3>
                                </div>
                            </div>
                            <div>
                                <v-chip color="success">
                                    <h3>Cost Price: &#8369; 34</h3>
                                </v-chip>
                                <v-chip color="primary">
                                    <h3>Selling Price: &#8369; 34</h3>
                                </v-chip>
                            </div>
                            <h3 class="text-uppercase mt-2 mb-4">Description</h3>
                            <v-sheet color="grey lighten-3" rounded="" class="pa-3">
                                <p class="text-subtitle-1" style="font-size:18px;">
                                    {{ product.description }}
                                </p>
                            </v-sheet>
                            <h3 class="text-uppercase mt-4 mb-2">Category</h3>
                            <v-chip
                            v-for="category in product.categories"
                            :key="category.id"
                            class="mr-2"
                            :color="category.color">
                                {{category.name}}
                            </v-chip>
                            <v-divider class="mt-4 mb-4"></v-divider>
                            <h3 class="text-uppercase mt-4 mb-2">Stock</h3>
                            <div v-if="product.stocks.length>0">
                                <v-sheet
                                rounded=""
                                outlined
                                class="mb-2"
                                v-for="sku in product.stocks"
                                :key="sku.sku">
                                    <v-subheader class="d-flex justify-space-between">
                                        <h4>SKU: <span class="blue--text">{{ sku.sku }}</span></h4>
                                        <h4>Current Stocks: <span class="blue--text">{{ sku.stocks }}</span></h4>
                                    </v-subheader>
                                </v-sheet>
                                <v-sheet color="secondary" dark rounded="" class="text-center pa-2">
                                    <span class="text-h5">Total stock: {{ pars(product.stocks_sum_stocksstocks) }}</span>
                                </v-sheet>
                            </div>
                            <v-sheet v-else color="red" dark rounded="" class="text-center pa-3">
                                <h2>Out of stock</h2>
                            </v-sheet>
                        </v-col>
                    </v-row>
                    <v-divider class="my-4"></v-divider>
                    <Feedback class="ma-2"></Feedback>
                </v-card-text>
            </v-card>
        </v-sheet>
    </div>
</template>
<script>
import Feedback from '@/components/admin/product/feedback.vue'
export default {
    components: {
        Feedback,
    },
    data: () => ({
        product: {
            images: [],
            stocks: []
        }
    }),
    created() {
        this.show()
    },
    methods: {
        show() {
            axios.get(`/admin-api/product/${this.$route.params.id}`).then(({ data }) => {
                this.product = data
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
}
</script>