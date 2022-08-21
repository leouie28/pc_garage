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
                <v-btn color="secondary" class="ml-2"
                @click="$router.go(-1)">
                    <v-icon class="mr-2">mdi-backspace</v-icon>
                    Back
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
                        <div v-if="set.isEmpty>0">
                            <template v-for="(value, key) in set.items">
                                <v-card :key="key" class="mb-3" v-if="value.length>0">
                                    <!-- <v-card-title class="text-uppercase">
                                        <v-icon class="mr-2">mdi-monitor-cellphone-star</v-icon>
                                        {{ key }}
                                        <v-spacer></v-spacer>
                                        <v-btn icon color="success" @click="showForm=true, type=key">
                                            <v-icon>
                                                mdi-plus-circle
                                            </v-icon>
                                        </v-btn>
                                    </v-card-title> -->
                                    <v-card-text>
                                        <v-subheader>
                                            <v-icon class="mr-2">mdi-devices</v-icon>
                                            <span class="text-h6 text-capitalize">{{ key }}</span>
                                            <v-spacer></v-spacer>
                                            <v-btn icon color="success" @click="showForm=true, type=key">
                                                <v-icon>
                                                    mdi-plus-circle
                                                </v-icon>
                                            </v-btn>
                                        </v-subheader>
                                        <v-chip-group column v-if="value.length>0">
                                            <template v-for="item in value">
                                                <v-chip :key="item.id" v-if="item.name" close label @click:close="removeItem(item, key)">
                                                    {{ item.name }}
                                                </v-chip>
                                            </template>
                                        </v-chip-group>
                                        <v-subheader v-else class="d-flex justify-center">No data...</v-subheader>
                                    </v-card-text>
                                </v-card>
                            </template>
                        </div>
                        <empty v-else></empty>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-dialog persistent v-model="showForm" max-width="500">
            <item-form @close="showForm = false" :type="type" @save="save"></item-form>
        </v-dialog>
        <v-snackbar
        v-model="alert.trigger"
        multi-line
        elevation="12"
        :color="alert.color"
        transition="scroll-x-reverse-transition"
        top
        right>
        <div class="d-flex justify-space-between">
            <div class="mr-2">
            <v-icon large>info</v-icon>
            {{ alert.text }}
            </div>
            <v-btn @click="alert.trigger = false">
            Close
            </v-btn>
        </div>
        </v-snackbar>
    </div>
</template>
<script>
import ItemForm from '@/components/admin/compatibility/item-form.vue'
export default {
    components: {
        ItemForm
    },
    data: () => ({
        type: '',
        showForm: false,
        set: {
            data: {
                name: '',
                description: ''
            },
            items: [],
            isEmpty: 1
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
        save(payload) {
            payload['set_id'] = this.$route.params.id
            this.showForm = false
            axios.post(`/admin-api/compatibility/add-item`, payload).then(({ data }) => {
                this.newAlert(true, data.type, data.message)
                this.type = ''
                this.setItem()
            })
        },
        removeItem(val, key) {
            console.log(val, key)
            let data = {set_id: this.set.data.id, item: val, item_key: key}
            axios.post(`/admin-api/compatibility/remove-item`, data).then(({ data }) => {
                this.newAlert(true, data.type, data.message)
            })
        }
    }
}
</script>