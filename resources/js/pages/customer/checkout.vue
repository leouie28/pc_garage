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
              <v-divider class="mb-4"></v-divider>
              <div class="d-flex justify-space-between align-center py-4 my-0 px-8"
                v-for="n in 3" :key="n" style="border-bottom: 1px dotted #ccc;">
                    <div class="d-flex align-center">
                        <v-btn large icon color="red" elevation="0">
                          <v-icon large>mdi-delete-circle</v-icon>
                        </v-btn>
                        <div class="mb-2 d-flex justify-center ml-3 align-center">
                            <v-avatar height="60" width="80" tile>
                            <v-img
                            src="https://picsum.photos/id/11/500/300"
                            ></v-img>
                            </v-avatar>
                            <div class="ml-3">
                            <h3 class="cus-font secondary--text">
                                &#8369; 34
                            </h3>
                            <h3 class="cus-font text--primary">
                                Testing Title
                            </h3>
                            <div class="cus-font secondary--text">
                                Description
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        Qty
                        <input
                        class="qty"
                        type="number"
                        value="1"
                        min="1"
                        >
                    </div>
                </div>  
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="white">
              <v-spacer></v-spacer>
              <div class="text-right">
                <div class="mb-2">
                  <span class="text-h6 cus-font">Order Total: &#8369; 7878</span>
                  <div class="text-caption">+ shipping fee(depend on your location)</div>
                </div>
                <div>
                  <v-btn elevation="0" color="secondary" @click=" $emit('cancel')">
                      Cancel
                  </v-btn>
                  <v-btn elevation="0" color="success" link href="checkout">
                      Place Order
                  </v-btn>
                </div>
              </div>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tab: 0,
      tabs: [
        'pending',
        'delivery',
        'received'
      ]
    }
  },
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
</style>