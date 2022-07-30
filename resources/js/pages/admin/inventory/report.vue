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
                        <v-col md="12" cols="12">
                            <v-card>
                                <v-card-title>
                                    Sales of the Week
                                </v-card-title>
                                <v-card-text>
                                    <bar-chart :height="260" :chartData="sales_chart"></bar-chart>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <!-- <v-col md="4" cols="12">
                            <v-card>
                                <v-card-title>
                                    Sales Status
                                </v-card-title>
                                <v-card-text>
                                    <donut-chart :height="260" :chartData="status_chart"></donut-chart>
                                </v-card-text>
                            </v-card>
                        </v-col> -->
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
import DonutChart from '@/components/global/charts/donutchart.vue'
import BarChart from '@/components/global/charts/barchart.vue'
import Sales from '@/components/admin/inventory/sales.vue'
export default {
    components: {
        BarChart,
        DonutChart,
        Sales,
    },
    data () {
        return {
            tab: null,
            active_tab: 0,
            tabs: [
                {
                    name: 'Sales',
                    icon: 'mdi-finance',
                    link: 'admin-inventory-report'
                },
                {
                    name: 'Stocks',
                    icon: 'mdi-package-variant',
                    link: 'admin-inventory-stock'
                },
            ],
            sales_chart: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [
                    {
                        label: 'Sales',
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
                        data: [0, 0, 0, 0, 0, 0, 0]
                    }
                ]
            },
            // status_chart: {
            //     labels: ["Canceled", "Pending", "Confirm", "On Delivery",	"Delivered"],
            //     datasets: [{
            //         borderWidth: 1,
            //         backgroundColor: [
            //         '#E57373',
            //         '#616161',
            //         '#00B8D4',
            //         '#FF9800',
            //         '#4DB6AC',                
            //         ],
            //         data: [0, 0, 0, 0, 0]
            //         }]
            // },
        }
    },
    created() {
        this.getDatas()
    },
    methods: {
        getDatas(){
            axios.get(`/admin-api/sales/report`).then(({data})=>{
                this.sales_chart.datasets[0].data = data
            });
        }
    }
}
</script>