<template>
  <div>
    <v-row>
      <v-col
      cols="12"
      class="mx-auto"
      md="10"
      >
        <v-card elevation="0" max-width="700" class="mx-auto">
            <v-card-title>
              Checkout 
              <v-icon class="ml-2">mdi-check-underline-circle</v-icon>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="py-4">
              <v-subheader>
                <h3>Products</h3>
              </v-subheader>
              <v-divider class=""></v-divider>
              <div class="d-flex justify-space-between pt-2 align-center my-0 "
                v-for="product in items" :key="product.id" style="border-bottom: 1px dotted #ccc;">
                    <div class="d-flex align-center">
                        <v-btn large icon color="red" @click="remove(product.id+'~'+product.quantity)" elevation="0">
                          <v-icon large>mdi-delete-circle</v-icon>
                        </v-btn>
                        <div class="mb-2 d-flex justify-center align-center">
                            <v-avatar height="60" width="80" tile class="prod-img">
                              <v-img
                              :src="product.images.length?'/images/products/' + product.id + '/' + product.images[0].file_name:'/images/default/noimage.png'"
                              ></v-img>
                            </v-avatar>
                            <div class="ml-3">
                              <h3 class="cus-font text--primary oneline cart-width">
                                  {{ product.name }}
                              </h3>
                              <div class="cus-font secondary--text twoline cart-width">
                                  {{ product.description }}
                              </div>
                              <div class="d-flex">
                                <h3 class="mr-2 cus-font secondary--text">
                                    &#8369; {{ product.price }}
                                </h3>
                                <v-chip
                                label outlined :color="product.stocks_sum_stocksstocks>=product.quantity ? 'secondary' : 'error' " small class="py-0">
                                    {{ product.stocks_sum_stocksstocks>0 ? 'Stocks: '+product.stocks_sum_stocksstocks : 'Out of Stocks' }}
                                </v-chip>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        Qty
                        <input
                        class="qty"
                        type="number"
                        v-model="product.quantity"
                        @change="computeTotal"
                        :max="product.stocks_sum_stocksstocks"
                        min="1">
                    </div>
                </div>
                <div v-if="!addNote" class="mt-2 mx-4">
                  <v-btn
                  @click="addNote = true"
                  outlined
                  block
                  color="secondary">
                    Add Note
                    <v-icon class="ml-2">mdi-message-processing-outline</v-icon>
                  </v-btn>
                </div>
                <v-textarea
                v-else
                clearable
                class="mt-2 mx-4"
                height="100"
                outlined
                v-model="payload.note"
                dense
                label="Note (optional)"
                hide-details=""
                placeholder="Add note about the order ..."
                ></v-textarea>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="white">
              <v-spacer></v-spacer>
              <div class="text-right">
                <div class="mb-2">
                  <span class="text-h6 cus-font">Order Total: &#8369; {{ payload.total }}</span>
                  <div class="text-caption">+ shipping fee(depend on your location)</div>
                </div>
                <div>
                  <v-btn elevation="0" color="secondary" @click="$router.go(-1)">
                      Cancel
                  </v-btn>
                  <v-btn elevation="0" color="success" @click="confirm = true">
                      Place Order
                  </v-btn>
                </div>
              </div>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
    v-model="confirm"
    persistent
    max-width="400">
      <v-card color="">
        <v-card-title>Warning</v-card-title>
        <v-card-text class="py-4">
          <div class="text-center">
            <v-toolbar-title>
              Please confirm your order!
            </v-toolbar-title>
            <!-- <v-alert
            outlined
            color="warning"
            text
          >
            <v-icon class="mr-1" color="warning">mdi-alert-circle-outline</v-icon>
            <span class="">Please confirm your order!</span>
          </v-alert> -->
            <!-- <v-icon class="mr-1">mdi-alert-circle-outline</v-icon>
            <span class="text-h6">Please confirm your order!</span> -->
          </div>
        </v-card-text>
        <v-card-actions class="white">
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="confirm = false">
            Cancel
          </v-btn>
          <v-btn color="success" @click="placeOrder">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
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
export default {
  data () {
    return {
      items: [],
      addNote: false,
      confirm: false,
      linkParams: '',
      tab: 0,
      payload: {
        products: [],
        total: 0,
        note: '',
        status: 1,
      },
      tabs: [
        'pending',
        'delivery',
        'received'
      ]
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData(){
      this.linkParams = this.$route.query.items
      axios.get(`/customer-api/checkout?items=${this.linkParams}`).then(({ data }) => {
        this.items = data
        this.computeTotal()
      });
    },
    placeOrder() {
      axios.post(`/customer-api/orders`, this.payload).then(({ data }) => {
        this.confirm = false
        if(data.type=='success'){
          window.location.replace('orders?success=1')
        }
        this.newAlert(true, data.type, data.message)
      });
    },
    remove(val){
      let newParams = ''
      let params = this.$route.query.items.split(",")
      params.forEach(elem => {
        if(elem!=val){
          newParams += elem+','
        }
      });
      this.linkParams = newParams.slice(0, -1);
      let link = JSON.parse(JSON.stringify(this.$route.query));
      link.items = newParams
      console.log(newParams)
      this.$router.replace({ query: link });
      setTimeout(() => {
        this.getData()
      }, 200)
    },
    computeTotal() {
      let compute = 0
      let newItem = []
      this.payload.products = []
      this.items.forEach(elem => {
        this.payload.products.push({id: elem.id, quantity: elem.quantity})
        compute += elem.price * elem.quantity
      });
      this.payload.total = compute
    }
  },
  computed: {
    // getParams() {
    //   let params = this.$route.query
    //   return params
    // }
  },
  watch: {
    linkParams(val){
      this.computeTotal()
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

.oneline, .twoline{
    max-width: 290px !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
/* .oneline{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.twoline{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; 
            line-clamp: 1; 
    -webkit-box-orient: vertical;
} */
@media screen and (max-width: 600px){
    .cart-width{
        max-width: 150px !important;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .prod-img{
      max-width: 60px !important;
    }
}
</style>