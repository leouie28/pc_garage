<template>
    <div>
        <div class="d-flex product-header">
            <v-menu offset-y tile>
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                class="mr-1"
                v-model="search"
                placeholder="Search..."
                append-icon="mdi-magnify"
                hide-details=""
                outlined
                dense
                @keyup="searchItem"
                v-bind="attrs"
                v-on="on"
                >
                </v-text-field>
            </template>
            <v-list>
                <v-progress-linear
                    :active="loading"
                    :indeterminate="loading"
                    absolute
                    top
                    color="primary"
                ></v-progress-linear>
                <v-list-item v-if="loading">
                    <v-list-item-title>
                        <span class="grey--text">Search...</span>
                    </v-list-item-title>
                </v-list-item>
                <div v-else>
                    <v-list-item v-if="items.length">
                        <v-list-item-title>
                            <span class="grey--text">Item</span>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item v-else>
                        <v-list-item-title>
                            <span class="grey--text">Product name or brand name...</span>
                        </v-list-item-title>
                    </v-list-item>
                </div>
            </v-list>
            </v-menu>
            <!-- <v-text-field
            class="mr-1"
            clearable
            placeholder="Search..."
            append-icon="mdi-magnify"
            hide-details=""
            outlined
            dense
            ></v-text-field> -->
            <v-select
            class="cat"
            v-model="catSelected"
            :items="category"
            item-text="name"
            item-value="id"
            prepend-inner-icon="mdi-filter"
            placeholder="Category"
            hide-details=""
            outlined
            dense
            ></v-select>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        loading: false,
        search: '',
        searchWait: false,
        items: [],
        category: [],
        catSelected: 0,
    }),
    created() {
        this.getCategory()
    },
    methods: {
        searchItem() {
            setTimeout(() => {
                this.loading = true
            },500)
            if(!this.searchWait){
                setTimeout(() => {
                    axios.get(`/customer-api/products/search?key=${this.search}`).then(({ data }) => {
                        this.items = data
                    });
                    this.loading = false
                    this.searchWait = false
                },2500)
            }
            this.searchWait = true
        },
        getCategory() {
            axios.get(`/customer-api/categories`).then(({ data }) => {
                this.category = data.data
                this.category.push({id:0, name: 'All Category'})
            });
        }
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
</style>