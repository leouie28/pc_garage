<template>
    <v-navigation-drawer
      v-model="drawer"
      color="blue-grey darken-3"
      class=" accent-4"
      width="228"
      dark
      app
    >
      <img src="https://picsum.photos/500/300?image=40" alt="ubi logo" style="margin-top: 10%; margin-left: 25%; margin-bottom:10%;" height="100" width="100" />
      <v-list>
        <v-list-item
          v-for="item in navs"
          :key="item.icon"
          @click="$router.push({name: item.path})"
          :class="getUrl == item.path ? 'active' : '' "
        >
          <v-list-item-icon class="pl-3">
            <v-icon dense color="#cccccc">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color:#ccc; font-size: 16px">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="footer">
        <v-footer
          dark
          padless
        >
          <v-card
          width="100%"
            flat
            tile
          >
            <v-card-text class="py-5 text-center">
              <!-- <small class="font-italic">Powered by:</small><br> -->
              PCGarage
            </v-card-text>
          </v-card>
        </v-footer>
      </div>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => {
        return{
          navs: null,
          admin: [
            {
              name: 'Dashboard',
              icon: 'mdi-view-dashboard-outline',
              path: 'admin-dashboard'
            },
            {
              name: 'Products',
              icon: 'mdi-briefcase',
              path: 'admin-product'
            },
            {
              name: 'Orders',
              icon: 'mdi-format-list-checks',
              path: 'admin-order'
            },
            {
              name: 'Customers',
              icon: 'mdi-account-group',
              path: 'admin-customer'
            },
            {
              name: 'Inventory',
              icon: 'mdi-nas',
              path: 'admin-inventory'
            },
          ],
          customer: [
            {
              name: 'Products',
              icon: 'mdi-shopping',
              path: 'product'
            },
            {
                name: 'My Orders',
                icon: 'mdi-format-list-checks',
                path: 'order'
            },
            {
              name: 'My Cart',
              icon: 'mdi-cart',
              path: 'employee'
            },
          ],
          icons: [
            'mdi-facebook',
            'mdi-gmail',
          ],
        }
    },
    props:{
      drawer: {},
      role: {},
      inActive: {}
    },
    mounted() {
      this.getNavs()
    },
    methods: {
      getNavs(){
        if(this.role=='admin'){
          this.navs = this.admin
        }else{
          this.navs = this.customer
        }
      }
    },
    computed: {
      getUrl(){
        let url = this.$route.fullPath
        let path = url.split('/')
        return path[1]
      },
    },
    watch: {

    }
}
</script>
<style scope> 
.active .v-icon, .active .v-list-item__title{
  color: #fff !important;
}
.active{
  background: #263238 !important;
}
.footer{
  width : 100% !important;
  position: absolute;
  bottom: 0px !important;
  color: rgb(182, 182, 182);
}
</style>