<template>
    <div>
        <v-card elevation="0">
            <v-card-title>
                My Cart
                <v-icon class="ml-2">mdi-cart</v-icon>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="py-0 px-8">
                <div class="my-2">
                    <v-checkbox
                    hide-details=""
                    label="Select all"
                    ></v-checkbox>
                </div>
                <v-divider></v-divider>
                <div class="d-flex justify-space-between align-center mt-4"
                v-for="n in 3" :key="n" style="border-bottom: 1px dotted #ccc;">
                    <div class="d-flex align-center">
                        <v-checkbox
                        ></v-checkbox>
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
                                Cart at 2022-07-29
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
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn elevation="0" color="secondary" @click=" $emit('cancel')">
                    Remove
                </v-btn>
                <v-btn elevation="0" color="error">
                    Checkout &#8369; 87
                </v-btn>
            </v-card-actions>
            </v-card>
        <!-- <v-card color="blue-grey ">
            <v-card-title class="white--text">
                My Cart
                <v-icon class="ml-2 white--text">mdi-cart</v-icon>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="white">
                <div>
                    <v-checkbox
                    dense
                    label="Select all"
                    ></v-checkbox>
                </div>
                <v-divider></v-divider>
                <div>
                    <v-list
                    v-for="n in 3"
                    :key="n"
                    subheader
                    two-line>
                        <v-list-item>
                            <v-checkbox
                            ></v-checkbox>
                            <v-list-item-avatar tile height="60" width="80" class="mr-3 ml-4">
                                <v-img
                                src="https://picsum.photos/id/11/500/300"
                                ></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>
                                    Hello world
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    <p style="font-size:18px;" class="text--primary">&#8369; 34</p>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-list-item-action-text>
                                    Qty
                                    <input
                                    class="qty"
                                    type="number"
                                    value="1"
                                    min="1"
                                    >
                                </v-list-item-action-text>
                            </v-list-item-action>
                        </v-list-item>
                        <v-divider></v-divider>
                    </v-list>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn large color="secondary" @click=" $emit('cancel') ">
                    Cancel
                </v-btn>
                <v-btn large color="error">
                    Checkout &#8369; 34
                </v-btn>
            </v-card-actions>
        </v-card> -->
    </div>
</template>
<script>
  export default {
    data () {
      return {
        
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