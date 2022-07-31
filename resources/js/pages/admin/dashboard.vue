<template>
    <div>
        <v-subheader><h1>Dashboard</h1></v-subheader>
        <v-col>
            <v-row wrap>
                <v-col md="3" cols="12" v-for="(data, index) in dashboard" :key="data.data">
                <v-card elevation="0" class="rounded-lg">
                    <v-card-text class="d-flex justify-space-between align-center">
                        <div>
                            <div class="mb-4">
                                <strong class="text-capitalize">{{index}}</strong>
                            </div>
                            <v-subheader class="display-3">{{ data.item }}</v-subheader>
                        </div>
                        <v-sheet
                        rounded
                        dark
                        class="pa-5"
                        :color="data.color">
                            <v-icon x-large>
                                    {{ data.icon }}
                            </v-icon>
                        </v-sheet>
                    </v-card-text>
                </v-card>
            </v-col>
            </v-row>
            <v-row wrap>
                <v-col cols="12" md="8">
                    <v-card elevation="0" class="rounded-lg">
                        <v-card-title>
                            Orders of the week
                        </v-card-title>
                        <v-card-text>
                            <line-chart
                            :height="300"
                            :removeLabel="true"
                            :chartData="order_chart"
                            ></line-chart>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col md="4" cols="12">
                    <v-card elevation="0" class="rounded-lg">
                        <v-card-title>
                            Orders status of the week
                        </v-card-title>
                        <v-card-text>
                            <donut-chart :height="300" :chartData="status_chart"></donut-chart>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="12">
                    <v-card elevation="0" class="rounded-lg">
                        <v-card-title>
                            New customers of the week
                        </v-card-title>
                        <v-card-text>
                            <bar-chart :height="300" :chartData="customer_chart"></bar-chart>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </div>
</template>
<script>
import LineChart from '@/components/global/charts/linechart.vue'
import BarChart from '@/components/global/charts/barchart.vue'
import DonutChart from '@/components/global/charts/donutchart.vue'
export default {
    components: {
        LineChart,
        BarChart,
        DonutChart
    },
    data(){
        return{
            dashboard: {
                product: {
                    item: '',
                    color: 'orange',
                    icon: 'mdi-desktop-classic',
                    link: ''
                },
                order: {
                    item: '',
                    color: 'green accent-2',
                    icon: 'mdi-briefcase-account-outline',
                    link: ''
                },
                customer: {
                    item: '',
                    color: 'blue-grey',
                    icon: 'mdi-account-group',
                    link: ''
                },
                recommendation: {
                    item: '',
                    color: 'red',
                    icon: 'mdi-clipboard-text-outline',
                    link: ''
                }
            },
            customer_chart: {
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
            order_chart: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [
                    {
                        label: 'Orders',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        fill: true,
                        borderColor: '#1C3B9F',
                        data: [0, 0, 0, 0, 0, 0, 0],
                        tension: .5
                    },
                ]
            },
            status_chart: {
                labels: ["Canceled", "Pending", "Confirmed", "On Delivery",	"Delivered"],
                datasets: [{
                    borderWidth: 1,
                    backgroundColor: [
                    '#E57373',
                    '#616161',
                    '#00B8D4',
                    '#FF9800',
                    '#4DB6AC',                
                    ],
                    data: [0, 0, 0, 0, 0]
                    }]
            },
        }
    },
    created() {
        this.initialize()
    },
    mounted(){
        
    },
    methods: {
        initialize() {
            this.getDatas()
            this.getStatistic()
            this.checkSales()
        },
        checkSales() {
            axios.get(`/admin-api/sales/check-sales`).then(({data})=>{
                console.log(data)
            })
        },
        getStatistic() {
            axios.get(`/admin-api/dashboard/statistic`).then(({data})=>{
                this.dashboard.product.item = data.product;
                this.dashboard.order.item = data.order;
                this.dashboard.customer.item = data.customer;
                this.dashboard.recommendation.item = data.recommendation;
            })
        },
        getDatas(){
            axios.get(`/admin-api/dashboard/report`).then(({data})=>{
                this.order_chart.datasets[0].data = data.orders
                this.status_chart.datasets[0].data = data.status
                this.customer_chart.datasets[0].data = data.customers
            });
        }
    },
}
</script>