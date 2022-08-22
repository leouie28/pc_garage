<template>
    <div>
        <v-card elevation="0" class="mx-auto" max-width="1000">
            <v-card-title>
                Compatibility Checker
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pt-0">
                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Component
                        </th>
                        <th class="text-left">
                            Item
                        </th>
                        <th class="text-center">
                            Available
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="part in parts">
                            <tr :key="part.component">
                                <td>
                                    <span class="primary--text text-decoration-underline text-uppercase">
                                        {{ part.component }}
                                    </span>
                                    <small class="ml-1" v-if="part.component=='peripherals'||part.component=='gpu/graphics card'">
                                        (optional)
                                    </small>
                                </td>
                                <td>
                                    <v-chip color="secondary" label v-if="part.item" close @click:close="part.item=false">
                                        {{ part.item.name }}
                                    </v-chip>
                                    <v-btn small color="secondary" @click="selectedComponent=part.component, showForm=true" outlined v-else>
                                        {{ part.component }}
                                        <v-icon class="ml-1" small>mdi-plus-circle</v-icon>
                                    </v-btn>
                                </td>
                                <td class="text-center">
                                    <v-icon
                                    v-if="part.item"
                                    :color="part.item.price?'success':'default'"
                                    v-text="part.item.price?'mdi-checkbox-marked-circle-outline':'mdi-cancel'"></v-icon>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="warningForm=true" :disabled="disable">
                    Check Compatibility
                    <v-icon class="ml-2">mdi-checkbox-marked-outline</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-dialog v-model="showForm" persistent max-width="700">
            <compatible-item
            :component="selectedComponent"
            @close="showForm=false, selectedComponent=''"
            @add="addItem"
            ></compatible-item>
        </v-dialog>
        <v-dialog persistent v-model="warningForm" max-width="500">
            <v-card>
                <v-card-title>Warning</v-card-title>
                <v-card-text class="text-center">
                    Are you sure you want to check your build?<br>
                    You have {{count}} selected priority items
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="secondary" @click="warningForm=false">
                        Cancel
                    </v-btn>
                    <v-btn color="success" @click="check">
                        Check build
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog persistent v-model="resForm" max-width="600">
                <v-card>
                    <v-card-title>
                        Compatibility Result
                    </v-card-title>
                    <v-card-text>
                        <template v-if="resLoader">
                            <v-expand-transition>
                                <div class="text-center">
                                    <v-progress-circular
                                    :size="50"
                                    :width="5"
                                    color="success"
                                    indeterminate
                                    ></v-progress-circular>
                                    <br>
                                    <div class="mt-4">Waiting the result...</div>
                                </div>
                            </v-expand-transition>
                        </template>
                        <template v-else>
                        <v-expand-transition>
                            <div class="text-center" v-if="compatible">
                                <v-icon class="success--text" x-large>mdi-checkbox-marked-circle-outline</v-icon>
                                <v-toolbar-title>
                                    Based on our system, your build is Compatible!
                                </v-toolbar-title>
                            </div>
                            <div class="text-center" v-else>
                                <v-icon class="error--text" x-large>mdi-close-circle-outline</v-icon>
                                <v-toolbar-title class="error--text">
                                    Based on our system, your build is not Compatible!
                                </v-toolbar-title>
                            </div>
                        </v-expand-transition>
                        </template>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="secondary" @click="resForm=false" :disabled="resLoader">
                            Close
                        </v-btn>
                    </v-card-actions>
                </v-card>
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
import CompatibleItem from '@/components/customer/compatible-item.vue'
export default {
    components: {
        CompatibleItem,
    },
    data: ()=> ({
        showForm: false,
        warningForm: false,
        checkLoader: true,
        resForm: false,
        resLoader: true,
        count: 0,
        disable: true,
        compatible: false,
        selectedComponent: '',
        parts: [
            {
                component: 'motherboard',
                item: '',
            },
            {
                component: 'cpu/processor',
                item: '',
            },
            {
                component: 'ram/memory',
                item: '',
            },
            {
                component: 'hard drive/storage',
                item: '',
            },
            {
                component: 'power supply',
                item: '',
            },
            {
                component: 'case',
                item: '',
            },
            {
                component: 'monitor',
                item: '',
            },
            {
                component: 'gpu/graphics card',
                item: '',
            },
            {
                component: 'peripherals',
                item: '',
            },
        ],
    }),
    mounted() {
        this.getMainItem()
    },
    methods: {
        getMainItem() {
            let id = this.$route.params.id
            axios.get(`/customer-api/compatibilities/main-item?id=${id}`).then(({ data }) => {
                this.parts.forEach(elem => {
                    if(elem.component==data.categories[0].name){
                        elem.item = data
                    }
                });
            })
        },
        addItem(item) {
            this.parts.forEach(elem => {
                if(elem.component==this.selectedComponent){
                    elem.item = item
                }
            });
        },
        check() {
            this.warningForm = false
            this.resForm = true
            let params = { data: this.parts }
            axios.post(`/customer-api/compatibilities/check-items`, params).then(({ data }) => {
                this.compatible = data
            })
            setTimeout(() => {
                this.resLoader = false
            },4000)
        }
    },
    watch: {
        parts: {
            handler(val) {
                let counter = 0
                val.forEach(elem => {
                    if(elem.item||elem.item!=''){
                        counter++
                    }
                });
                if(counter>1){
                    this.disable = false
                }else{
                    this.disable = true
                }
                this.count = counter
            },immediate:true, deep:true
        }
    }
}
</script>