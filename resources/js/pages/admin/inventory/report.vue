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
                        <v-col md="4" cols="12">
                            <v-card>
                                <v-card-title>
                                    Orders of the Week
                                </v-card-title>
                                <v-card-text>
                                    <line-chart
                                    :height="260"
                                    :removeLabel="true"
                                    :chartData="kg_chart_data"
                                    ></line-chart>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="4" cols="12">
                            <v-card>
                                <v-card-title>
                                    New Customer of the Week
                                </v-card-title>
                                <v-card-text>
                                    <bar-chart :height="260" :chartData="subscription_chart"></bar-chart>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="4" cols="12">
                            <v-card>
                                <v-card-title>
                                    Order Status of the Week
                                </v-card-title>
                                <v-card-text>
                                    <donut-chart :height="260" :chartData="donut_chart"></donut-chart>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12" cols="12">
                            <sales></sales>
                        </v-col>
                    </v-row>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import LineChart from '@/components/global/charts/linechart.vue'
import BarChart from '@/components/global/charts/barchart.vue'
import DonutChart from '@/components/global/charts/donutchart.vue'
import Sales from '@/components/admin/inventory/sales.vue'
export default {
    components: {
        BarChart,
        LineChart,
        DonutChart,
        Sales,
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
                // {
                //     name: 'Product',
                //     icon: 'mdi-desktop-classic',
                //     link: 'admin-inventory-report'
                // },
                // {
                //     name: 'Orders',
                //     icon: 'mdi-format-list-checks',
                //     link: 'admin-inventory-report'
                // },
                // {
                //     name: 'Customers',
                //     icon: 'mdi-account-group',
                //     link: 'admin-inventory-report'
                // },
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
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    fill: true,
                    borderColor: '#1C3B9F',
                    data: [0, 39, 0, 40, 20],
                    tension: 0.5
                },
                ]
            },
            subscription_chart: {
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
                        label: 'Clients',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)'
                        ],
                        borderWidth: 1,
                        data: [3, 7, 2, 9, 3, 7, 0]
                    }
                ]
            },
            donut_chart: {
                labels: ["Babol",	"Cabanatuan",	"Daegu",	"Jerusalem"],
                datasets: [{
                    borderWidth: 1,
                    borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'                
                    ],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',                
                    ],
                    data: [1000,	500,	1500,	1000]
                    }]
            },
        }
    },
}
</script>