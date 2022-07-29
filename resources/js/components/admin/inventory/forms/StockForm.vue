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
                        v-model="payload.product"
                        filled
                        hide-details=""
                        :rules="required"
                        ></v-autocomplete>
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
            product: '',
            stock: '',
        }
    }),
    props: {
        selectedItem: {
            type: Object,
            default: () => {},
        }
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
            if(!this.payload.date || !this.payload.sales || !this.payload.order_count){
                alert('Important field are required!')
            }else{
                if(this.isEdit){
                    this.$emit('update', this.payload)
                }else{
                    this.$emit('save', this.payload)
                }
                this.isEdit = false
                this.payload = JSON.parse(JSON.stringify(this.newPayload))
                // console.log(this.payload)
            }
        },
    },
    watch: {
        selectedItem: {
            handler(val) {
                if(Object.keys(val).length===0){
                    this.isEdit = false
                    return
                }
                this.payload = JSON.parse(JSON.stringify(val))
                this.isEdit = true
            },
            deep: true,
            immediate: true,
        },
    }
}
</script>