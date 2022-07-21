<template>
    <div>
       <v-card>
            <v-card-title>
            <span class="text-h5">Order Info</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-select
                        :items="products"
                        item-value="id"
                        v-model="raw"
                        filled
                        hide-details="auto"
                        label="Product"
                        item-disabled="disabledProduct"
                        dense
                        >
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
                        </v-select>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-text-field
                            filled
                            v-model="payload.arrival"
                            label="Arrival"
                            prepend-inner-icon="mdi-calendar"
                            readonly
                            hide-details=""
                            @click.stop="datePicker = true"
                        ></v-text-field>
                    </v-col>
                    <v-dialog
                    v-model="datePicker"
                    persistent
                    max-width="300"
                    >
                        <v-date-picker
                        v-model="payload.arrival"
                        scrollable
                        :min="now"
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="datePicker = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="datePicker=false"
                        >
                            OK
                        </v-btn>
                        </v-date-picker>
                    </v-dialog>
                    <v-col md="6" cols="12">
                        <v-select
                        label="Status*"
                        :items="status"
                        item-text="text"
                        item-value="id"
                        dense
                        v-model="payload.status"
                        filled
                        hide-details="auto"
                        required
                        ></v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea
                            filled
                            v-model="payload.note"
                            label="Note"
                            hide-details=""
                        ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                        <v-select
                        v-model="payload.customer"
                        :items="customers"
                        filled
                        item-value="id"
                        item-text="first_name"
                        item-disabled="disable"
                        hide-details="auto"
                        label="Customer"
                        dense
                        >
                            <!-- <template v-slot:selection="{ item }">
                                {{item.first_name}} {{item.last_name}}
                            </template>
                            <template v-slot:item="{ item }">
                                {{item.first_name}} {{item.last_name}}
                            </template> -->
                        </v-select>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-text-field
                        label="Total*"
                        readonly
                        dense
                        type="number"
                        filled
                        hide-details=""
                        v-model="payload.total"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-text-field
                        label="Quantity*"
                        dense
                        v-model="qty"
                        type="number"
                        filled
                        min="1"
                        :max="mx"
                        hide-details=""
                        required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="end">
                    <v-btn
                        color="secondary"
                        @click="$emit('cancel')"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        class="mx-2"
                        color="success"
                        @click="save"
                    >
                        Save
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
        raw: '',
        mx: '',
        qty: 1,
        itemPrice: '',
        now: new Date().toISOString().slice(0, 10),
        img: null,
        products: [],
        datePicker: false,
        customers: [],
        status: [
            {id: 0, text: 'Cancel' },
            {id: 1, text: 'Pending' },
            {id: 2, text: 'Confirm' },
            {id: 3, text: 'On Delivery' },
            {id: 4, text: 'Delivered' },
        ],
        payload: {
            product: '',
            arrival: new Date().toISOString().slice(0, 7),
            status: 1,
            note: '',
            customer: '',
            quantity: 1,
            total: '',
        }
    }),
    props: {
        // formDialog: {}
    },
    created() {
        this.getProduct()
        this.getCustomer()
    },
    methods: {
        compute(val) {
            let price = ''
            this.products.forEach(elem => {
                if(elem.id==val){
                    price = elem.price
                    this.itemPrice = price
                }
            });
            this.payload.total = price * this.payload.quantity
        },
        getProduct() {
            axios.get(`/admin-api/product`).then(({data})=>{
                this.products = data.data
            })
        },
        getCustomer() {
            axios.get(`/admin-api/customer`).then(({data})=>{
                this.customers = data.data
            })
            this.customers.forEach(elem => {
                this.customers.push
            });
        },
        save() {
            this.$emit('save', this.payload)
            // console.log(this.payload)
        },
    },
    watch: {
        raw(val){
            this.payload.product = val
            this.qty = 1
            this.products.forEach(elem => {
                if(elem.id==val){
                    this.mx = elem.stocks
                }
            });
            this.compute(val)
        },
        qty(val){
            this.payload.quantity = val
            this.payload.total = val * this.itemPrice
        }
    }
}
</script>