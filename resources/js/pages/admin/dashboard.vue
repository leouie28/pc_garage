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
                    <v-card elevation="0" class="rounded-lg pa-5 pt-7">
                        <v-card-text>
                            <apexchart type="area" height="340" :options="timelineOptions" :series="timelineSeries"></apexchart>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col lg="4" cols="12">
                    <v-card elevation="0" class="rounded-lg pa-5 pt-7">
                        <v-card-text>
                            <apexchart type="donut" height="370" :options="donutOptions" :series="donutSeries"></apexchart>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dashboard: {
                product: {
                    item: '',
                    color: 'orange',
                    icon: 'mdi-food',
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
            timelineSeries: [
                {
                    name: 'Orders',
                    data: []
                },
            ],
            timelineOptions: {
                chart: {
                type: 'area',
                redrawOnParentResize: true
                },
                title: {
                    text: 'Orders of ' +this.moment().format('MMMM')
                },
                dataLabels: {
                enabled: false
                },
                stroke: {
                curve: 'smooth'
                },
                markers: {
                    size: 7,
                    // colors: ["#000524"],
                    // strokeColor: "#00BAEC",
                    // strokeWidth: 3
                },
                xaxis: {
                  type: 'date',
                  labels: {
                    show: true,
                    datetimeFormatter: {
                        year: 'yyyy',
                        month: "MMM 'yy",
                        day: 'dd MMM',
                    },
                  },
                categories: []
                },
                tooltip: {
                x: {
                    format: 'dd/MM/yy'
                },
                },
            },
            donutSeries: [],
            donutOptions: {
                theme: {
                    palette: 'palette3'
                },
                title: {
                    text: 'Todays Order'
                },
                chart: {
                    type: 'donut',
                    height: '360',
                    toolbar: {
                        show: true
                    },
                },
                labels: [],
                plotOptions: {
                    pie: {
                        donut: {
                            size: '55%',
                            labels: {
                                show: true,
                                total: {
                                    show: true
                                }
                            }
                        }
                    }
                },
                noData: {
                    text: 'No current order today!',
                    align: 'center',
                    verticalAlign: 'middle',
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        color: undefined,
                        fontSize: '24px',
                        fontFamily: undefined
                    }
                }
            },
        }
    },
    created() {
        this.initialize()
    },
    mounted(){
        // console.log(this.$route)
        // this.initialize()
    },
    methods: {
        initialize() {
            this.getMonthOrders()
            this.getOrders()
            this.getStatistic()
        },
        getStatistic() {
            axios.get(`/admin-api/dashboard/statistic`).then(({data})=>{
                this.dashboard.product.item = data.product;
                this.dashboard.order.item = data.order;
                this.dashboard.customer.item = data.customer;
                this.dashboard.recommendation.item = data.recommendation;
            })
        },
        getMonthOrders() {
            axios.get(`/admin-api/dashboard/month-orders`).then(({data})=>{
                console.log(data)
                let val = []
                let cat = []
                Object.entries(data).forEach(entry => {
                    var [key, value] = entry;
                    this.timelineSeries[0].name = 'Days'
                    this.timelineSeries[0].data.push(parseInt(value))
                    cat.push(key)
                })
                console.log(cat)
                this.timelineOptions.categories = cat
                // this.timelineSeries[0].data = val
                console.log(this.timelineSeries,'ajkfsjlslkjlksjlfk')
            })
        },
        getOrders() {
            this.donutSeries = []
            this.donutOptions.labels = []
            var orders = []
            axios.get(`/admin-api/dashboard/orders`).then(({data})=>{
                data.forEach(prod => {
                    this.donutSeries.push(parseInt(prod.order_sum_order_productquantity))
                    this.donutOptions.labels.push(prod.name)
                });
                console.log(this.donutOptions.labels)
            })
        }
    },
    mounted() {
    this.$nextTick(() => {
        window.dispatchEvent(new Event('resize'));
    });
}
}
</script>