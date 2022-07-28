<template>
    <v-navigation-drawer
      v-model="drawer1"
      color="blue-grey darken-3"
      class=" accent-4"
      width="250"
      dark
      app
    >
      <div class="mx-auto">
        <img src="/images/system/logo.png" alt="ubi logo" height="150" width="150" style="margin: 10px 18%;" />
      </div>
      <v-list color="py-0">
          <v-list-item
            v-for="(item, index) in navs"
            :key="index"
            @click="$router.push({name: item.path}).catch(() => {})"
            :class="getUrl == item.path ? 'active-nav' : '' "
          >
            <v-list-item-icon class="pl-3">
              <v-icon dense color="#cccccc">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title style="color:#ccc; font-size: 16px">{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
      <v-list-group
        :value="false"
      >
        <template v-slot:activator>
          <v-list-item-icon class="pl-3">
            <v-icon dense color="#cccccc">mdi-dots-horizontal-circle-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color:#ccc; font-size: 16px">Others</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          style="background: #263238;"
          v-for="(subs, index) in submenus"
          :key="index"
          @click="$router.push({name: subs.path}).catch(() => {})"
          :class="getUrl == subs.path ? 'active-nav' : '' "
        >
          <v-list-item-icon class="ml-5">
            <v-icon dense small color="#cccccc">{{ subs.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color:#ccc; font-size: 15px">{{ subs.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
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
          drawer1: true,
          submenus: [
            {
              name: 'Compatibility',
              icon: 'mdi-checkbox-multiple-marked-outline',
              path: 'admin-compatibility'
            },
            {
              name: 'Recommendations',
              icon: 'mdi-message-bulleted',
              path: 'admin-recommendation'
            },
            {
              name: 'Inventory',
              icon: 'mdi-clipboard-list-outline',
              path: 'admin-inventory-report'
            },
          ],
          admin: [
            {
              name: 'Dashboard',
              icon: 'mdi-view-dashboard-outline',
              path: 'admin-dashboard'
            },
            {
              name: 'Products',
              icon: 'mdi-devices',
              path: 'admin-product'
            },
            {
              name: 'Orders',
              icon: 'mdi-format-list-checks',
              path: 'admin-order'
            },
            {
              name: 'Categories',
              icon: 'mdi-format-list-text',
              path: 'admin-category'
            },
            {
              name: 'Customers',
              icon: 'mdi-account-group',
              path: 'admin-customer'
            },
            // {
            //   name: 'Others',
            //   icon: 'mdi-dots-horizontal-circle-outline',
            //   // path: 'admin-customer'
            //   submenus: [
            //     {
            //       name: 'Compatibility',
            //       icon: 'mdi-checkbox-multiple-marked-outline',
            //       path: 'admin-compatibility'
            //     },
            //     {
            //       name: 'Recommendations',
            //       icon: 'mdi-message-bulleted',
            //       path: 'admin-recommendation'
            //     },
            //     {
            //       name: 'Inventory',
            //       icon: 'mdi-nas',
            //       path: 'admin-inventory-report'
            //     },
            //   ]
            // },
            // {
            //   name: 'Compatibility',
            //   icon: 'mdi-checkbox-multiple-marked-outline',
            //   path: 'admin-compatibility'
            // },
            // {
            //   name: 'Recommendations',
            //   icon: 'mdi-message-bulleted',
            //   path: 'admin-recommendation'
            // },
            // {
            //   name: 'Inventory',
            //   icon: 'mdi-nas',
            //   path: 'admin-inventory-report'
            // },
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
                path: 'orders'
            },
            {
                name: 'My Recommendation',
                icon: 'mdi-message-bulleted',
                path: 'recommendations'
            },
            // {
            //   name: 'My Cart',
            //   icon: 'mdi-cart',
            //   path: 'employee'
            // },
          ],
          icons: [
            'mdi-facebook',
            'mdi-gmail',
          ],
        }
    },
    props:{
      drawer: {
        type: Boolean,
        default: () => true
      },
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
      },
    },
    computed: {
      getUrl(){
        let url = this.$route.fullPath
        let path = url.split('/')
        if(localStorage.role=='admin'){
          if(path[2]=='inventory'){
            let name = path[1]+'-'+path[2]+'-report'
            return name
          }else{
            let name = path[1]+'-'+path[2]
            return name
          }
        }else{
          return path[1]
        }
      },
    },
    watch: {
      drawer: {
        handler(val) {
          this.drawer1 = val
        },
        deep: true,
        immediate: true
      }
    }
}
</script>
<style scope> 
.active-nav .v-icon, .active .v-list-item__title{
  color: #fff !important;
}
.active-nav{
  background: #212121 !important;
}
.footer{
  width : 100% !important;
  position: absolute;
  bottom: 0px !important;
  color: rgb(182, 182, 182);
}
</style>