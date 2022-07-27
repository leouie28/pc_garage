<template>
    <div>
        <v-subheader><h1>Inventory</h1></v-subheader>
        <v-card elevation="0" class="pa-2" >
            <v-card-text>
                <v-tabs
                v-model="active_tab"
                align-with-title
                >
                    <v-tabs-slider color="primary"></v-tabs-slider>

                    <v-tab
                        v-for="item in tabs"
                        :key="item.name"
                        @click="$router.push({name: item.link}).catch(() => {})"
                    >
                        <h4 class="mr-2">{{ item.name }}</h4>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-tab>
                </v-tabs>
                <div class="mt-6">
                    <v-row>
                        <v-col md="6" cols="12">
                            <line-chart
                            :height="360"
                            :removeLabel="true"
                            :chartData="kg_chart_data"
                            ></line-chart>
                        </v-col>
                        <v-col md="6" cols="12">
                            <bar-chart :chartData="subscription_chart"></bar-chart>
                        </v-col>
                    </v-row>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import LineChart from '../../../components/global/charts/linechart.vue'
import BarChart from '../../../components/global/charts/barchart.vue'
export default {
    components: {
        BarChart,
        LineChart,
    },
    data () {
        return {
            tab: null,
            active_tab: 0,
            tabs: [
                {
                    name: 'Reports',
                    icon: 'mdi-finance',
                    link: 'admin-inventory-report'
                },
                {
                    name: 'Stocks',
                    icon: 'mdi-package-variant',
                    link: 'admin-inventory-stock'
                },
                {
                    name: 'Product',
                    icon: 'mdi-desktop-classic',
                    link: 'admin-inventory-report'
                },
                {
                    name: 'Orders',
                    icon: 'mdi-format-list-checks',
                    link: 'admin-inventory-report'
                },
                {
                    name: 'Customers',
                    icon: 'mdi-account-group',
                    link: 'admin-inventory-report'
                },
            ],
            kg_chart_data: {
                labels: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
                ],
                datasets: [
                {
                    label: 'Kg',
                    backgroundColor: '#D8EAF8',
                    fill: true,
                    borderColor: '#1C3B9F',
                    data: [40, 39, 16, 40, 49, 80, 40],
                    tension: 0.5
                },
                ]
            },
            subscription_chart: {
                labels: [
                    'Subscriber',
                    'Non Subscriber',
                    'Subscriber',
                    'Non Subscriber',
                ],
                datasets: [
                    {
                        label: 'Clients',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                        ],
                        borderWidth: 1,
                        data: [3, 7, 2, 9]
                    }
                ]
            },
        }
    },
}
</script>