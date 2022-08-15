<template>
    <div>
        <v-card elevation="0">
            <v-card-title>
                Compatibility Profile
                <v-spacer></v-spacer>
                <v-btn color="success" @click="showForm = true" outlined>
                    Add Item
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col md="4" cols="12">
                        <v-col md="12" cols="12">
                            <v-text-field
                            dense
                            outlined
                            v-model="set.data.name"
                            readonly
                            :value="'Test Set'"
                            hide-details=""
                            label="Set Name"
                            ></v-text-field>
                        </v-col>
                        <v-col md="12" cols="12">
                            <v-textarea
                            dense
                            outlined
                            v-model="set.data.description"
                            readonly
                            :value="'Lorem ipsum'"
                            hide-details=""
                            label="Description"
                            ></v-textarea>
                        </v-col>
                    </v-col>
                    <v-col md="8" cols="12" style="border-left: 1px solid #BDBDBD;">
                        <div v-if="set.items.length>0">
                            <v-card>
                                <v-card-title>
                                    <v-icon class="mr-2">mdi-monitor-cellphone-star</v-icon>
                                    Proccessor
                                </v-card-title>
                                <v-card-text>
                                    
                                </v-card-text>
                            </v-card>
                        </div>
                        <empty v-else></empty>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-dialog persistent v-model="showForm" max-width="500">
            <item-form @close="showForm = false" @save="save"></item-form>
        </v-dialog>
    </div>
</template>
<script>
import ItemForm from '@/components/admin/compatibility/item-form.vue'
export default {
    components: {
        ItemForm
    },
    data: () => ({
        showForm: false,
        set: {
            data: {
                name: '',
                description: ''
            },
            items: []
        }
    }),
    mounted() {
        this.setItem()
    },
    methods: {
        setItem() {
            let id = this.$route.params.id
            axios.get(`/admin-api/compatibility/${id}`).then(({ data }) => {
                this.set = data
            })
        },
        save() {
            
        }
    }
}
</script>