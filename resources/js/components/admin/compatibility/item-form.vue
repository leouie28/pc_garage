<template>
    <div>
       <v-card>
            <v-card-title>
            <span class="text-h5">Compatibility Item Info</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                    <v-col md="12" cols="12">
                         <v-combobox
                        label="Component Type*"
                        dense
                        :items="part"
                        v-model="payload.type"
                        filled
                        hide-details=""
                        :rules="required"
                        ></v-combobox>
                    </v-col>
                    <v-col md="12" cols="12">
                        <v-menu offset-y tile>
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                label="Item/Product Name*"
                                dense
                                @keyup="searchItem"
                                v-model="payload.name"
                                placeholder="Item/Product Name"
                                filled
                                hide-details=""
                                v-on="on"
                                :rules="required"
                                ></v-text-field>
                            </template>
                            <v-list v-if="items.length>0">
                                <v-list-item
                                v-for="item in items" :key="item.id"
                                @click="payload.id = item.id, payload.name = item.name">
                                    <v-list-item-title>
                                        {{ item.name }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                    <v-col md="12" cols="12" v-if="!payload.id||payload.id==''">
                         <v-textarea
                        label="Description*"
                        dense
                        placeholder="Item description.."
                        filled
                        v-model="payload.description"
                        hide-details=""
                        :rules="required"
                        required
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-row justify="end">
                    <v-btn
                        color="secondary"
                        @click="close"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        class="mx-2"
                        color="success"
                        @click="save"
                    >
                        Add Item
                    </v-btn>
                </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [],
        payload: {
            id: '',
            type: '',
            name: '',
            description: ''
        },
        original: {
            id: '',
            type: '',
            name: '',
            description: ''
        },
        typeWaiting: false,
        part: [
            'motherboard',
            'cpu/processor',
            'ram/memory',
            'hard drive/storage',
            'power supply',
            'gpu/graphics card',
            'case',
            'monitor',
            'peripherals',
        ],
        required: [
                v => !!v || 'This field is required!',
            ],
    }),
    props: {
        type: ''
    },
    created() {
        this.searchItem
    },
    methods: {
        close() {
            this.$emit('close')
            this.payload = JSON.parse(JSON.stringify(this.original))
            // this.payload = JSON.parse(JSON.stringify(this.newPayload))
        },
        searchItem() {
            this.payload.id = ''
            if(this.payload.name.length<1||this.payload.name){
                if(!this.typeWaiting){
                    setTimeout(() => {
                        let key = this.payload.name
                        axios.get(`/admin-api/compatibility/search-item?key=${key}`).then(({ data }) => {
                            this.items = data
                        })
                        this.typeWaiting = false
                    },800)
                }
                this.typeWaiting = true
            }
        },
        save() {
            if(!this.payload.name && !this.payload.type){
                alert('Important field need to fillup...')
            }else{
                this.$emit('save', this.payload)
                this.payload = JSON.parse(JSON.stringify(this.original))
                // console.log(this.payload)
            }
        },
    },
    watch: {
        type: {
            handler(val) {
                if(val) {
                    this.payload.type = val
                }
            },
            deep: true,
            immediate: true,
        },
    }
}
</script>