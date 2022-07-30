<template>
    <div>
       <v-card>
            <v-card-title>
            <span class="text-h5">Sku Product</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                    <v-col md="12" cols="12">
                         <v-autocomplete
                        label="Product*"
                        :items="products"
                        item-text="name"
                        item-value="id"
                        dense
                        v-model="payload.product_id"
                        filled
                        hide-details=""
                        clearable
                        :item-disabled="disableItem"
                        :rules="required">
                            <template v-slot:selection="{ item }">
                                <v-avatar size="35" style="border: 1px solid #ccc;">
                                    <img v-if="item.images.length>0" :src="'/images/products/'+item.id+'/'+item.images[0].file_name">
                                    <v-icon v-else>mdi-camera</v-icon>
                                </v-avatar>
                                <span class="pa-2">{{ item.name }}</span>
                            </template>
                            <template v-slot:item="{ item }">
                                <v-avatar size="35" style="border: 1px solid #ccc;">
                                    <img v-if="item.images.length>0" :src="'/images/products/'+item.id+'/'+item.images[0].file_name">
                                    <v-icon v-else>mdi-camera</v-icon>
                                </v-avatar>
                                <span class="pa-2">{{ item.name }}</span>
                            </template>
                        </v-autocomplete>
                    </v-col>
                    <v-col md="12" cols="12">
                        <v-text-field
                        label="Stocks*"
                        dense
                        v-model="payload.stock"
                        filled
                        type="number"
                        hide-details=""
                        :rules="required"
                        ></v-text-field>
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
                        Create
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
        // dialog: false
        isEdit: false,
        newPayload: {},
        products: [],
        required: [
            v => !!v || 'This field is required!',
        ],
        payload: {
            sku: '',
            product_id: '',
            stock: '',
        }
    }),
    props: {
        profile: {}
        // formDialog: {}
    },
    created() {
        this.getProduct()
    },
    methods: {
        close() {
            this.isEdit = false
            this.$emit('cancel')
            this.payload = JSON.parse(JSON.stringify(this.newPayload))
        },
        getProduct() {
            axios.get(`/admin-api/product`).then(({data})=>{
                this.products = data.data
            })
        },
        save() {
            if(!this.payload.product_id || !this.payload.stock){
                alert('Important field are required!')
            }else{
                this.$emit('save', this.payload)
                this.isEdit = false
                this.payload = JSON.parse(JSON.stringify(this.newPayload))
                // console.log(this.payload)
            }
        },
        disableItem(item) {
            if(this.profile.products.includes(item.id)){
                return true
            }
        }
    },
    watch: {
        profile: {
            handler(val) {
                if(Object.keys(val).length===0){
                    this.isEdit = false
                    return
                }
                this.payload.sku = val.sku
                // this.payload = JSON.parse(JSON.stringify(val))
                // this.isEdit = true
            },
            deep: true,
            immediate: true,
        },
    }
}
</script>