<template>
    <v-app v-if="!fetching" id="inspire">
        <div v-if="isAuth">
            <div v-if="!loading">
                <Header @handDrawer="drawer = !drawer" @logout="logout"></Header>
                <Sidebar :drawer="drawer" :role="isAuth"></Sidebar>
                <v-main>
                    <v-container
                    class="main-bg pa-5"
                    fluid>
                        <router-view class="main-route"></router-view>
                    </v-container>
                </v-main>
            </div>
            <Loading v-else></Loading>
        </div>
        <Login v-else></Login>
        <!-- <div  v-if="!isAuth && !loading">
            <Register></Register>
            <Login ></Login>
            <router-view></router-view>
        </div> -->
    </v-app>
</template>

<script>
import Login from "./login.vue";
import Header from "./header.vue";
import Loading from "./loading.vue";
import Sidebar from "./sidebar.vue";
import Register from "../components/signup.vue"
export default {
    components: {
    Login,
    Header,
    Loading,
    Sidebar,
    Register
},
data() {
    return {
        drawer: false,
        login: false,
        isAuth: false,
        fetching: true,
        loading: false,
    };
},
mounted(){
    // console.log(this.to)
    // // this.checkAuth()
    // console.log(this.fetching)
  },
  methods:{
    checkAuth(){
        // this.loading = true
        axios.get(`/admin-api/check-auth`).then(({data})=>{
            this.fetching = false
            this.isAuth = data
            console.log(this.data,'auth')
        }).finally(()=>{
            // this.loading = false
        })
    },
    logout(){
        // this.loading = true
        axios.get(`/admin-api/logout`).then(({data})=>{
            this.isAuth = false
            localStorage.role = 0
            this.$router.push({name:'login'})
        }).finally(()=>{
            // this.loading = false
        })
        localStorage.role = '0'
    },
    load(){
      this.loading = true
      console.log(this.loading, 'loading')
      setTimeout(() => {
          this.loading = false
      }, 2500);
      setTimeout(() => {
          location.reload()
      }, 2000);
    },
  },
  watch:{
    isAuth(val) {
      localStorage.rol = val
      console.log(localStorage.role, 'user role')
    },
    $route (to, from){
        this.checkAuth()
    },
    loading(val){
      this.loading = val
    }
  }
}
</script>

