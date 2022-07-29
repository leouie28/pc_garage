<template>
    <div>
       <v-card>
            <v-card-title>
            <span class="text-h5">Customer Info</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                    <v-col md="12" cols="12">
                        <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                            v-model="payload.date"
                            label="Date*"
                            readonly
                            hide-details=""
                            filled
                            :rules="required"
                            v-bind="attrs"
                            v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            v-model="payload.date"
                            @input="menu2 = false"
                            ></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col md="12" cols="12">
                         <v-text-field
                        label="Sales*"
                        dense
                        v-model="payload.sales"
                        filled
                        type="number"
                        hide-details=""
                        :rules="required"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col md="12" cols="12">
                        <v-text-field
                        label="Number of Orders*"
                        dense
                        v-model="payload.order_count"
                        filled
                        type="number"
                        hide-details=""
                        :rules="required"
                        required
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
                        {{ isEdit ? 'Update' : 'Create' }}
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
        menu2: false,
        newPayload: {},
        required: [
            v => !!v || 'This field is required!',
        ],
        payload: {
            date: '',
            sales: '',
            order_count: '',
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

    },
    methods: {
        close() {
            this.isEdit = false
            this.$emit('cancel')
            this.payload = JSON.parse(JSON.stringify(this.newPayload))
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