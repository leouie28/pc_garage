<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="mr-2 text-uppercase primary--text">{{ component }}</span>Compatible List
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
                    outlined
                    :placeholder="'Search '+component+'...'"
                    append-icon="mdi-magnify"
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
        items: []
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
            axios.get(`/customer-api/compatibilities/available-item?key=${key}`).then(({ data }) => {
                this.items = data
            })
        }
    },
    watch: {
        component: {
            handler(val) {
                if(val){
                    this.available()
                }
            },immediate:true, deep:true
        }
    }
}
</script>