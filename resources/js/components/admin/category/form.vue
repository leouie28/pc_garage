<template>
    <div>
       <v-card>
            <v-card-title>
            <span class="text-h5">Compatibility Info</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                    <v-col md="12" cols="12">
                         <v-text-field
                        label="Name*"
                        dense
                        placeholder="Set A Compatibility"
                        v-model="payload.name"
                        filled
                        hide-details=""
                        :rules="required"
                        ></v-text-field>
                    </v-col>
                    <v-col md="12" cols="12">
                        <span>Find color <a href="https://vuetifyjs.com/en/styles/colors/#material-colors" target="_blank">here..</a></span>
                        <v-text-field
                        label="Color (optional)"
                        dense
                        placeholder="Hex code or color name.."
                        v-model="payload.color"
                        filled
                        hide-details=""
                        ></v-text-field>
                    </v-col>
                    <v-col md="12" cols="12">
                        <span>Find icon <a href="https://materialdesignicons.com" target="_blank">here..</a></span>
                         <v-text-field
                        label="Icon (optional)"
                        dense
                        placeholder="Icon name.."
                        v-model="payload.icon"
                        filled
                        hide-details=""
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
        datePicker: false,
        newPayload: {},
        required: [
            v => !!v || 'This field is required!',
        ],
        payload: {
            name: '',
            color: '',
            icon: ''
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
            if(!this.payload.name){
                alert('Important field need to fillup...')
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
                // console.log(val)
            },
            deep: true,
            immediate: true,
        },
    }
}
</script>