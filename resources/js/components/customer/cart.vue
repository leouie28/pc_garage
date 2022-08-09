<template>
    <div>
        <v-card elevation="0">
            <v-card-title>
                My Cart
                <v-icon class="ml-2">mdi-cart</v-icon>
                <v-spacer></v-spacer>
                <v-btn
                large
                @click=" $emit('cancel')"
                icon>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="py-0">
                <!-- <div class="my-2">
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
                </div> -->
                <v-data-table
                v-if="carts.length"
                v-model="selected"
                :headers="headers"
                :items="available"
                :single-select="false"
                item-key="id"
                :items-per-page="-1"
                hide-default-footer
                @toggle-select-all="selectAllToggle"
                show-select>
                    <template v-slot:[`header.id`]>
                        <h3 @click="checkAll">Select All</h3>
                    </template>
                    <template v-slot:[`item.data-table-select`]="{ item }">
                        <v-checkbox
                        :disabled="item.product.stocks_sum_stocksstocks<item.quantity"
                        v-model="selected"
                        :value="item"
                        :ripple="false"
                        hide-details=""
                        ></v-checkbox>
                    </template>
                    <template v-slot:[`item.id`]="{ item }">
                        <div
                        :class="item.product.stocks_sum_stocksstocks==null || item.product.stocks_sum_stocksstocks==0 ? 'd-flex justify-space-between align-center mt-4 cus-hover cus-disable' : 'd-flex justify-space-between align-center mt-4 cus-hover' ">
                            <div class="mb-2 d-flex justify-center ml-3 align-center ml-n8">
                                <v-avatar height="60" width="80" tile>
                                    <v-img
                                    :src="item.product.images.length?'/images/products/' + item.product.id + '/' + item.product.images[0].file_name:'/images/default/noimage.png'"
                                    ></v-img>
                                </v-avatar>
                                <div class="ml-3">
                                    <h3 class="cus-font secondary--text">
                                        &#8369; {{ item.product.price }}
                                    </h3>
                                    <h3 class="cus-font text--primary oneline cart-width">
                                        {{ item.product.name }}
                                    </h3>
                                    <v-chip
                                    v-if="item.product.stocks_sum_stocksstocks==null || item.product.stocks_sum_stocksstocks==0" 
                                    label outlined color="red" small class="py-0">
                                        Out of Stocks
                                    </v-chip>
                                    <v-chip
                                    v-else
                                    label outlined color="secondary" small class="py-0">
                                        Stocks: {{ item.product.stocks_sum_stocksstocks }}
                                    </v-chip>
                                </div>
                            </div>
                            <div :class="item.product.stocks_sum_stocksstocks>=item.quantity ? 'ml-2' : 'ml-2 red--text'">
                                Qty
                                <input
                                :class="item.product.stocks_sum_stocksstocks>=item.quantity ? 'qty' : 'qty red-qty'"
                                type="number"
                                v-model="item.quantity"
                                @change="computeTotal"
                                min="1"
                                :max="item.product.stocks_sum_stocksstocks"
                                >
                            </div>
                        </div>
                    </template>
                </v-data-table>
                <empty v-else></empty>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn elevation="0" @click="removeCart" :disabled="selected.length>=1 ? false : true" color="secondary">
                    Remove
                </v-btn>
                <v-btn :disabled="total>0 ? false : true" elevation="0" color="error" link :href="'../checkout?items='+checkOut">
                    Checkout &#8369; {{ total }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
import Empty from '@/components/global/empty.vue'
import empty from '../global/empty.vue'
  export default {
  components: { empty },
    comments: {
        Empty,
    },
    data () {
      return {
        item: [],
        quantities: [],
        refreshKey: false,
        selected: [],
        all: false,
        checkOut: '',
        total: '0',
        carts: [],
        headers: [
            { text: 'Select all', sortable: false, value: 'id' },
        ]
      }
    },
    props: {
        event: {}
    },
    created() {
        this.getCart()
    },
    methods: {
        getCart() {
            axios.get(`/customer-api/cart`).then(({ data }) => {
                this.carts = data
            });
        },
        removeCart() {
            let value = {
                ids: []
            }
            this.selected.forEach(elem => {
                value.ids.push(elem.id)
            });
            axios.post(`/customer-api/cart/remove-cart`, value).then(({ data }) => {
                this.carts = data
            });
        },
        checkAll(){
            let link = document.getElementsByClassName('v-input--selection-controls__ripple');
            link[0].click();
        },
        computeTotal() {
            let params = ''
            let compute = 0
            this.selected.forEach(elem => {
                compute += elem.product.price * elem.quantity
                params += elem.product.id+'~'+elem.quantity+','
            });
            params = params.slice(0, -1); 
            this.checkOut = params
            this.total = compute
            // // this.refreshKey = !this.refreshKey
        },
        selectAllToggle(props) {
            // console.log(this.selected.length+' '+this.available.length)
            if(this.selected.length != this.available.length-1) {
                this.selected = [];
                const self = this;
                props.items.forEach(item => {
                if(item.product.stocks_sum_stocksstocks>=item.quantity) {
                    self.selected.push(item);
                } 
                });
            } else this.selected = [];
        }
        // filter() {
        //     this.available = this.available.map(x => ({ ...x, isSelectable: x.product.stocks_sum_stocksstocks >= x.quantity }))
        //     // console.log(this.available, 'asfsfs')
        // }
        // checkItem(id){
        //     let link = document.getElementById('item-'+id);
        //     link.click()
        //     console.log(this.item[id])
        // }
    },
    computed: {
        available() {
            return this.carts.map(x => ({ ...x, isSelectable: x.product.stocks_sum_stocksstocks >= x.quantity }))
        }
    },
    watch: {
        selected(val){
            this.computeTotal()
        },
        event(val){
            if(val==true){
                this.carts = []
                this.selected = []
                this.getCart()
            }
        }
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
/* .oneline{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; 
            line-clamp: 1; 
    -webkit-box-orient: vertical;
} */
.cus-hover:hover{
    background: rgb(240, 240, 240) !important;
    cursor: pointer;
}
.cus-disable{
    opacity: .5;
    pointer-events: none;
}
.cart-width{
    max-width: 290px !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.red-qty{
    color: rgb(255, 51, 0);
    border: 2px solid rgb(255, 51, 0) !important;
}
</style>