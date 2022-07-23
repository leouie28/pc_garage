<template>
    <div>
        <v-card elevation="0" class="pa-2">
            <v-card-title>
                Order Info
                <v-spacer></v-spacer>
                <v-btn color="secondary">
                    <v-icon class="mr-2">mdi-backspace</v-icon>
                    Back
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col md="5" cols="12">
                        <v-card elevation="0" color="grey lighten-2" rounded="">
                            <v-card-text>
                            <div class="d-flex justify-space-between">
                                <div>
                                    <h4>Order Id:</h4>
                                    <p class="text-h3 text--primary">
                                        #0506212
                                    </p>
                                </div>
                                <div>
                                    <h4>
                                        Status: 
                                        <v-chip
                                        label
                                        color="primary">
                                            Pending
                                            <v-icon class="ml-1">mdi-alert-circle-outline</v-icon>
                                        </v-chip>
                                    </h4>
                                </div>
                            </div>
                            <h4>Customer Information:</h4>
                            <div class="mb-4">
                                <v-timeline
                                dense
                                class="py-3 pb-1"
                                align-top>
                                    <v-timeline-item
                                    class="py-0 ma-0"
                                    left
                                    icon="mdi-account">
                                        <p class="text-h5 text--primary">
                                            Mark Leouie Tabique
                                        </p>
                                    </v-timeline-item>
                                    <v-timeline-item
                                    class="py-0 ma-0"
                                    left
                                    icon="mdi-map-marker">
                                        <p class="text-h5 text--primary">
                                            Address Testing
                                        </p>
                                    </v-timeline-item>
                                </v-timeline>
                            </div>
                            <div class="d-flex justify-space-between">
                                <div>
                                    <h4>Date Order:</h4>
                                    <p class="text-h5 text--primary">July 12, 2022</p>
                                </div>
                                <div>
                                    <h4>Date Arrival:</h4>
                                    <p class="text-h5 primary--text">July 12, 2022</p>
                                </div>
                            </div>
                            <v-divider class="my-2"></v-divider>
                            <v-sheet class="pa-2 text-center" color="success" rounded="">
                                <span class="white--text text-h5">Total: &#8369; 674</span>
                            </v-sheet>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col md="7" cols="12">
                        <v-card rounded color="blue-grey darken-4">
                            <v-card-title>
                                <h4 class="white--text">Order Items</h4>
                            </v-card-title>
                            <v-card-text class="white">
                                <v-list>
                                    <v-list-item two-line>
                                        <v-list-item-content>
                                            <div class="d-flex justify-space-between align-center">
                                                <div class="d-flex justify-space-between align-center">
                                                    <v-img
                                                    max-width="100"
                                                    max-height="100"
                                                    src="https://picsum.photos/id/11/500/300"
                                                    ></v-img>
                                                    <div class="ml-4">
                                                        <v-list-item-subtitle><h4>Qty: 4</h4></v-list-item-subtitle>
                                                        <v-list-item-title><span class="text-h5">Title Test</span></v-list-item-title>
                                                    </div>
                                                </div>
                                                <v-sheet color="red darken-1" dark class="pa-4">
                                                    <h2>&#8369; 54</h2>
                                                </v-sheet>
                                            </div>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-divider></v-divider>
                                </v-list>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        product: {}
    }),
    mounted() {
        this.show()
    },
    methods: {
        show() {
            let id = this.$route.params.id
            axios.get(`/admin-api/product/${id}`).then(({data})=>{
                this.product = data
                console.log(data)
            })
        }
    }
}
</script>