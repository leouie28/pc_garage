<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="blue-grey "
      flat
      dark
    >
      <v-tabs
        v-model="active"
        centered
        dark
        hide-slider
      >
        <v-tab @click="$router.push({path: '/'}).catch(() => {})">
            <v-icon>mdi-devices</v-icon>
            <h4 class="ml-2 tohide">Products</h4>
        </v-tab>
        <v-tab
          v-for="link in links"
          :key="link.title"
          @click="warningDialog = true"
        >
            <v-icon>{{ link.icon }}</v-icon>
            <h4 class="ml-2 tohide">{{ link.title }}</h4>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3 mb-16">
      <v-container fluid>
        <Item></Item>
      </v-container>
      <div>
        <v-dialog
        v-model="warningDialog"
        persistent
        max-width="500"
        >
        <v-card>
            <v-card-title class="text-h5">
            Please login first!
            <v-spacer></v-spacer>
            <v-btn
            small
            elevation="0"
            color="secondary"
            @click=" warningDialog = false, active = 0"
            fab>
                <v-icon>mdi-close</v-icon>
            </v-btn>
            </v-card-title>
            <v-card-text>
                <!-- You are not currently logged in to our system. Please login first to access this page.. -->
                <v-alert
                text
                class="mb-0"
                prominent
                type="warning"
                icon="mdi-cloud-alert"
                >
                    You are not currently logged in to our system. Please login first to access this page..
                </v-alert>
            </v-card-text>
            <v-card-actions class="mr-3 pb-4">
            <v-spacer></v-spacer>
            <v-btn
                color="success"
                link
                href="/register"
            >
                Register
            </v-btn>
            <v-btn
                color="primary"
                link
                href="/login"
            >
                Login
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
      </div>
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
import Item from './item-compatibility.vue'
export default {
    components: {
        Item
    },
    data: () => ({
        page: 1,
        active: 10,
        warningDialog: false,
        loading: true,
        links: [
            // {
            //     title: 'Products',
            //     icon: 'mdi-devices',
            //     path: 'products'
            // },
            {
                title: 'Cart',
                icon: 'mdi-cart',
                path: 'products'
            },
            {
                title: 'Order',
                icon: 'mdi-shopping',
                path: 'products'
            },
            {
                title: 'Account',
                icon: 'mdi-account-circle',
                path: 'products'
            },
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