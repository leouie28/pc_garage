<template>
    <v-navigation-drawer
      v-model="drawer"
      :color="'#00695C'"
      class=" accent-4"
      width=200
      dark
      app
    >
        <v-img src="" class="mt-3 pa-4">
            <div class="text-center">
                <v-avatar
                class="mb-3"
                color="grey darken-1"
                size="64"
                >
                </v-avatar>
                <div>@user</div>
            </div>
        </v-img>
      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, route] in links"
          :key="icon"
          link
          @click="$router.push({name: route}).catch(() => {})"
          :class="getUrl == route ? 'active' : '' "
        >
          <v-list-item-icon>
            <v-icon dense>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="font-size: 14px">{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
            <div class="pa-2">
                <v-btn @click="logout" block color="#89ABB5" style="font-size: 14px">
                    <v-icon dense>mdi-logout</v-icon>
                    Logout
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
export default {
    props:['drawer'],
    data: function (){
        return{
          links: [
            ['mdi-domain', 'Companies', 'company'],
            ['mdi-view-dashboard-outline', 'Dashboard', 'dashboards'],
            ['mdi-face-agent', 'Employees', 'employee'],
            ['mdi-account-group', 'Customers', 'customer'],
            ['mdi-briefcase', 'Products', 'product'],
            ['mdi-format-list-checks', 'Orders', 'order'],
            ['mdi-credit-card-outline', 'Payments', 'payment'],
            // ['mdi-logout', 'Logout'],
          ],
          mutalbeList: JSON.parse(this.drawer),
        }
    },
    methods:{
      logout(){
          this.$emit('logout');
      },
    },
    computed: {
      getUrl(){
        let url = this.$route.fullPath
        let path = url.split('/')
        return path[1]
      },
    },
}
</script>
<style scope> 
.active {
  background-color: #00564c !important;
}
</style>