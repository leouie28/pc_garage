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
                        <Head @filter="filter"></Head>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <div v-if="loading">
                            <div v-if="page==1&&catFilter==''">
                                <v-subheader>
                                    <h2>Top Selling Product</h2>
                                </v-subheader>
                                <div class="d-flex best-loader">
                                    <v-skeleton-loader
                                    class="ma-4"
                                    elevation="0"
                                    width="500"
                                    v-for="n in 3"
                                    :key="n"
                                    height="250"
                                    type="image, list-item-two-line"
                                    ></v-skeleton-loader>
                                </div>
                            </div>
                            <div class="d-flex justify-center mt-3">
                                <v-subheader>
                                    <h2>Latest Product</h2>
                                </v-subheader>
                            </div>
                            <div class="d-flex flex-wrap justify-center prod-loader">
                            <!-- <div class="d-fle mx-auto"> -->
                                <v-skeleton-loader
                                class="ma-2 d-inline-block grid-item"
                                v-for="n in 15"
                                elevation="4"
                                width="200"
                                :key="n"
                                type="image, article"
                                ></v-skeleton-loader>
                            </div>
                        </div>
                        <div v-else>
                            <div class="mb-3" v-if="page==1&&catFilter==''">
                                <v-subheader>
                                    <h2>Top Selling Product</h2>
                                </v-subheader>
                                <v-sheet
                                    class="mx-auto"
                                    v-if="best.length>0"
                                >
                                    <v-slide-group
                                    class="px-1 best-group-slider"
                                    active-class="success"
                                    show-arrows
                                    >
                                    <v-slide-item
                                        v-for="prod in best"
                                        :key="prod.id"
                                    >
                                        <v-card
                                        color="primary"
                                        @click="$router.push({path: 'web-product/'+prod.id})"
                                        class="ma-4 best-slider"
                                        height="250"
                                        width="500">
                                            <div class="best-overlay white--text">
                                                <v-chip label color="blue-grey lighten-5">
                                                    Sold: {{prod.sold_count}} 
                                                    <v-icon>mdi-trophy-award</v-icon>
                                                </v-chip>
                                                <!-- <h3 class="">Sold: 3 
                                                    <v-icon>mdi-trophy-award</v-icon>
                                                </h3> -->
                                            </div>
                                            <v-img
                                            class="ft-img"
                                            height="250"
                                            width="500"
                                            :src="'/images/system/best-filter.png'"
                                            ></v-img>
                                            <v-img
                                            height="250"
                                            width="500"
                                            position="center center"
                                            :alt="prod.name"
                                            :src="prod.images.length?'/images/products/' + prod.id + '/' + prod.images[0].file_name:'/images/default/noimage.png'"
                                            ></v-img>
                                        </v-card>
                                    </v-slide-item>
                                    </v-slide-group>
                                </v-sheet>
                                <empty v-else class="mx-10"></empty>
                            </div>
                            <div class="d-flex justify-center">
                                <v-subheader v-if="page<=1">
                                    <h2>Latest Product</h2>
                                </v-subheader>
                                <v-subheader v-else>
                                    <h2>Page {{ page }}</h2>
                                </v-subheader>
                            </div>
                            <div class="">
                                <!-- <div class="d-flex flex-wrap justify-start prod mx-auto"> -->
                                <div class="grid-container">
                                    <v-card
                                    color="grey lighten-3"
                                    v-for="product in products"
                                    :key="product.id"
                                    @click="$router.push({path: 'web-product/'+product.id})"
                                    class="ma-2 d-inline-block grid-item prod"
                                    max-width="200"
                                    >
                                        <v-img
                                        height="150"
                                        :src="product.images.length?'/images/products/' + product.id + '/' + product.images[0].file_name:'/images/default/noimage.png'"
                                        ></v-img>
                                        <!-- <v-card-title class="oneline py-0 pt-1">
                                            {{ product.name }}
                                        </v-card-title> -->
                                        <v-card-text class="px-2 pt-2 pb-0 white">
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
                                                half-increments
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
                                        <v-card-actions class="white">
                                            <v-spacer></v-spacer>
                                            <v-btn
                                            small
                                            color="primary"
                                            @click.stop="$emit('warning')"
                                            >
                                                Cart
                                                <v-icon small>mdi-cart-outline</v-icon>
                                            </v-btn>
                                            <v-btn
                                            small
                                            v-if="product.stocks_sum_stocksstocks>0"
                                            color="success"
                                            @click.stop="$emit('warning')"
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
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <div class="text-cente mx-auto">
                            <v-pagination
                            v-model="page"
                            :length="data.length"
                            @input="changePage"
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
import Head from './product-header.vue'
import CartCheckout from '@/components/customer/product/CartOrCheckout.vue'
export default {
    components: {
        Head,
        CartCheckout,
    },
    data: () => ({
        catFilter: '',
        isCheckout: true,
        page: 1,
        active: 0,
        item: {},
        warningDialog: false,
        loading: true,
        cartDialog: false,
        data: {},
        best: [],
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
        getProducts(params) {
            if(this.page<=1||!this.page)this.getBestSell()
            if(params) params = '&'+params
            else params = ''
            axios.get(`/web/web-products?per_page=15${params}`).then(({ data }) => {
                this.products = data.data
                this.data.length = data.last_page
            }).finally(()=>{
                setTimeout(() => {
                    this.loading = false
                }, 400)
            })
        },
        filter(val) {
            this.loading = true
            if(val>0){
                this.page = 1
                let params = 'page='+this.page+'&filter=categories~'+val
                this.catFilter = val
                this.getProducts(params)
            }else{
                let params = 'page=1'
                this.catFilter = ""
                this.getProducts(params)
                setTimeout(() => {
                    this.page = 1
                }, 1000)
            }
            console.log(this.catFilter)
        },
        getBestSell(){
            axios.get(`/web/web-best-selling`).then(({ data }) => {
                this.best = data
            });
        },
        changePage() {
            this.loading = true
            let params = ''
            if(this.catFilter!="") params = 'page='+this.page+'&filter=categories~'+this.catFilter
            else params = 'page='+this.page
            this.getProducts(params)
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
.price{
    font-size: 17px !important;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* see notes below */
  /* grid-gap: 2px; */
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
.best-overlay{
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
}
.ft-img{
    opacity: 0.8 !important;
    position: absolute !important;
    z-index: 50;
    bottom: 0;
}
.best-overlay{
    position: absolute !important;
    z-index: 100;
    padding: 10px;
    bottom: 0 !important;
    right: 0 !important;
}
.best-overlay >>> .v-chip{
    margin: 10px !important;
    position: absolute !important;
    bottom: 0 !important;
    right: 0 !important;
    z-index: 200 !important;
}
</style>