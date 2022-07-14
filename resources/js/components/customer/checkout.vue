<template>
  <v-card>
    <v-card-text>
      <v-card v-for="cart in carts" :key="cart.id" width="100%">
        <v-card-text>
          <div class="product-list">
            <div class="image">
              <v-img
                lazy-src="/images/default/noimage.png"
                height="80"
                width="80"
                contain
                :src="cart.product.images.length? '/images/products/' + cart.product.id + '/' + cart.product.images[0].file_name : '/images/default/noimage.png'"
              ></v-img>
            </div>
            <div class="name">
              <p>{{ cart.product.name }}</p>
              <small>{{ cart.product.description }}</small>
            </div>
            <div>
              <p>₱{{ cart.product.price }}</p>
            </div>
            <div class="quantity">
              <div>
                <v-text-field
                  v-model="cart.quantity"
                  dense
                  outlined
                  type="number"
                  hide-details="auto"
                  @change="updateCart(cart)"
                >
                </v-text-field>
              </div>
            </div>
            <div class="action">
              <p>₱{{ cart.product.price * cart.quantity}}</p>
            </div>
            <div class="action">
              <v-btn @click="removeItem(cart)" icon color="error">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>
        </v-card-text>
      </v-card>
      <div class="total">
        <v-card>
          <v-card-text class="inner">
            <h3>TOTAL: ₱{{computeTotal}}</h3>

          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="checkout"
            >CheckOut</v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div v-if="!carts.length" class="no-item">
        <h1>No Item Found</h1>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      carts:[],
      payload:{},
    };
  },
  methods:{
    checkout(){
      axios.post(`/customer-api/cart-checkout`,this.payload).then(({data})=>{
        this.$router.push({name:'orders'})
      })
    },
    getCartItems(){
      axios.get(`/customer-api/getall-cart`).then(({data})=>{
        this.carts = data.data
        console.log(this.carts,"this.carts")
      })
    },
    updateCart(item){
      axios.put(`/customer-api/update-cart/${item.id}`,item).then(({data})=>{
        this.$store.dispatch("GET_CART_COUNT", data);
        this.getCartItems()
      })
    },
    removeItem(item){
      axios.delete(`/customer-api/remove-cart/${item.id}`).then(({data})=>{
        this.$store.dispatch("GET_CART_COUNT", data);
        this.getCartItems()
      })
    }
  },
  created(){
    this.getCartItems()
  },
  computed:{
    computeTotal(){
      let total = this.carts.map((cart)=>{
        return cart.quantity * cart.product.price
      })
      this.payload.total = total.reduce((partialSum, a) => partialSum + a, 0)
      return total.reduce((partialSum, a) => partialSum + a, 0)
    }
  },
  watch: {
    show: {
      handler(val) {
        if (val) {
        } else {
        }
      },
    },
  },
};
</script>
<style lang="scss" scoped>
  .no-item{
    display: grid;
    place-items: center;
    height: 85vh;
  }
  .product-list{
    display: flex;
    justify-content: space-between;

    div{
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .name{
      p{
        margin-bottom: 0 !important;
      }
    }

    .quantity{
      width: 100px !important;
    }
    .action{

    }
  }
  .total{
    .inner{
      display: flex;
      justify-content: flex-end;
    }
  }
</style>