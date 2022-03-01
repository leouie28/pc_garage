<template>
    <v-navigation-drawer
      v-model="drawer"
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
                <div>admin user</div>
            </div>
        </v-img>
      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
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
                ['mdi-view-dashboard-outline', 'Dashboard'],
                ['mdi-briefcase', 'Jobs'],
                ['mdi-account-group', 'Users'],
                ['mdi-alert-octagon', 'Reports'],
                ['mdi-logout', 'Logout'],
                ],
        }
    }
}
</script>