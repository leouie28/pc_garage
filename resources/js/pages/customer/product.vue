<template>
    <div>
        <v-row>
            <v-col
            cols="12"
            class="mx-auto"
            md="10"
            >
                <v-card elevation="0">
                    <v-card-title>
                        <div>
                            <div class="d-flex product-header">
                                <v-text-field
                                class="mr-1"
                                clearable
                                placeholder="Search..."
                                append-icon="mdi-magnify"
                                hide-details=""
                                outlined
                                dense
                                ></v-text-field>
                                <v-select
                                class="cat"
                                prepend-inner-icon="mdi-filter"
                                placeholder="Category"
                                hide-details=""
                                outlined
                                dense
                                ></v-select>
                            </div>
                        </div>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <div v-if="loading" class="d-flex flex-wrap justify-center">
                            <v-skeleton-loader
                            class="mr-4 mb-4"
                            v-for="n in 12"
                            width="200"
                            :key="n"
                            type="image, article, list-item-two-line"
                            ></v-skeleton-loader>
                        </div>
                        <div v-else>
                            <div class="mb-3">
                                <v-subheader>
                                    <h2>Top Selling Product</h2>
                                </v-subheader>
                                <v-sheet
                                    class="mx-auto"
                                >
                                    <v-slide-group
                                    class="px-1"
                                    active-class="success"
                                    show-arrows
                                    >
                                    <v-slide-item
                                        v-for="n in 5"
                                        :key="n"
                                    >
                                        <v-card
                                        color="primary"
                                        class="ma-4"
                                        height="170"
                                        width="300">
                                        </v-card>
                                    </v-slide-item>
                                    </v-slide-group>
                                </v-sheet>
                            </div>
                            <div class="d-flex justify-center">
                                <v-subheader>
                                    <h2>Latest Product</h2>
                                </v-subheader>
                            </div>
                            <div class="d-flex flex-wrap justify-center">
                                <v-card
                                v-for="product in products"
                                :key="product.id"
                                class="mr-4 mb-4"
                                max-width="200"
                                @click="$router.push({path: 'product/'+product.id})"
                                >
                                    <v-img
                                    height="150"
                                    :src="product.images.length?'/images/products/' + product.id + '/' + product.images[0].file_name:'/images/default/noimage.png'"
                                    ></v-img>
                                    <!-- <v-card-title class="oneline py-0 pt-1">
                                        {{ product.name }}
                                    </v-card-title> -->
                                    <v-card-text class="px-2 pt-2 pb-0">
                                        <h4 class="oneline">
                                            {{ product.name }}
                                        </h4>
                                        <div class="text--primary price">
                                            &#8369; {{ product.price }}
                                        </div>
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
                                        <div class="item-desc text-caption">
                                            {{product.description }}
                                        </div>
                                    </v-card-text>
                                    <v-divider class="mx-2"></v-divider>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                        small
                                        color="primary"
                                        @click.stop="addCart(product)"
                                        >
                                            Cart
                                            <v-icon small>mdi-cart-outline</v-icon>
                                        </v-btn>
                                        <v-btn
                                        small
                                        v-if="product.stocks_sum_stocksstocks>0"
                                        color="success"
                                        @click.stop="checkout(product)"
                                        >
                                            Buy
                                            <v-icon small>mdi-currency-php</v-icon>
                                        </v-btn>
                                        <v-btn
                                        v-else
                                        small
                                        disabled
                                        @click.stop="false"
                                        color="success">
                                            Buy
                                            <v-icon small>mdi-currency-php</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <div class="text-cente mx-auto">
                            <v-pagination
                            v-model="page"
                            :length="1"
                            ></v-pagination>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
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
import CartCheckout from '@/components/customer/product/CartOrCheckout.vue'
export default {
    components: {
        CartCheckout,
    },
    data: () => ({
        isCheckout: true,
        page: 1,
        active: 0,
        item: {},
        warningDialog: false,
        loading: true,
        cartDialog: false,
        products: [],
        links: [
            {
                title: 'Products',
                icon: 'mdi-devices',
                path: 'products'
            },
            {
                title: 'Cart',
                icon: 'mdi-cart',
                path: 'products'
            },
            {
                title: 'Order',
                icon: 'mdi-format-list-checks',
                path: 'products'
            },
            // {
            //     title: 'Account',
            //     icon: 'mdi-account-circle-outline',
            //     path: 'products'
            // },
        ],
    }),
    mounted() {
        this.getProducts()
    },
    methods: {
        getProducts() {
            let params = 'per_page=15'
            axios.get(`/customer-api/products?${params}`).then(({ data }) => {
                this.products = data.data
            }).finally(()=>{
                setTimeout(() => {
                    this.loading = false
                }, 400)
            })
        },
        saveCart(data) {
            axios.post(`/customer-api/cart`, data).then(({ data }) => {
                this.newAlert(true, data.type, data.message)
                this.cartDialog = false
                this.$emit('event')
                this.item = {}
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
        }
    }
}
</script>

<style scoped>
.price{
    font-size: 17px !important;
}
.product-header{
    width: 600px;
}
.product-header .cat{
    width: 10px !important;
    min-width: unset !important;
}
.item-desc{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
            line-clamp: 1; 
    -webkit-box-orient: vertical;
}
.oneline{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
            line-clamp: 1; 
    -webkit-box-orient: vertical;
}
.cus-rate >>> .v-icon{
    padding: 0 !important;
}
</style>