<template>
    <div>
       <v-card>
            <v-card-title>
            <span class="text-h5">Customer Info</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                    <v-col md="6" cols="12">
                         <v-text-field
                        label="First Name*"
                        dense
                        v-model="payload.first_name"
                        filled
                        hide-details=""
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col md="6" cols="12">
                         <v-text-field
                        label="Last Name*"
                        dense
                        v-model="payload.last_name"
                        filled
                        hide-details=""
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-text-field
                            filled
                            v-model="payload.birthday"
                            label="Birthday"
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
                        v-model="payload.birthday"
                        scrollable
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
                        label="Gender*"
                        :items="gender"
                        item-value="value"
                        dense
                        v-model="payload.gender"
                        filled
                        hide-details="auto"
                        required
                        ></v-select>
                    </v-col>
                    <v-col cols="12">
                         <v-text-field
                        label="Address*"
                        dense
                        v-model="payload.address"
                        filled
                        hide-details=""
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col md="8" cols="12">
                         <v-text-field
                        label="Phone Number*"
                        dense
                        v-model="payload.phone"
                        filled
                        hide-details=""
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col md="4" cols="12">
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
                         <v-text-field
                        label="Email*"
                        dense
                        v-model="payload.email"
                        filled
                        hide-details=""
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                         <v-text-field
                        label="Password*"
                        dense
                        v-model="payload.password"
                        filled
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
        qty: 1,
        itemPrice: '',
        img: null,
        products: [],
        datePicker: false,
        customers: [],
        status: [
            {id: 0, text: 'Inactive'},
            {id: 1, text: 'Active'},
        ],
        gender: [
            'Male',
            'Female',
            'Hidden',
        ],
        payload: {
            first_name: '',
            last_name: '',
            birthday: new Date().toISOString().slice(0, 7),
            genger: '',
            address: '',
            status: 1,
            phone: '',
            email: '',
            password: '',
        }
    }),
    props: {
        // formDialog: {}
    },
    created() {

    },
    methods: {
        save() {
            this.$emit('save', this.payload)
            // console.log(this.payload)
        },
    },
}
</script>