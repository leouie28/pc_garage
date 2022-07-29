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
                                Order Items
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
                                hide-default-footer
                                class="px-2">
                                    <template v-slot:[`item.action`]="{ item }">
                                        <v-btn
                                            class="pa-2"
                                            x-small
                                            elevation="0"
                                            color="secondary"
                                            @click="editItem(item)"
                                        >
                                            <v-icon small>mdi-plus-circle</v-icon>
                                        </v-btn>
                                        <v-btn
                                            class="pa-2"
                                            x-small
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
            <stock-form :selectedItem="selectedItem" @cancel="close"> </stock-form>
        </v-dialog>
        <v-dialog v-model="deleteForm" persistent width="500">
            <delete-dialog :data="item" @close="close" @confirm="confirm"></delete-dialog>
        </v-dialog>
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
        item: {},
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
                // console.log(data)
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
                model: 'sku record'
            }
            this.deleteForm = true
        },
        confirm() {

        },
    }
}
</script>

<style scoped>
.cus-border{
    border-left: 1px solid #ccc;
}
</style>