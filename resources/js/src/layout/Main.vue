<template>
  <v-app
  v-if="login"
  >
    <main-headers @handDrawer="drawer = !drawer"></main-headers>
    <sidebar :drawer="drawer"></sidebar>
    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <router-view class="main-route"></router-view>
      </v-container>
    </v-main>
  </v-app>
  <v-app
  v-else
  >
    <login></login>
  </v-app>
</template>

<script>
import MainHeaders from './mainheaders.vue'
import Sidebar from './sidebar.vue'
import Login from './auth/login.vue'

export default {
  components:{
    MainHeaders,
    Sidebar,
    Login,
  },
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: true,
    login: false,
  }),
  mounted(){
    console.log(this.$route)
  }
}
</script>