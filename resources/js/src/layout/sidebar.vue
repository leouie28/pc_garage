<template>
    <v-navigation-drawer
      v-model="drawer"
      :color="'#00695C'"
      class=" accent-4"
      width=300
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
          @click="$router.push({name: route})"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props:['drawer'],
    data(){
        return{
          links: [
            ['mdi-domain', 'Companies', 'company'],
            ['mdi-view-dashboard-outline', 'Dashboard', 'dashboards'],
            ['mdi-face-agent', 'Employees', 'employee'],
            ['mdi-account-group', 'Customers', 'customer'],
            ['mdi-box', 'Category', 'category'],
            ['mdi-briefcase', 'Products', 'product'],
            ['mdi-format-list-checks', 'Orders', 'order'],
            ['mdi-credit-card-outline', 'Payments', 'payment'],
            ['mdi-logout', 'Logout'],
          ],
        }
    }
}
</script>