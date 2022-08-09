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
                            width="300"
                            :key="n"
                            type="image, article, list-item-two-line"
                            ></v-skeleton-loader>
                        </div>
                        <div v-else class="d-flex flex-wrap justify-center">
                            <v-card
                            v-for="product in products"
                            :key="product.id"
                            class="mr-4 mb-4"
                            max-width="300"
                            >
                                <v-img
                                height="250"
                                :src="product.images.length?'/images/products/' + product.id + '/' + product.images[0].file_name:'/images/default/noimage.png'"
                                ></v-img>
                                <v-card-title class="oneline pb-3">
                                    {{ product.name }}
                                </v-card-title>
                                <v-card-text>
                                    <div class="text-h6 text--primary">
                                        &#8369; {{ product.price }}
                                    </div>
                                    <div class="item-desc">
                                        {{product.description }}
                                    </div>
                                </v-card-text>
                                <v-divider class="mx-2"></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                    color="primary"
                                    @click="addCart(product)"
                                    >
                                        Cart
                                        <v-icon small>mdi-cart-outline</v-icon>
                                    </v-btn>
                                    <v-btn
                                    color="success"
                                    @click="checkout(product)"
                                    >
                                        Buy
                                        <v-icon small>mdi-currency-php</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
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
                }, 1000)
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
        }
    }
}
</script>

<style scoped>
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
    -webkit-line-clamp: 2; /* number of lines to show */
            line-clamp: 2; 
    -webkit-box-orient: vertical;
}
.oneline{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 2.5rem;
    -webkit-line-clamp: 1; /* number of lines to show */
            line-clamp: 1; 
    -webkit-box-orient: vertical;
}
</style>