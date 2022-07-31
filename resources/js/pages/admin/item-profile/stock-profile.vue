<template>
    <div>
        <v-card elevation="0"  class="pa-2">
            <v-card-title>
                Sku Info
                <v-spacer></v-spacer>
                <v-btn color="secondary"
                @click="$router.go(-1)">
                    <v-icon class="mr-2">mdi-backspace</v-icon>
                    Back
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col md="4" cols="12">
                        <v-card elevation="0">
                            <v-card-text>
                                <div class="d-flex justify-space-between">
                                    <div>
                                        <h4>Sku Code:</h4>
                                        <p class="text-h4 text--primary">
                                            {{ sku.sku_code }}
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Date Created:</h4>
                                        <span class="font-italic text-h6 text--primary">
                                            {{ moment(sku.created_at).format('MMM Do, YY') }}
                                        </span>
                                    </div>
                                </div>
                                <h4>Name/Supplier:</h4>
                                <div class="mb-4">
                                    <p class="text-h5 text--primary">
                                        {{ sku.name }}
                                    </p>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col md="8" cols="12" class="cus-border">
                        <v-card class="mb-4" elevation="0">
                            <v-card-title class="pb-0">
                                Sku Products
                                <v-spacer></v-spacer>
                                <v-btn
                                color="success"
                                @click="addNew"
                                small>
                                    Add
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-text class="px-0">
                                <v-data-table
                                :headers="headers"
                                :items="sku.products"
                                :loading="isLoading"
                                loading-text="Fetching data..."
                                hide-default-footer
                                class="px-2">
                                <template v-slot:[`item.add`]="{ item }">
                                    <v-text-field
                                    class="mx-auto"
                                    style="width:100px;"
                                    placeholder="Add"
                                    outlined
                                    type="number"
                                    append-icon="mdi-plus"
                                    min="1"
                                    dense
                                    v-model="stocks[item.id]"
                                    @click:append="addStocks(item)"
                                    hide-details=""
                                    ></v-text-field>
                                </template>
                                <template v-slot:[`item.action`]="{ item }">
                                    <!-- <v-btn
                                        class="pa-2"
                                        small
                                        elevation="0"
                                        color="secondary"
                                        @click="editItem(item)"
                                    >
                                        <v-icon small>mdi-plus-circle</v-icon>
                                    </v-btn> -->
                                    <v-btn
                                        class="pa-2"
                                        small
                                        elevation="0"
                                        color="error"
                                        @click="warning(item)"
                                    >
                                        <v-icon small>mdi-trash-can</v-icon>
                                    </v-btn>
                                </template>
                                <template v-slot:no-data>
                                    <div>No Data</div>
                                </template>
                                </v-data-table>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-dialog v-model="showForm" persistent max-width="500">
            <stock-form :profile="profile" @cancel="close" @save="save"> </stock-form>
        </v-dialog>
        <v-dialog v-model="deleteForm" persistent width="500">
            <delete-dialog :data="item" @close="close" @confirm="confirm"></delete-dialog>
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
import DeleteDialog from '@/components/deleteDialog.vue'
import StockForm from '@/components/admin/inventory/forms/StockForm.vue'
export default {
    components: {
        DeleteDialog,
        StockForm
    },
    data: () => ({
        sku: {
            products: []
        },
        profile: {
            sku: '',
            products: []
        },
        item: {},
        stocks: [],
        isLoading: true,
        selectedItem: '',
        showForm: false,
        deleteForm: false,
        headers: [
            {
                text: 'Product',
                align: 'start',
                value: 'product.name',
            },
            {
                text: 'Current Stocks',
                align: 'center',
                value: 'stocks',
            },
            {
                text: 'Add Stocks',
                align: 'center',
                value: 'add',
            },
            {
                text: 'Actions',
                align: 'center',
                sortable: false,
                value: 'action',
            },
        ],
    }),
    mounted() {
        this.show()
    },
    methods: {
        show() {
            let id = this.$route.params.id
            axios.get(`/admin-api/sku-profile/${id}`).then(({data})=>{
                this.sku = data
                this.isLoading = false
                this.profile.sku = data.sku_code
                data.products.forEach(elem => {
                    this.profile.products.push(elem.product_id)
                });
                // setTimeout(() => {
                // },500)
                // console.log(data)
            })
        },
        addStocks(val) {
            // console.log(this.stocks[val.id])
            this.isLoading = true
            axios.put(`/admin-api/stock/update-sku/${val.id}?&stocks=${this.stocks[val.id]}`).then(({data})=>{
                this.stocks = ''
                this.show()
                this.newAlert(true, data.type, data.message)
            })
        },
        save(val) {
            this.showForm = false
            this.isLoading = true
            axios.post(`/admin-api/stock`, val).then(({ data }) => {
                this.show()
                this.newAlert(true, data.type, data.message)
            })
        },
        addNew() {
            this.showForm = true
        },
        close() {
            this.showForm = false
            this.deleteForm = false
        },
        warning(val){
            this.item = {
                id: val.id,
                text: val.product.name,
                model: 'stock'
            }
            this.deleteForm = true
        },
        confirm() {
            this.isLoading = true
            axios.delete(`/admin-api/${this.item.model}/${this.item.id}`).then(({data})=>{
            this.deleteForm = false
            this.show()
            this.newAlert(true, data.type, data.message)
        });
        },
    }
}
</script>

<style scoped>
.cus-border{
    border-left: 1px solid #ccc;
}
</style>