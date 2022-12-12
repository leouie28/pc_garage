<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="mr-2 text-uppercase primary--text">{{ component }}</span>LIST
                <v-spacer></v-spacer>
                <v-btn color="secondary" @click="$emit('close'), items = []" icon>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <div>
                    <v-text-field
                    dense
                    hide-details=""
                    v-model="key"
                    outlined
                    :placeholder="'Search '+component+'...'"
                    append-icon="mdi-magnify"
                    @click:append="available"
                    @keyup="search"
                    ></v-text-field>
                </div>
                <div>
                    <v-list v-if="items.length>0">
                        <template v-for="item in items">
                            <v-list-item :key="item.id">
                                <v-list-item-avatar tile>
                                    <v-img :src="item.images&&item.images.length>0?'/images/products/' + item.id + '/' + item.images[0].file_name:'/images/default/noimage.png'"
                                    ></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ item.name }}
                                    </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn small color="success" @click="$emit('add', item), $emit('close'), items = []">
                                        Add
                                        <v-icon>mdi-plus</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                            <v-divider :key="item.name"></v-divider>
                        </template>
                    </v-list>
                    <empty v-else></empty>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        items: [],
        key: '',
        timer: null,
        searchWait: false,
    }),
    props: {
        component: {
            type: String,
            default: () => 'Component'
        }
    },
    // created() {
    //     this.available()
    // },
    methods: {
        available() {
            let key = this.component
            if(this.key.length>1)key = key + '&search=' + this.key
            axios.get(`/customer-api/compatibilities/available-item?key=${key}`).then(({ data }) => {
                this.items = data
            })
        },
        search() {
            if(this.key.length>1){

                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    this.available()
                },1000)

                // if(!this.searchWait){
                //     setTimeout(() => {
                //         this.available()
                //     },1000)
                //     this.searchWait = false
                // }
                // this.searchWait = true
            }
        }
    },
    watch: {
        component: {
            handler(val) {
                if(val){
                    this.available()
                }
            },immediate:true, deep:true
        },
        key(val) {
            if(val.length>1) {
                this.search()
            }else {
                this.available()
            }
        }
    }
}
</script>