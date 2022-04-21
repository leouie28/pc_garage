<template>
<v-card>
    <v-card-title>PRODUCT DETAILS</v-card-title>
    <v-card-text>
        <v-container>
            <v-form ref="form">
                <v-row>
                    <v-col>
                        <span><b>Name: </b></span>
                        <span>{{ details.products.name }}</span>
                    </v-col>
                    <v-col>
                        <span><b>Price: </b></span>
                        <span>{{ details.products.price }}</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <span><b>Reference: </b></span>
                        <span>{{ details.products.reference }}</span>
                    </v-col>
                    <v-col>
                        <span><b>Category: </b></span>
                        <span>{{ details.products.reference }}</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <span><b>Descrition: </b></span>
                        <span>{{ details.products.description }}</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <span><b>Comment: </b></span>
                        <span>{{ details.products.comment }}</span>
                    </v-col>
                </v-row>
            </v-form>
        </v-container>
    </v-card-text>
    <v-card-title>OPTION DETAILS</v-card-title>
    <v-card-text>
        <v-container>
            <v-form ref="form">
                <v-row>
                    <v-col>
                        <span><b>Name: </b></span>
                        <span>{{ details.options.name }}</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <span><b>Price: </b></span>
                        <span>{{ details.options.addprice }}</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <span><b>Variation: </b></span>
                        <span>{{ details.options.variations.name }}</span>
                    </v-col>
                </v-row>
            </v-form>
        </v-container>
    </v-card-text>
    <v-card-title>CUSTOMER INFORMATION</v-card-title>
    <v-card-text>
        <v-container>
            <v-form ref="form">
                <v-row>
                    <v-col>
                        <span><b>Name: </b></span>
                        <span>{{ details.orders.customers.name }}</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <span><b>Phone: </b></span>
                        <span>{{ details.orders.customers.phone }}</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <span><b>Email: </b></span>
                        <span>{{ details.orders.customers.email }}</span>
                    </v-col>
                </v-row>
            </v-form>
        </v-container>
    </v-card-text>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            text
            color="red darken-1"
            @click="close"
        >
            Close
        </v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    props:{
        details:{}
    },
    methods: {
        close () {
            this.$emit("close")
      },
    }
}
</script>
