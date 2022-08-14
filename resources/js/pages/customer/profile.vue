<template>
    <div>
        <v-card max-width="700" color="grey lighten-5" elevation="0" class="mx-auto">
            <v-card-title>
                <h3 class="mx-auto">
                    <v-icon>mdi-account</v-icon>
                    Profile
                </h3>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-img
                class="mx-auto"
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="300"
                max-width="300"
                src="https://picsum.photos/id/11/500/300"
                ></v-img>
                <v-card rounded="lg" max-width="500" class="pa-4 mx-auto mt-n6" elevation="4">
                    <v-card-text>
                        <v-row>
                            <v-col md="12" cols="12">
                                <v-card-title class="pb-0 mb-0">
                                    <h5>
                                        <v-icon class="mr-1">mdi-information</v-icon>
                                        Basic Information
                                    </h5>
                                    <v-spacer></v-spacer>
                                    <v-tooltip left v-if="readonly==true">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                        @click="edit"
                                        color="primary"
                                        dark
                                        icon
                                        v-bind="attrs"
                                        v-on="on"
                                        >
                                        <v-icon>mdi-square-edit-outline</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Edit Profile</span>
                                    </v-tooltip>
                                    <div v-else>
                                        <v-btn
                                        icon
                                        @click="readonly = true"
                                        color="secondary">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                        <v-btn
                                        icon
                                        color="success">
                                            <v-icon>mdi-check</v-icon>
                                        </v-btn>
                                    </div>
                                </v-card-title>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-text-field
                                dense
                                v-model="profile.first_name"
                                :readonly="readonly"
                                hide-details="auto"
                                label="First Name"
                                ></v-text-field>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-text-field
                                dense
                                v-model="profile.last_name"
                                :readonly="readonly"
                                hide-details="auto"
                                label="First Name"
                                ></v-text-field>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-select
                                dense
                                v-model="profile.genger"
                                :readonly="readonly"
                                hide-details="auto"
                                label="Genger"
                                ></v-select>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-menu
                                    ref="menu"
                                    v-model="menu"
                                    :close-on-content-click="false"
                                    :return-value.sync="date"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="profile.birthday"
                                        label="Birthday"
                                        readonly
                                        hide-details=""
                                        dense
                                        v-bind="attrs"
                                        v-on="readonly==true ? false : on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                    v-model="date"
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
                                        @click="$refs.menu.save(date)"
                                    >
                                        OK
                                    </v-btn>
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col md="12" cols="12">
                                <v-text-field
                                dense
                                v-model="profile.address"
                                :readonly="readonly"
                                hide-details="auto"
                                label="Address"
                                ></v-text-field>
                            </v-col>
                            <v-col md="12" cols="12">
                                <v-text-field
                                dense
                                v-model="profile.phone"
                                :readonly="readonly"
                                hide-details="auto"
                                label="Phone"
                                ></v-text-field>
                            </v-col>
                            <v-col md="12" cols="12">
                                <v-card-title class="pb-0 mb-0">
                                    <h5>
                                        <v-icon class="mr-1">mdi-shield-lock</v-icon>
                                        Login Information
                                    </h5>
                                </v-card-title>
                            </v-col>
                            <v-col md="12" cols="12">
                                <v-text-field
                                dense
                                v-model="profile.email"
                                :readonly="readonly"
                                hide-details="auto"
                                label="Email"
                                ></v-text-field>
                            </v-col>
                            <v-col md="12" cols="12">
                                <v-text-field
                                dense
                                v-model="password"
                                :readonly="readonly"
                                hide-details="auto"
                                label="Password"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        profile: {},
        password: '',
        readonly: true,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
    }),
    mounted() {
        this.getProfile()
    },
    methods: {
        getProfile() {
            axios.get(`/customer-api/profile`).then(({ data }) => {
                this.profile = data.profile
            });
        },
        edit() {
            this.readonly = false
        }
    }
}
</script>