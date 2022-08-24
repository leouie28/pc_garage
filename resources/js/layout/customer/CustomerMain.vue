<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="blue-grey "
      flat
      dark
      elevation="4"
      elevate-on-scroll
    >
      <v-tabs
        v-model="active"
        centered
        dark
        hide-slider
      >
        <v-tab @click="$router.push({name: 'product'}).catch(() => {})">
            <v-icon>mdi-devices</v-icon>
            <h4 class="ml-2 toHide">Products</h4>
        </v-tab>
        <v-tab @click="cartDialog = true">
            <v-icon>mdi-cart</v-icon>
            <v-badge v-if="navStat.cart>0" color="primary" :content="navStat.cart">
                <h4 class="ml-2 toHide">Cart</h4>
            </v-badge>
            <h4 class="ml-2 toHide" v-else>Cart</h4>
        </v-tab>
        <v-tab @click="$router.push({name: 'orders'}).catch(() => {})">
            <v-icon>mdi-format-list-checks</v-icon>
            <!-- <v-badge color="success" content="13"> -->
                <h4 class="ml-2 toHide">Order</h4>
            <!-- </v-badge> -->
        </v-tab>
        <v-menu offset-y :close-on-content-click="false" v-model="user">
            <template v-slot:activator="{ on, attrs }">
                <v-tab
                v-bind="attrs"
                v-on="on"
                @click="getNotify"
                >
                    <v-icon>mdi-account-circle-outline</v-icon>
                    <v-badge color="error" :content="count" v-if="count>0">
                        <h4 class="ml-2 toHide">Account</h4>
                    </v-badge>
                    <h4 class="ml-2 toHide" v-else>Account</h4>
                    <v-icon small>mdi-chevron-down</v-icon>
                </v-tab>
            </template>
            <v-list width="200">
                <v-list-item @click="$router.push({path: '/profile'}).catch(() => {}), user=false">
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Profile
                    </v-list-item-title>
                </v-list-item>
                <customer-notification
                :notif="notification"
                @menu="user=false"
                @markRead="markRead"
                @markAll="markAll">
                </customer-notification>
                <v-list-item @click="$router.push({path: '/recommendations'}), user=false">
                    <v-list-item-icon>
                        <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Recommendation
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="logout">
                    <v-list-item-icon>
                        <v-icon>mdi-logout-variant</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Logout
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-tab class="hide"></v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3 mb-16">
      <v-container fluid>
        <router-view @event="getStat"></router-view>
      </v-container>
      <v-dialog v-model="cartDialog" max-width="600">
        <cart :event="cartDialog" @cancel="close"></cart>
      </v-dialog>
    </v-main>
    <div class="footer">
        <v-footer
        dark
        padless
        absolute
        >
        <v-card
        width="100%"
            flat
            tile
        >
            <v-card-text class="py-5 text-center">
            2022 - PCGarage
            </v-card-text>
        </v-card>
        </v-footer>
    </div>
  </v-app>
</template>

<script>
import CustomerNotification from '@/components/global/notification/customerNotification.vue'
import Cart from '@/components/customer/cart.vue'
export default {
    components: {
        Cart,
        CustomerNotification
    },
    data: () => ({
        cartDialog: false,
        navStat: {
            cart: 0,
            notification: 0
        },
        notification: [],
        user: false,
        page: 1,
        active: 0,
        count: 0,
        warningDialog: false,
        loading: true,
        links: [
            {
                title: 'Products',
                icon: 'mdi-devices',
                path: 'products'
            },
            {
                title: 'Cart',
                icon: 'mdi-cart',
                path: 'products'
            },
            {
                title: 'Order',
                icon: 'mdi-format-list-checks',
                path: 'products'
            },
            // {
            //     title: 'Account',
            //     icon: 'mdi-account-circle-outline',
            //     path: 'products'
            // },
        ],
    }),
    mounted() {
        // this.getStat()
        // this.getNotify()
        // setTimeout(() => {
        //     this.loading = false
        // }, 600)
    },
    created() {
        this.getStat()
        this.getNotify()
        setTimeout(() => {
            this.loading = false
        }, 600)
    },
    methods: {
        getStat() {
            axios.get(`/customer-api/user/nav-stat`).then(({data})=>{
                this.navStat.cart = data.carts
            })
        },
        getNotify() {
            axios.get(`/customer-api/customer-notification`).then(({data})=>{
                this.notification = data
                let counter = 0
                data.forEach(elem => {
                    if(elem.read_at==null){
                        counter++
                    }
                });
                this.count = counter
            })
        },
        markRead(item) {
            axios.put(`/customer-api/customer-notification/mark-read?id=${item.id}`).then(({data})=>{
                this.close()
            })
        },
        markAll() {
            axios.put(`/customer-api/customer-notification/mark-read?all=true`).then(({data})=>{
                this.close()
            })
        },
        close() {
            this.getStat()
            this.getNotify()
            this.cartDialog = false
            let val = this.$route
            if(val.name=='product'){
                this.active = false
            }else if(val.name=='orders'){
                this.active = 2
            }else if(val.name=='profile'){
                this.active = 3
            }else{
                this.active = 4
            }
        },
        logout(){
            // this.loading = true
            this.user = false
            axios.get(`/admin-api/logout`).then(({data})=>{
                this.isAuth = false
                localStorage.role = 0
                this.$router.push({name:'login'})
            }).finally(()=>{
                // this.loading = false
            })
            localStorage.role = '0'
        },
    },
    watch: { 
        '$route': {
            handler(val){
                if(val.name){
                    if(val.name=='product'){
                        this.active = false
                    }else if(val.name=='orders'){
                        this.active = 2
                    }else if(val.name=='profile'){
                        this.active = 3
                    }else if(val.name=='login'){
                        if(localStorage.role==0){
                        this.$router.push({name: 'login'})
                        }else{
                            this.$router.push({name: 'product'})
                        }
                    }else{
                        this.active = 4
                    }
                }else{
                    if(localStorage.role==0){
                        this.$router.push({name: 'login'})
                    }else{
                        this.$router.push({name: 'product'})
                    }
                }
            },deep: true, immediate: true
        }
    }
}
</script>

<style scoped>
.hide{
    width: 0px !important;
    padding: 0 !important;
    min-width: unset !important;
}
.hide >>> .v-tab:before{
    /* position: absolute; */
    width: 0px !important;
    min-width: unset !important;
}
.product-header{
    width: 600px;
}
.product-header .cat{
    width: 10px !important;
    min-width: unset !important;
}
.item-desc{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
            line-clamp: 2; 
    -webkit-box-orient: vertical;
}

@media screen and (max-width: 800px){
    .toHide{
        display: none !important;
    }
}
</style>