<template>
    <div>
        <v-card>
            <!-- <v-card-title>
                Feedback
            </v-card-title> -->
            <v-card-text>
                <div>
                    <div class="mb-2 d-flex justify-start align-center">
                        <v-avatar height="60" width="80" tile>
                            <v-img
                            :src="item.images.length?'/images/products/' + item.id + '/' + item.images[0].file_name:'/images/default/noimage.png'"
                            ></v-img>
                        </v-avatar>
                        <div class="ml-3">
                            <h3 class="cus-font secondary--text">
                                &#8369; {{ item.price }}
                            </h3>
                            <h3 class="cus-font text--primary oneline cart-width">
                                {{ item.name }}
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="text-center my-2">
                    <v-rating
                    :value="0"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="mdi-star-outline"
                    hover
                    large
                    ></v-rating>
                    <span class="text-subtitle-2">Rate this product..</span>
                </div>
                <v-divider></v-divider>
                <div class="mt-3">
                    <v-textarea
                    label="Feedback"
                    placeholder="Feedback about the product..."
                    hide-details=""
                    outlined
                    dense
                    height="100"
                    ></v-textarea>
                    <v-file-input
                    class="mt-3"
                    label="Image"
                    accept="image/*"
                    dense
                    filled
                    prepend-icon=""
                    prepend-inner-icon="mdi-upload"
                    hide-details="auto"
                    ></v-file-input>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="secondary" @click="$emit('close')">Close</v-btn>
                <v-btn color="primary">
                    Submit Feedback
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        item: {}
    }),
    props: {
        show: {}
    },
    mounted() {
        
    },
    methods: {
        
    },
    watch: {
        show:{
            handler(val){
                console.log(val)
                this.item = val
            },
            deep: true,
            immediate:true
        },
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