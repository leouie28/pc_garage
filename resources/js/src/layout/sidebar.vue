<template>
    <v-navigation-drawer
      v-model="drawer"
      :color="'#00695C'"
      class=" accent-4"
      width=200
      dark
      app
    >
        <v-img :src="require('/storage/app/public/White.png')" class="mt-1 pa-3 logo">
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
    </v-navigation-drawer>
</template>

<script>
export default {
    props:['drawer'],
    data: () => {
        return{
          links: [
            ['mdi-domain', 'Companies', 'company'],
            ['mdi-view-dashboard-outline', 'Dashboard', 'dashboards'],
            ['mdi-face-agent', 'Employees', 'employee'],
            ['mdi-account-group', 'Customers', 'customer'],
            // ['mdi-food-variant', 'Category', 'category'],
            ['mdi-briefcase', 'Products', 'product'],
            // ['mdi-scale', 'Variations', 'variation'],
            // ['mdi-playlist-plus', 'Options', 'option'],
            ['mdi-format-list-checks', 'Orders', 'order'],
            ['mdi-credit-card-outline', 'Payments', 'payment'],
             //['mdi-logout', 'Logout'],
          ],
        }
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
.logo {
  object-fit: cover;
  margin: 0 20px;
}
</style>