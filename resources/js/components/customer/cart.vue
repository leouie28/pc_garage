<template>
    <div>
        <v-card color="blue-grey ">
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
                    color="grey lighten-3"
                    v-for="n in 5"
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
        </v-card>
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