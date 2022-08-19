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
                max-height="120"
                max-width="494"
                :src="profile.images.length>0?image_base64:'https://picsum.photos/id/11/500/300'"
                ></v-img>
                <v-card rounded="lg" max-width="500" class="pa-4 mx-auto mt-n6" elevation="4">
                    <div class="text-center profile">
                        <input
                        ref="file_input"
                        type="file"
                        class="hidden"
                        accept="image/x-png,image/gif,image/jpeg"
                        @change="onFileChange($event.target.files)"
                        />
                        <v-avatar size="160" class="elevation-4 text-center">
                            <v-fab-transition>
                            <v-btn small v-if="readonly==false" @click="triggerUpload" absolute rounded bottom class="profile-btn">
                                edit
                                <v-icon>mdi-camera</v-icon>
                            </v-btn>
                            </v-fab-transition>
                            <v-img
                            style="background-color:white;"
                            class="mx-auto"
                            max-height="300"
                            max-width="300"
                            :src="image_base64?image_base64:'/images/default/person.png'"
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
                                        @click="update"
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
                                label="Gender"
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
                                    v-model="profile.birthday"
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
                                        @click="$refs.menu.save(profile.birthday)"
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
                                v-model="profile.password"
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
export default {
    data: () => ({
        profile: {
            images: [],
            password: ''
        },
        original: {
            images: [],
        },
        image_base64:'',
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
                this.original = JSON.parse(JSON.stringify(data.profile))
                if(data.profile.images.length>0){
                    this.image_base64 = '/images/customer/'+data.profile.images[0].file_name
                }
                console.log(this.profile)
            });
        },
        edit() {
            this.readonly = false
        },
        update() {
            if(this.profile.images.length>0){
                if(this.image_base64!='/images/customer/'+this.profile.images[0].file_name){
                    this.profile.image_base64 = this.image_base64
                }
            }else{
                this.profile.image_base64 = this.image_base64
            }

            if(JSON.stringify(this.profile) === JSON.stringify(this.original)){
                this.readonly = true
            }else{
                axios.put(`/customer-api/update-profile`, this.profile).then(({ data }) => {
                    this.newAlert(true, data.type, data.message)
                });
                this.readonly = true
                this.getProfile()
            }
        },
        triggerUpload() {
            this.$refs.file_input.click();
        },
        async onFileChange(file) {
            this.isUpload = true;
            let imageFile = file[0];
            let temp = {};
            if (file.length > 0) {
                if (!imageFile.type.match("image.*")) {
                this.errorDialog = true;
                this.errorText = "Please choose an image file";
                } else {
                let imageURL = URL.createObjectURL(imageFile);
                console.log(imageFile.name, "imageURL");
                this.image_base64 = await this.createImageBase64(imageFile);
                }
            }
            this.isUpload = false;
        },
        createImageBase64(file) {
            var reader = new FileReader();

            return new Promise((resolve, reject) => {
                reader.onload = (e) => {
                let res = e.target.result;
                resolve(res);
                };
                reader.readAsDataURL(file);
            });
        },
    },
    watch: {
        readonly: {
            handler(val) {
                if(val==true){
                    console.log(val)
                    if(this.profile.images.length>0){
                        if(this.image_base64!=this.profile.images[0].file_name){
                            this.image_base64 = '/images/customer/'+this.original.images[0].file_name
                        }
                    }else{
                        this.image_base64 = ''
                    }
                }
            },immediate:true, deep:true
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