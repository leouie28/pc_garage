<template>
    <div>
        <v-card>
            <v-card-title>
                Update Multiple Order
            </v-card-title>
            <v-card-subtitle class="mb-0 warning--text">
                <!-- This will update the selected order... -->
                Note! This will update the selected orders, if the order has an item that does not enough of stocks, it will be ignored and proceed the next order.
                <!-- <v-icon>mdi-alert-circle-outline</v-icon> -->
            </v-card-subtitle>
            <v-card-text>
                <div>
                    <v-col>
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="data.arrival"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                label="Arrival"
                                prepend-inner-icon="mdi-calendar"
                                readonly
                                v-model="data.arrival"
                                filled
                                hide-details=""
                                dense
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            v-model="data.arrival"
                            no-title
                            scrollable
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="menu = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.menu.save(data.arrival)"
                            >
                                OK
                            </v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col>
                        <v-select
                        filled
                        dense
                        v-model="data.status"
                        :items="status"
                        item-value="id"
                        item-text="text"
                        label="Status"
                        hide-details=""
                        ></v-select>
                    </v-col>
                    <v-col>
                        <div class="d-flex justify-end">
                            <v-btn
                            color="secondary"
                            @click="$emit('cancel')"
                            class="mr-2"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                            @click="update"
                            color="success"
                            >
                                Update
                            </v-btn>
                        </div>
                    </v-col>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        menu: false,
        data: {
            arrival: '',
            status: ''
        },
        status: [
            {id: 0, text: 'Cancel' },
            {id: 1, text: 'Pending' },
            {id: 2, text: 'Confirm' },
            {id: 3, text: 'On Delivery' },
            {id: 4, text: 'Delivered' },
        ],
    }),
    methods: {
        update() {
            if(!this.data.arrival && !this.data.status){
                alert('Please fillup at least one field...')
            }else{
                this.$emit('confirm', this.data)
            }
        }
    }
}
</script>