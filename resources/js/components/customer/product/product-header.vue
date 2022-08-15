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
                    @click:append="searchItem"
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
                        <div v-if="items.length>0">
                            <template v-for="item in items">
                                <v-list-item :key="item.id" @click=" item.id>=1 ? $router.push({path: 'product/'+item.id}) : false">
                                    <v-list-item-avatar tile v-if="item.id!=0">
                                        <v-img
                                        :src="item.images.length?'/images/products/' + item.id + '/' + item.images[0].file_name:'/images/default/noimage.png'"
                                        ></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                                        <!-- <v-list-item-subtitle></v-list-item-subtitle> -->
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </div>
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
            @change="filter"
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
            if(this.search.length>0||this.search){
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
            }else{
                this.items = []
            }
        },
        getCategory() {
            axios.get(`/customer-api/categories`).then(({ data }) => {
                this.category = data.data
                this.category.push({id:0, name: 'All Category'})
            });
        },
        filter() {
            this.$emit('filter', this.catSelected)
        }
    },
    watch: {
        search(val) {
            if(val.length<=0){
                this.items = []
            }
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