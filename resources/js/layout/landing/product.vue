<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="blue-grey "
      flat
      dark
    >
      <v-tabs
        centered
        dark
        class="ml-n9"
      >
        <v-tab>
            <v-icon>mdi-devices</v-icon>
            <h4>Products</h4>
        </v-tab>
        <v-tab
          v-for="link in links"
          :key="link.title"
          @click="warningDialog = true"
        >
            <v-icon>{{ link.icon }}</v-icon>
            <h4 class="ml-2">{{ link.title }}</h4>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
            <v-col
            cols="12"
            class="mx-auto"
            sm="10"
            >
                <v-card elevation="0">
                    <v-card-title>
                        <div>
                            <div class="d-flex product-header">
                                <v-text-field
                                class="mr-1"
                                clearable
                                placeholder="Search..."
                                append-icon="mdi-magnify"
                                hide-details=""
                                outlined
                                dense
                                ></v-text-field>
                                <v-select
                                class="cat"
                                prepend-inner-icon="mdi-filter"
                                placeholder="Category"
                                hide-details=""
                                outlined
                                dense
                                ></v-select>
                            </div>
                        </div>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <div v-if="loading" class="d-flex flex-wrap justify-center">
                            <v-skeleton-loader
                            class="mr-4 mb-4"
                            v-for="n in 12"
                            width="300"
                            :key="n"
                            type="image, article, list-item-two-line"
                            ></v-skeleton-loader>
                        </div>
                        <div v-else class="d-flex flex-wrap justify-center">
                            <v-card
                            v-for="n in 10"
                            :key="n"
                            class="mr-4 mb-4"
                            max-width="300"
                            >
                                <v-img
                                height="250"
                                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                ></v-img>
                                <v-card-title class="pb-3">
                                    Cafe Badilico
                                </v-card-title>
                                <v-card-text>
                                    <div class="text-h6 text--primary">
                                        &#8369; 43
                                    </div>
                                    <div class="item-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </v-card-text>
                                <v-divider class="mx-2"></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                    color="primary"
                                    >
                                        Cart
                                        <v-icon>mdi-cart-outline</v-icon>
                                    </v-btn>
                                    <v-btn
                                    color="success"
                                    >
                                        Buy
                                        <v-icon>mdi-currency-php</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <div class="text-cente mx-auto">
                            <v-pagination
                            v-model="page"
                            :length="1"
                            ></v-pagination>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
      <div>
        <v-dialog
        v-model="warningDialog"
        persistent
        max-width="290"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            >
            Open Dialog
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5">
            Use Google's location service?
            </v-card-title>
            <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
                Disagree
            </v-btn>
            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
                Agree
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
    data: () => ({
        page: 1,
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
                icon: 'mdi-format-list-checks',
                path: 'products'
            },
            {
                title: 'Profile',
                icon: 'mdi-account-circle-outline',
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