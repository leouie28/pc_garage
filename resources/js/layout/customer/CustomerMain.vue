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
        <v-tab>
            <v-icon>mdi-devices</v-icon>
            <h4 class="ml-2">Products</h4>
        </v-tab>
        <v-tab>
            <v-icon>mdi-cart</v-icon>
            <v-badge color="primary" content="2">
                <h4 class="ml-2">Cart</h4>
            </v-badge>
        </v-tab>
        <v-tab>
            <v-icon>mdi-format-list-checks</v-icon>
            <v-badge color="success" content="13">
                <h4 class="ml-2">Order</h4>
            </v-badge>
        </v-tab>
        <v-menu offset-y open-on-hover>
            <template v-slot:activator="{ on, attrs }">
                <v-tab
                v-bind="attrs"
                v-on="on"
                >
                    <v-icon>mdi-account-circle-outline</v-icon>
                    <v-badge color="warning" content="3">
                        <h4 class="ml-2">Account</h4>
                    </v-badge>
                    <v-icon small>mdi-chevron-down</v-icon>
                </v-tab>
            </template>
            <v-list width="180">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Profile
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-bell</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                    <v-badge
                    color="warning"
                    content="3"
                    >
                        Notification
                    </v-badge>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-logout-variant</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Logout
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
    data: () => ({
        page: 1,
        active: 0   ,
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
        setTimeout(() => {
            this.loading = false
        }, 1000)
    },
    methods: {

    }
}
</script>

<style scoped>
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
</style>