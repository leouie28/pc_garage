<template>
    <div class="dashboard">

        <v-subheader>
            <h3>Dashboard</h3>
        </v-subheader>
        <v-row>
            <v-col>
                <v-row>
                    <v-col lg="6" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div class="">
                                    <strong>Companies</strong><br>
                                    <small>Active</small>
                                </div>
                                <v-avatar color="purple" size="60">
                                    <span class="white--text">{{ dashboardCompany }}</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col lg="6" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div class="">
                                    <strong>Employees</strong><br>
                                    <small>Active</small>
                                </div>
                                <v-avatar color="indigo" size="60">
                                    <span class="white--text">{{ dashboardEmployee }}</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col lg="6" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div class="">
                                    <strong>Products</strong><br>
                                    <small>Quantity</small>
                                </div>
                                <v-avatar color="red" size="60">
                                    <span class="white--text">{{ dashboardProduct }}</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col lg="6" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div class="">
                                    <strong>Customers</strong><br>
                                    <small>Daily</small>
                                </div>
                                <v-avatar color="yellow" size="60">
                                    <span class="white--text">{{ dashboardCustomer }}</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </div>
</template>

<script>

export default {
    data () {
        return {
            dashboardCompany: [],
            dashboardEmployee: [],
            dashboardProduct: [],
            dashboardCustomer: []
        }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        axios.get('/admin/dashboard/company').then(({data}) => {
          this.dashboardCompany = data;
        //   console.log(this.dashboardCompany)
        })
        axios.get('/admin/dashboard/employee').then(({data}) => {
          this.dashboardEmployee = data;
        //   console.log(this.dashboardEmployee)
        })
        axios.get('/admin/dashboard/product').then(({data}) => {
          this.dashboardProduct = data;
        //   console.log(this.dashboardProduct)
        })
        axios.get('/admin/dashboard/customer').then(({data}) => {
          this.dashboardCustomer = data;
        //   console.log(this.dashboardCustomer)
        })
      },
    },
  }

</script>