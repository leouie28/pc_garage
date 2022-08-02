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
              My Orders
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-tabs grow v-model="tab">
                <v-tab
                v-for="tab in tabs"
                :key="tab">
                  <h5>{{ tab }}</h5>
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab">
                <v-tab-item
                class="py-3"
                v-for="item in tabs"
                :key="item">
                  <v-card color="blue-grey" elevation="0" outlined>
                    <v-card-title class="py-2 white--text">
                      Order Code: #353563
                      <v-spacer></v-spacer>
                      Order at: 2022-07-29
                    </v-card-title>
                    <v-card-text class="white pt-4">
                      <div v-for="n in 3" :key="n">
                        <div class="mb-2 d-flex justify-end align-center">
                          <div class="mr-3 text-right">
                              <span class="text-h6 text--primary">
                                  Testing Title
                              </span>
                              <div class="text-h6">&#8369; 35</div>
                          </div>
                          <v-avatar height="60" width="80" tile>
                            <v-img
                            src="https://picsum.photos/id/11/500/300"
                            ></v-img>
                          </v-avatar>
                        </div>
                        <v-divider></v-divider>
                      </div>
                    </v-card-text>
                    <v-card-actions class="py-1">
                      <v-spacer></v-spacer>
                      <span class="white--text text-h6 mr-2">Total:</span>
                      <v-sheet tile color="success">
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