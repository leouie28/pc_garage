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
              My Orders 
              <v-icon class="ml-2">mdi-format-list-checks</v-icon>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="grey lighten-5">
              <v-tabs grow v-model="tab" background-color="transparent">
                <v-tab
                v-for="tab in tabs"
                :key="tab">
                  <v-badge
                  color="blue-grey"
                  content="3">
                    <h5>{{ tab }}</h5>
                  </v-badge>
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab" class="grey lighten-5">
                <v-tab-item
                class="py-3"
                v-for="item in tabs"
                :key="item">
                  <v-card elevation="0" outlined>
                    <v-card-title class="py-2">
                      Order Code: #353563 
                    </v-card-title>
                    <v-card-text class="white pt-4">
                      <div class="d-flex justify-space-between">
                        <div class="mb-2 d-flex justify-center align-center">
                          <v-avatar height="60" width="80" tile>
                            <v-img
                            src="https://picsum.photos/id/11/500/300"
                            ></v-img>
                          </v-avatar>
                          <div class="ml-3">
                            <h3 class="cus-font text--primary">
                              Testing Title
                            </h3>
                              <!-- <span class="cus-font text-h6 text--primary">
                                  Testing Title
                              </span> -->
                            <div class="cus-font secondary--text">
                              Description item
                            </div>
                          <!-- <p class="text-h6 cus-font">Quantity: 8</p> -->
                          </div>
                        </div>
                        <div class="d-flex">
                          <!-- <span class="text-h6 cus-font">&#8369; 89</span> -->
                          <span class="mr-2">Qty: 3x</span>
                          <h3>&#8369; 89</h3>
                        </div>
                      </div>
                    <v-btn block outlined text>
                      +3 more products
                    </v-btn>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions class="py-2 ">
                      <div>Date Order 2022-07-28</div>
                      <v-spacer></v-spacer>
                      <span class="text-h6 mr-2">Total:</span>
                      <v-sheet rounded="" color="error">
                        <span class="white--text text-h6 px-2">
                          &#8369; 462
                        </span>
                      </v-sheet>
                    </v-card-actions>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card-text>
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
.cus-font{
  /* font-family: lato !important; */
  font-family: 'Inter', sans-serif !important;
}
</style>