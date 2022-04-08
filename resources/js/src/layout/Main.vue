<template>
  <v-app v-if="!isfetching">
    <div v-if="isAuth">
      <main-headers @handDrawer="drawer = !drawer"></main-headers>
      <sidebar :drawer="drawer" @logout="logout"></sidebar>
      <v-main>
        <v-container
          class="py-8 px-6"
          fluid
        >
          <router-view class="main-route"></router-view>
        </v-container>
      </v-main>
    </div>
    <login v-else></login>
  </v-app>
</template>

<script>
import MainHeaders from './mainheaders.vue'
import Sidebar from './sidebar.vue'
import Login from './login.vue'

export default {
  components:{
    MainHeaders,
    Sidebar,
    Login,
  },
  data(){
    return{
      cards: ['Today', 'Yesterday'],
      drawer: true,
      login: false,
      isSuperAdmin: false,
      isAuth: false,
      isfetching: true,
    }
  },
  methods:{
    getAuthadmin(){
      axios.get(`/admin/checkadmin`).then(({data})=>{
          //console.log(data,"check")
          this.isAuth = data
          this.isfetching = false
      })
    },
    logout(){
        axios.get(`/admin/logout`).then(({data})=>{
            this.isAuth = false
            this.$router.push({name:'login'})
        })
    },
  },
  mounted(){},
  watch:{
    $route (to, from){
        this.getAuthadmin()
    }
  }
}
</script>
