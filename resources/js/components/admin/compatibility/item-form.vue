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
                        <v-autocomplete
                        ref="type"
                        label="Component Type*"
                        dense
                        :items="part"
                        v-model="payload.type"
                        filled
                        hide-details=""
                        :rules="required">
                        </v-autocomplete>
                    </v-col>
                    <v-col md="12" cols="12">
                        <v-radio-group
                        class="py-0 my-0"
                        row
                        v-model="payload.onSystem"
                        hide-details=""
                        dense
                        >
                        <v-radio
                            label="On our system"
                            value="1"
                        ></v-radio>
                        <v-radio
                            label="Out of the system"
                            value="0"
                        ></v-radio>
                        </v-radio-group>
                    </v-col>
                    <v-col md="12" cols="12">
                        <v-autocomplete
                        v-if="payload.onSystem=='1'"
                        label="Item/Product Name*"
                        dense
                        :items="items"
                        item-value="id"
                        item-text="name"
                        v-model="payload.id"
                        filled
                        hide-details=""
                        :rules="required">
                            <template v-slot:selection="{ item }">
                                <v-avatar size="35" tile style="border: 1px solid #ccc;">
                                    <img :src="item.images.length>0?'/images/products/'+item.id+'/'+item.images[0].file_name:'/images/default/noimage.png'">
                                </v-avatar>
                                <span class="pa-2">{{ item.name }}</span>
                            </template>
                            <template v-slot:item="{ item }">
                                <v-avatar size="35" tile style="border: 1px solid #ccc;">
                                    <img :src="item.images.length>0?'/images/products/'+item.id+'/'+item.images[0].file_name:'/images/default/noimage.png'">
                                </v-avatar>
                                <span class="pa-2">{{ item.name }}</span>
                            </template>
                        </v-autocomplete>
                        <v-text-field
                        v-if="payload.onSystem=='0'"
                        label="Item/Product Name*"
                        dense
                        v-model="payload.name"
                        filled
                        hide-details=""
                        :rules="required"
                        ></v-text-field>
                        <!-- <v-menu offset-y tile>
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
                        </v-menu> -->
                    </v-col>
                    <v-expand-transition>
                    <v-col md="12" cols="12" v-if="payload.onSystem=='0'">
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
                    </v-expand-transition>
                </v-row>
                <v-row justify="end">
                    <v-btn
                        text
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
            onSystem: '1',
            name: '',
            description: ''
        },
        original: {
            id: '',
            type: '',
            onSystem: '1',
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
        validateComponent() {
            if(!this.payload.type||this.payload.type==''){
                alert('Please fillup first the "Component Type field"')
            }
        },
        save() {
            if(this.payload.onSystem=='1'){
                if(!this.payload.id && !this.payload.type){
                    alert('Important field need to fillup...')
                }else{
                    this.$emit('save', this.payload)
                    this.payload = JSON.parse(JSON.stringify(this.original))
                    // console.log(this.payload)
                }
            }else{
                if(!this.payload.name && !this.payload.type){
                    alert('Important field need to fillup...')
                }else{
                    this.$emit('save', this.payload)
                    this.payload = JSON.parse(JSON.stringify(this.original))
                    // console.log(this.payload)
                }
            }
        },
        getByType() {
            let key = this.payload.type
            axios.get(`/admin-api/compatibility/search-item?type=${key}`).then(({ data }) => {
                this.items = data
            })
        }
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
        'payload.type': {
            handler(val) {
                if(val){
                    this.getByType()
                }
            },immediate:true,deep:true
        },
        'payload.onSystem': {
            handler(val) {
                if(val){
                    this.payload.name = ''
                }
            },immediate:true,deep:true
        }
    }
}
</script>