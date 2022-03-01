<template>
  <v-app id="inspire">
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
</template>

<script>
import MainHeaders from './mainheaders.vue'
import Sidebar from './sidebar.vue'

export default {
  components:{
    MainHeaders,
    Sidebar,
  },
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: true,
  }),
}
</script>