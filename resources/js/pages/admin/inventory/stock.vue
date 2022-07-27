<template>
    <div>
        <v-subheader><h1>Inventory</h1></v-subheader>
        <v-card elevation="0" class="pa-2" >
            <v-tabs
            v-model="active_tab"
            align-with-title
            >
                <v-tabs-slider color="primary"></v-tabs-slider>

                <v-tab
                    v-for="item in tabs"
                    :key="item.name"
                    @click="$router.push({name: item.link}).catch(() => {})"
                >
                    <v-icon>{{ item.icon }}</v-icon>
                    <h4 class="ml-2">{{ item.name }}</h4>
                </v-tab>
            </v-tabs>
        </v-card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tab: null,
            active_tab: 1,
            tabs: [
                {
                    name: 'Reports',
                    icon: 'mdi-finance',
                    link: 'admin-inventory-report'
                },
                {
                    name: 'Stocks',
                    icon: 'mdi-package-variant',
                    link: 'admin-inventory-stock'
                },
                {
                    name: 'Product',
                    icon: 'mdi-desktop-classic',
                    link: 'admin-inventory-report'
                },
                {
                    name: 'Orders',
                    icon: 'mdi-format-list-checks',
                    link: 'admin-inventory-report'
                },
                {
                    name: 'Customers',
                    icon: 'mdi-account-group',
                    link: 'admin-inventory-report'
                },
            ],
        }
    },
}
</script>