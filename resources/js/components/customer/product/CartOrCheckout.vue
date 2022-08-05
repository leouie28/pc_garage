<template>
    <div>
        <v-card>
            <v-card-title>
                {{ isCheckout ? 'Checkout' : 'Add to Cart' }}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-row>
                    <v-col md="6" cols="12">
                        <v-img
                        alt="Feature Image"
                        :src="product.images.length?'/images/products/' + product.id + '/' + product.images[0].file_name:'/images/default/noimage.png'"
                        ></v-img>
                    </v-col>
                    <v-col md="6" cols="12">
                        <div class="text-h5 text--primary cus-font font-weight-bold">{{ product.name }}</div>
                        <div class="text-h5 primary--text">&#8369; {{ product.price }}</div>
                        <v-chip-group
                            column
                        >
                            <v-chip
                            v-for="category in product.categories"
                            :key="category.id"
                            :color="category.color"
                            small
                            >
                            {{ category.name }}
                            </v-chip>
                        </v-chip-group>
                        <v-divider></v-divider>
                        <p class="text-subtitle-1 cust-font">{{ product.description }}</p>
                        <v-row>
                            <v-col md="6" cols="12">
                                <v-text-field
                                outlined
                                dense
                                v-model="total"
                                type="number"
                                label="Total"
                                prepend-inner-icon="mdi-currency-php"
                                readonly
                                hide-details="">
                                </v-text-field>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-text-field
                                outlined
                                dense
                                v-model="qty"
                                type="number"
                                min="1"
                                label="Quantity"
                                hide-details="">
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="secondary" @click="$emit('cancel')">Cancel</v-btn>
                <v-btn color="error" v-if="isCheckout">Checkout</v-btn>
                <v-btn color="primary" @click="addCart" v-else>Add to Cart</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        isCheckout: '',
        qty: 1,
        total: '',
        data: {
            product_id: '',
            quantity: 1
        },
        product: {}
    }),
    props: {
        item: {},
        checkout: '',
    },
    mounted() {
        
    },
    methods: {
        addCart() {
            this.$emit('save', this.data)
        }
    },
    watch: {
        item:{
            handler(val){
                this.product = val
                this.data.product_id = val.id
                this.total = val.price
            },
            deep: true,
            immediate:true
        },
        checkout:{
            handler(val){
                this.isCheckout = val
            },
            deep: true,
            immediate:true
        },
        qty(val){
            this.data.quantity = parseInt(val)
            this.total = this.product.price * val
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
.cus-font{
  /* font-family: lato !important; */
  font-family: 'Inter', sans-serif !important;
}
</style>