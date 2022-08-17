<template>
    <div>
        <v-card max-width="560" color="grey lighten-5" elevation="0" class="py-3 mx-auto">
            <!-- <v-card-title>
                <h3 class="mx-auto">
                    <v-icon>mdi-account</v-icon>
                    Profile
                </h3>
            </v-card-title>
            <v-divider></v-divider> -->
            <v-card-text>
                <v-img
                class="mx-auto cover"
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="120"
                max-width="494"
                src="https://picsum.photos/id/11/500/300"
                ></v-img>
                <v-card rounded="lg" max-width="500" class="pa-4 mx-auto mt-n6" elevation="4">
                    <div class="text-center profile">
                        <v-avatar size="160" class="elevation-4 text-center">
                            <v-fab-transition>
                            <v-btn v-if="readonly==false" absolute rounded bottom class="profile-btn">
                                edit
                                <v-icon>mdi-camera</v-icon>
                            </v-btn>
                            </v-fab-transition>
                            <v-img
                            style="background-color:white;"
                            class="mx-auto"
                            max-height="300"
                            max-width="300"
                            src="/images/default/person.png"
                            ></v-img>
                        </v-avatar>
                    </div>
                    <v-card-text>
                        <v-row>
                            <v-col md="12" cols="12" class="pt-0">
                                <v-card-title class="py-0 mb-0">
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
                                :outlined="readonly==true ? false : true"
                                v-model="profile.first_name"
                                :readonly="readonly"
                                hide-details="auto"
                                label="First Name"
                                ></v-text-field>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-text-field
                                dense
                                :outlined="readonly==true ? false : true"
                                v-model="profile.last_name"
                                :readonly="readonly"
                                hide-details="auto"
                                label="First Name"
                                ></v-text-field>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-select
                                dense
                                :outlined="readonly==true ? false : true"
                                v-model="profile.gender"
                                :items="gender"
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
                                        :outlined="readonly==true ? false : true"
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
                                :outlined="readonly==true ? false : true"
                                v-model="profile.address"
                                :readonly="readonly"
                                hide-details="auto"
                                label="Address"
                                ></v-text-field>
                            </v-col>
                            <v-col md="12" cols="12">
                                <v-text-field
                                dense
                                :outlined="readonly==true ? false : true"
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
                                :outlined="readonly==true ? false : true"
                                v-model="profile.email"
                                :readonly="readonly"
                                hide-details="auto"
                                label="Email"
                                ></v-text-field>
                            </v-col>
                            <v-col md="12" cols="12">
                                <v-text-field
                                dense
                                :outlined="readonly==true ? false : true"
                                v-model="password"
                                :readonly="readonly"
                                hide-details="auto"
                                type="password"
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
        profile: {
            images: []
        },
        password: '',
        readonly: true,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        gender: ['Female', 'Male', 'Hide']
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
<style scoped>
.profile{
    margin-top: -100px !important;
}
.profile >>> .v-avatar{
    border: 4px solid #fff;
}
.cover{
    overflow: hidden !important;
    opacity: .8;
    filter: blur(4px);
    -webkit-filter: blur(4px);
}
.profile-btn{
    z-index: 5 !important;
}
</style>