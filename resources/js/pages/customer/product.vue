<template>
    <div>
        <v-row>
            <v-card style="width:100%;" elevation="0">
                <v-card-text>
                    <v-text-field
                        v-model="keyword"
                        placeholder="Search Item ..."
                        filled
                        clearable
                        append-icon="mdi-magnify"
                        color="primary"
                        dense
                        hide-details=""
                        @keydown.enter="getAllPropducts"
                    ></v-text-field>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row v-if="!isloading" class="product-list" wrap>
            <v-col v-for="product in products" :key="product.id" cols="12" sm="2">
                <v-card max-height="350">
                    <v-card-text>
                        <h1>₱{{ product.price}}</h1>
                        <v-img
                            lazy-src="/images/default/noimage.png"
                            height="150"
                            width="250"
                            contain
                           :src="product.images.length?'/images/products/' + product.id + '/' + product.images[0].file_name:'/images/default/noimage.png'"
                        ></v-img>
                        <h3 class="product-name">{{product.name}}</h3>
                        <small>{{getDescription(product.description)}}</small>
                        <div class="product-action">
                            <v-btn @click="addToCart(product)" width="100%" color="primary">
                                <v-icon
                                    left
                                >
                                    mdi-cart
                                </v-icon>
                                Add to cart
                            </v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return{
            products:[],
            isloading:true,
            keyword:'',
            ischeckout:false
        }
    },
    methods:{
        getAllPropducts(){
            this.isloading = true
            let params = ''
            if(this.keyword){
                params = 'keyword='+this.keyword
            }
            axios.get(`/customer-api/products?${params}`).then(({data})=>{
                this.products = data.data
                console.log(this.products)
            }).finally(()=>{
                this.isloading = false
            })
        },
        addToCart(item){
            let payload = {}
            payload.product_id = item.id
            axios.post(`/customer-api/store-cart`,payload).then(({data})=>{
                this.$store.dispatch("GET_CART_COUNT", data);
            }).finally(()=>{
                this.isloading = false
            })
        },
        getDescription (description) {
            // let body = this.stripTags(description.body);
            return description.length > 100 ? description.substring(0, 100) + '...' : description;
        },
        stripTags(text) {
            return text.replace(/(<([^>]+)>)/ig, '');
        }
    },
    mounted(){
        this.getAllPropducts()
    },
    computed:{
        ...mapGetters(["CART_COUNT"]),
    }
}
</script>
<style lang="scss" scoped>
    .product-list{
        height: 82vh;
        overflow: auto;

        .product-name{
            margin-top: 15px;
        }

        .product-action{
            display: flex;
            justify-content: flex-end;
        }
    }
</style>