<template>
    <div>
        <v-card elevation="0"  class="pa-2">
            <v-card-title>
                Sku Info
                <v-spacer></v-spacer>
                <v-btn color="secondary"
                @click="$router.go(-1)">
                    <v-icon class="mr-2">mdi-backspace</v-icon>
                    Back
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col md="4" cols="12">
                        <v-card elevation="0">
                            <v-card-text>
                                <div class="d-flex justify-space-between">
                                    <div>
                                        <h4>Order Id:</h4>
                                        <p class="text-h4 text--primary">
                                            {{ order.order_code }}
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Date Created:</h4>
                                        <span class="font-italic text-h6 text--primary">
                                            Date
                                        </span>
                                    </div>
                                </div>
                                <h4>Customer Information:</h4>
                                <div class="mb-4">
                                    <p class="text-h5 text--primary">
                                        {{ order.customer.address }}
                                    </p>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col md="8" cols="12" class="cus-border">
                        <v-card class="mb-4" elevation="0">
                            <v-card-title>
                                Order Items
                                <v-spacer></v-spacer>
                                <v-btn
                                color="success"
                                small>
                                    Add
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-text>
                                <v-simple-table>
                                    <template v-slot:default>
                                    <thead>
                                        <tr>
                                        <th class="text-left">
                                            Name
                                        </th>
                                        <th class="text-left">
                                            Calories
                                        </th>
                                        <th class="text-center">
                                            Actions
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                        v-for="item in desserts"
                                        :key="item.name"
                                        >
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.calories }}</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                    </template>
                                </v-simple-table>
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
        order: {
            customer: ''
        },
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
        ]
    }),
    mounted() {
        this.show()
    },
    methods: {
        show() {
            let id = this.$route.params.id
            axios.get(`/admin-api/order/${id}`).then(({data})=>{
                this.order = data
                console.log(data)
            })
        }
    }
}
</script>

<style scoped>
.cus-border{
    border-left: 1px solid #ccc;
}
</style>