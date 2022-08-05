<template>
    <div>
        <v-card elevation="0">
            <v-card-title>
                My Cart
                <v-icon class="ml-2">mdi-cart</v-icon>
                <v-spacer></v-spacer>
                <v-btn
                large
                icon>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="py-0 px-8">
                <div class="my-2">
                    <v-checkbox
                    v-model="all"
                    hide-details=""
                    @change="checkAll"
                    label="Select all"
                    ></v-checkbox>
                </div>
                <v-divider></v-divider>
                <div
                v-for="cart in carts" :key="cart.id" style="border-bottom: 1px dotted #ccc;"
                :class="cart.product.stocks_sum_stocksstocks==null || cart.product.stocks_sum_stocksstocks==0 ? 'd-flex justify-space-between align-center mt-4 cus-hover cus-disable' : 'd-flex justify-space-between align-center mt-4 cus-hover' ">
                    <div class="d-flex align-center">
                        <v-checkbox
                        :id="'item-'+cart.id"
                        v-model="item[cart.id]"
                        ></v-checkbox>
                        <div class="mb-2 d-flex justify-center ml-3 align-center">
                            <v-avatar height="60" width="80" tile>
                            <v-img
                            :src="cart.product.images.length?'/images/products/' + cart.product.id + '/' + cart.product.images[0].file_name:'/images/default/noimage.png'"
                            ></v-img>
                            </v-avatar>
                            <div class="ml-3">
                            <h3 class="cus-font secondary--text">
                                &#8369; {{ cart.product.price }}
                            </h3>
                            <h3 class="cus-font text--primary oneline">
                                {{ cart.product.name }}
                            </h3>
                            <v-chip
                            v-if="cart.product.stocks_sum_stocksstocks==null || cart.product.stocks_sum_stocksstocks==0" 
                            label outlined color="red" small class="py-0">
                                Out of Stocks
                            </v-chip>
                            <v-chip
                            v-else
                            label outlined color="secondary" small class="py-0">
                                Stocks: {{ cart.product.stocks_sum_stocksstocks }}
                            </v-chip>
                            </div>
                        </div>
                    </div>
                    <div>
                        Qty
                        <input
                        class="qty"
                        type="number"
                        :value="cart.quantity"
                        min="1"
                        >
                    </div>
                </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn elevation="0" color="secondary" @click=" $emit('cancel')">
                    Remove
                </v-btn>
                <v-btn elevation="0" color="error" link href="checkout">
                    Checkout &#8369; {{ total }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        item: [],
        quantities: [],
        selectedItems: [],
        all: false,
        total: '0',
        carts: [],
        headers: [
            { text: 'Select all', sortable: false, value: 'id' },
        ]
      }
    },
    mounted() {
        this.getCart()
    },
    methods: {
        getCart() {
            axios.get(`/customer-api/cart`).then(({ data }) => {
                this.carts = data
            });
        },
        checkAll(){
            if(this.all==true){
                this.carts.forEach(elem => {
                    if(elem.product.stocks_sum_stocksstocks>0){
                        document.getElementById('item-'+elem.id).click()
                    }
                });
            }else{
                this.carts.forEach(elem => {
                    if(elem.product.stocks_sum_stocksstocks>0){
                        document.getElementById('item-'+elem.id).click()
                    }
                });
            }
        }
        // checkItem(id){
        //     let link = document.getElementById('item-'+id);
        //     link.click()
        //     console.log(this.item[id])
        // }
    },
    watch: {

    }
  }
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);
/* body,html {
  height:100%;
  margin:0;
  font-family:lato !important;
} */
        /* .v-list-item__title{
            font-family: lato !important;
        } */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
.cus-font{
  /* font-family: lato !important; */
  font-family: 'Inter', sans-serif !important;
}

.v-data-table__checkbox{
    width: 20px !important;
}
.qty{
    width: 60px;
    padding: 3px 2px;
    padding-left: 6px;
    border-radius: 5px;
    border: 2px solid rgb(117, 117, 117);
    box-sizing: border-box;
    font-size: 16px;
}
.oneline{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
            line-clamp: 1; 
    -webkit-box-orient: vertical;
}
.cus-hover:hover{
    background: rgb(240, 240, 240) !important;
    cursor: pointer;
}
.cus-disable{
    opacity: .5;
    pointer-events: none;
}
.v-data-table-header tr th{
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-left: 0 !important;
}
</style>