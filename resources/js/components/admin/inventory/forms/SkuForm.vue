<template>
    <div>
       <v-card>
            <v-card-title>
            <span class="text-h5">Stock Keeping Unit Info</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                    <v-col md="12" cols="12">
                         <v-text-field
                        label="Supplier/Name*"
                        dense
                        v-model="payload.name"
                        filled
                        hide-details=""
                        :rules="required"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col md="12" cols="12">
                         <v-text-field
                        label="Sku code*"
                        dense
                        v-model="payload.code"
                        filled
                        @keyup="uppercase"
                        hide-details=""
                        :rules="required"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col md="12" cols="12">
                        <v-btn
                        large
                        block
                        @click="generateCode"
                        color="primary">
                            Generate Code
                        </v-btn>
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
        newPayload: {
            name: '',
            code: ''
        },
        required: [
            v => !!v || 'This field is required!',
        ],
        payload: {
            name: '',
            code: '',
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
            if(!this.payload.name || !this.payload.code){
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
        uppercase() {
            this.payload.code = this.payload.code.toUpperCase()
        },
        generateCode() {
            let code = ''
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
            for ( var i = 0; i < 8; i++ ) {
                code += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            this.payload.code = code
        }
    },
    watch: {
        selectedItem: {
            handler(val) {
                if(Object.keys(val).length===0){
                    this.isEdit = false
                    return
                }
                this.payload.name = val.name
                this.payload.code = val.sku_code
                this.isEdit = true
            },
            deep: true,
            immediate: true,
        },
    }
}
</script>