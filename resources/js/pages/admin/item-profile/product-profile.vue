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
                            min-height="380"
                            style="border: 1px solid #ccc;"
                            alt="image"
                            :src="product.images.length?'/images/products/' + product.id + '/' + product.images[0].file_name:'/images/default/noimage.png'">
                            </v-img>
                            <!-- <h3 class="text-uppercase">Actions</h3> -->
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
                            <div class="d-flex justify-space-between">
                                <div>
                                    <v-chip color="success">
                                        <h3>Cost Price: &#8369; {{product.cost_price}}</h3>
                                    </v-chip>
                                    <v-chip color="primary">
                                        <h3>Selling Price: &#8369; {{ product.price }}</h3>
                                    </v-chip>
                                </div>
                                <v-btn outlined color="warning" @click="reoder_modal = true">
                                    Stock Alert
                                    <v-icon>mdi-bell</v-icon>
                                </v-btn>
                            </div>
                            <h3 class="text-uppercase mt-4 mb-2">Category</h3>
                            <v-chip
                            v-for="category in product.categories"
                            :key="category.id"
                            class="mr-2"
                            :color="category.color">
                                {{category.name}}
                            </v-chip>
                            <!-- <v-divider class="mt-4 mb-4"></v-divider>
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
                            </v-sheet> -->
                        </v-col>
                    </v-row>
                    <h3 class="text-uppercase mb-4">Description</h3>
                    <v-sheet color="grey lighten-3" rounded="" class="pa-3">
                        <p class="text-subtitle-1 font-2" style="font-size:18px;">
                            {{ product.description }}
                        </p>
                    </v-sheet>
                    <v-divider class="my-4"></v-divider>
                    <v-sheet
                    rounded=""
                    outlined
                    class="mb-2 pb-2">
                        <v-subheader><h3>Status</h3></v-subheader>
                        <div class="ml-6 font-2 fs-17">
                            <div class="my-0 py-0">Canceled: <span class="red--text">{{ pars(product.canceled_sum_order_productquantity) }}</span></div>
                            <div class="my-0 py-0">Pending: <span class="secondary--text">{{ pars(product.pending_sum_order_productquantity) }}</span></div>
                            <div class="my-0 py-0">To Deliver: <span class="blue--text">{{ pars(product.to_deliver_sum_order_productquantity) }}</span></div>
                            <div class="my-0 py-0">Sold: <span class="green--text">{{ pars(product.sold_sum_order_productquantity) }}</span></div>
                        </div>
                        <v-subheader><h3>Stock Keeping Unit</h3></v-subheader>
                        <div class="ml-6 fs-17">
                            <div v-if="product.stocks.length>0">
                                <div
                                class="my-0 py-0 font-2"
                                v-for="sku in product.stocks"
                                :key="sku.sku">
                                    <span class="grey--text lighten-1">sku#</span> {{ sku.sku }} -- <span class="blue--text">{{ sku.stocks }}</span>
                                </div>
                                <div class="py-2">
                                    <v-chip outlined label color="secondary">
                                        <h3>Total stock: {{ pars(product.stocks_sum_stocksstocks) }}</h3>
                                    </v-chip>
                                </div>
                            </div>
                            <div v-else class="mb-2 font-2">
                                <h3 class="error--text">Out of stacks</h3>
                            </div>
                        </div>
                        <!-- <v-subheader class="d-flex justify-space-between">
                            <h4>SKU: <span class="blue--text">{{ sku.sku }}</span></h4>
                            <h4>Current Stocks: <span class="blue--text">{{ sku.stocks }}</span></h4>
                        </v-subheader> -->
                    </v-sheet>
                    <v-divider class="my-4"></v-divider>
                    <Feedback class="ma-2"></Feedback>
                </v-card-text>
            </v-card>
        </v-sheet>
        <v-dialog max-width="500" v-model="reoder_modal">
            <v-card>
                <v-card-title>Stock Alert</v-card-title>
                <v-card-text>
                    <v-alert text color="warning">
                        <div>Send notification when stock reach to reoder point.</div>
                        <div>(Set 0 if you want to turn off stock alert)</div>
                    </v-alert>
                    <v-text-field
                    label="Reoder point"
                    outlined
                    min="1"
                    v-model="product.reoder_point"
                    hide-details="auto"
                    type="number"
                    ></v-text-field>
                    <div class="d-flex justify-end">current stock: {{product.stocks.length>0 ? product.stocks_sum_stocksstocks : '0'}}</div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="reoder_modal = false">Close</v-btn>
                    <v-btn color="primary" @click="save_reoder">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
            stocks: [],
            reoder_point: 0,
        },
        reoder_modal: false,
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
        save_reoder() {
            this.reoder_modal = false
            let params = {
                id: this.$route.params.id,
                val: this.product.reoder_point
            }
            axios.post(`/admin-api/product/reoder-update`, params).then(({ data }) => {
                if(data) {
                    alert('Stock alert successfully set!')
                }
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