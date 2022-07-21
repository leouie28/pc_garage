<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="text-h5">{{ selectedItem.name }} Stocks</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <div v-if="sku.length>0">
                    <v-row
                    v-for="skus in sku"
                    :key="skus.id"
                    class="mb-3">
                        <v-col sm="7" cols="12" class="py-0 px-1">
                            <v-sheet
                            rounded=""
                            elevation="2">
                                <v-subheader class="d-flex justify-space-between">
                                    <h4>SKU: <span class="blue--text">{{ skus.sku }}</span></h4>
                                    <h4>Current Stocks: <span class="blue--text">{{ skus.stocks }}</span></h4>
                                </v-subheader>
                            </v-sheet>
                        </v-col>
                        <v-col sm="5" cols="12" class="py-0 px-1">
                            <v-text-field
                            placeholder="Stocks"
                            v-model="stocks[skus.id]"
                            hide-details=""
                            append-icon="mdi-plus"
                            type="number"
                            min="1"
                            @click:append="updateSku(skus.id)"
                            solo>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </div>
                <v-row v-if="isNew">
                    <v-col class="px-1">
                        <v-text-field
                        v-model="skuPayload.sku"
                        placeholder="New Stock keeping unit"
                        hide-details=""
                        append-icon="mdi-plus"
                        @click:append="addSku"
                        solo>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row v-if="!isNew">
                    <v-col class="px-1">
                        <v-btn
                        block
                        color="primary"
                        @click="isNew = true"
                        large>
                            Add new
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row justify="end" class="pb-2">
                    <v-btn
                        color="secondary"
                        class="mr-1"
                        @click="$emit('cancel')"
                    >
                        Close
                    </v-btn>
                </v-row>
            </v-card-text>
        </v-card>
        <v-snackbar
        style="z-index:100;"
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
export default {
    data: () => ({
        isNew: false,
        stocks: [],
        sku: [],
        skuPayload: {
            product_id: '',
            id: '',
            sku: '',
            stocks: ''
        }
    }),
    props: {
        selectedItem: {}
    },
    methods: {
        getProducSku(id) {
            this.stocks = []
            axios.get(`/admin-api/stock/sku?&product=${id}`).then(({ data }) => {
                this.sku = data
                data.forEach(elem => {
                    this.stocks[elem.id] = ''
                });
            })
            console.log(this.stocks)
        },
        addSku() {
            axios.post(`/admin-api/stock`, this.skuPayload).then(({ data }) => {
                this.getProducSku(this.skuPayload.product_id)
                if(data.type!='error'){
                    this.skuPayload.sku = null
                }
                this.newAlert(true, data.type, data.message)
            })
        },
        updateSku(val){
            let stock = this.stocks[val]
            axios.put(`/admin-api/stock/update-sku/${val}?&stocks=${stock}`).then(({ data }) => {
                this.getProducSku(this.skuPayload.product_id)
                if(data.type!='error'){
                    this.stocks[val] = ''
                }
                this.newAlert(true, data.type, data.message)
            })
        }
    },
    watch: {
        selectedItem:{
            handler(val){
                if(Object.keys(val).length===0){
                    this.isEdit = false
                    return
                }
                this.skuPayload.product_id = val.id
                this.getProducSku(val.id)
            },
            deep: true,
            immediate:true
        }
    }
}
</script>