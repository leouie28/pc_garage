<template>
  <v-app
  v-if="isAuth"
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
    <login v-else></login>
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
<<<<<<< HEAD
  data(){
        return{
            isSuperAdmin:false,
            isAuth:false,
            isfetching:true,
        }
    },
    methods:{
       getAuthadmin(){
            axios.get(`/api/checkadmin`).then(({data})=>{
                console.log(data,"check")
                this.isAuth = data
                this.isfetching = false
            })
            
        }
    },
=======
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: true,
    login: true,
  }),
>>>>>>> 81d054fe079f7a212183a3acecb62c7c620e609d
  mounted(){
  },
   watch:{
        $route (to, from){
           this.getAuthadmin()
        }
    }
}
</script>