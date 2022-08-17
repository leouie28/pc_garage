<template>
    <div>
        <!-- <v-alert
        class="mx-auto"
        max-width="1000"
        outlined
        color="warning"
        icon="mdi-alert-circle-outline"
        text
        >

        </v-alert> -->
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
                                        <v-icon class="mr-1">mdi-plus</v-icon>
                                        {{ part.component }}
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
                <v-btn color="success">
                    Check Compatibility
                    <v-icon class="ml-2">mdi-checkbox-marked-outline</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-dialog v-model="showForm" persistent max-width="700">
            <compatible-item :component="selectedComponent" @close="showForm=false, selectedComponent=''"></compatible-item>
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

    },
    watch: {
        parts: {
            handler(val) {
                console.log(val)
            }
        },immediate:true, deep:true
    }
}
</script>