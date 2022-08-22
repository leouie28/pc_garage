<template>
  <!-- <div class="blue-grey lighten-5 py-10" style="min-height:100vh;"> -->
  <div class="blue-grey lighten-5 pb-10 cus-pt" style="min-height:100vh;">
    <v-card rounded="lg" max-width="600" class="pa-4 mx-auto" elevation="4">
      <v-form ref="form" lazy-validation>
        <div class="text-center profile">
            <input
              ref="file_input"
              type="file"
              class="hidden"
              accept="image/x-png,image/gif,image/jpeg"
              @change="onFileChange($event.target.files)"
            />
            <v-avatar size="160" class="elevation-4 text-center">
              <v-btn absolute rounded @click="triggerUpload" bottom class="profile-btn">
                  edit
                  <v-icon>mdi-camera</v-icon>
              </v-btn>
              <v-img
              v-if="image_base64" 
              :src="image_base64"
              style="background-color:white;"
              class="mx-auto"
              max-height="300"
              max-width="300"
              ></v-img>
              <v-img
              v-else
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
                    </v-card-title>
                </v-col>
                <v-col md="6" cols="12">
                    <v-text-field
                    dense
                    outlined
                    v-model="payload.first_name"
                    :rules="[() => !!payload.first_name || '']"
                    hide-details="auto"
                    label="First Name"
                    ></v-text-field>
                </v-col>
                <v-col md="6" cols="12">
                    <v-text-field
                    dense
                    outlined
                    v-model="payload.last_name"
                    :rules="[() => !!payload.last_name || '']"
                    hide-details="auto"
                    label="First Name"
                    ></v-text-field>
                </v-col>
                <v-col md="6" cols="12">
                    <v-select
                    dense
                    outlined
                    v-model="payload.gender"
                    :rules="[() => !!payload.gender || '']"
                    :items="gender"
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
                            v-model="payload.birthday"
                            :rules="[() => !!payload.birthday || '']"
                            label="Birthday"
                            readonly
                            outlined
                            hide-details=""
                            dense
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="payload.birthday"
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
                            @click="$refs.menu.save(payload.birthday)"
                        >
                            OK
                        </v-btn>
                        </v-date-picker>
                    </v-menu>
                </v-col>
                <v-col md="12" cols="12">
                    <v-text-field
                    dense
                    outlined
                    v-model="payload.address"
                    :rules="[() => !!payload.address || '']"
                    hide-details="auto"
                    label="Address"
                    ></v-text-field>
                </v-col>
                <v-col md="12" cols="12">
                    <v-text-field
                    dense
                    outlined
                    v-model="payload.phone"
                    :rules="[() => !!payload.phone || '']"
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
                    outlined
                    v-model="payload.email"
                    :rules="[() => !!payload.email || '']"
                    hide-details="auto"
                    label="Email"
                    ></v-text-field>
                </v-col>
                <v-col md="12" cols="12">
                    <v-text-field
                    dense
                    outlined
                    v-model="payload.password"
                    :rules="[() => !!payload.password || '']"
                    hide-details="auto"
                    type="password"
                    label="Password"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
      </v-form>
      <v-card-actions class="pr-4">
        <v-spacer></v-spacer>
        <v-btn text @click="$router.push({name: 'login'})">
          Already have account?
        </v-btn>
        <v-btn color="success" @click="save">
          Signup
        </v-btn>
      </v-card-actions>
  </v-card>
    <!-- <div class="main-container">
      <v-card width="400">
        <v-card-title class="title">Register</v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <div class="avatar">
              <input
                ref="file_input"
                type="file"
                class="hidden"
                accept="image/x-png,image/gif,image/jpeg"
                @change="onFileChange($event.target.files)"
              />
              <v-avatar size="90">
                <img
                  v-if="image_base64" 
                  :src="image_base64" 
                  alt="John" 
                  @click="triggerUpload"
                  />
                  <v-icon  @click="triggerUpload" size="80" v-else>
                    mdi-account-circle
                  </v-icon>
              </v-avatar>
            </div>
            <v-text-field
              v-model="payload.first_name"
              :rules="[() => !!payload.first_name || '']"
              dense
              outlined
              placeholder="first name"
              label="first name"
            >
            </v-text-field>
  
            <v-text-field
              v-model="payload.last_name"
              :rules="[() => !!payload.last_name || '']"
              dense
              outlined
              placeholder="Last name"
              label="Last name"
            >
            </v-text-field>
            <v-text-field
              v-model="payload.phone"
              :rules="[() => !!payload.phone || '']"
              dense
              outlined
              placeholder="Phone"
              label="Phone"
            >
            </v-text-field>
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="0"
              :nudge-bottom="40"
              transition="scale-transition"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  outlined
                  dense
                  v-model="payload.birthday"
                  :rules="[() => !!payload.birthday || '']"
                  label="Birthday"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="payload.birthday"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
            <v-text-field
              v-model="payload.email"
              :rules="[() => !!payload.email || '']"
              dense
              outlined
              placeholder="Email"
              label="Email"
            >
            </v-text-field>
            <v-text-field
              v-model="payload.password"
              :rules="[() => !!payload.password || '']"
              dense
              outlined
              placeholder="Password"
              label="Password"
              type="password"
            >
            </v-text-field>
            <v-text-field
              v-model="payload.c_password"
              :rules="[() => payload.c_password == payload.password || '']"
              dense
              outlined
              placeholder="Confirm Password"
              label="Confirm Password"
              type="password"
            >
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="$router.push({name: 'login'})">Cancel</v-btn>
          <v-btn color="primary" @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu2: false,
      payload: {},
      image_base64:'',
      password: '',
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      gender: ['Female', 'Male', 'Hide']
    };
  },
  methods: {
    save() {
      this.payload.image_base64 = this.image_base64
      console.log(this.payload,"payload")
      if (!this.$refs.form.validate()) return;
       axios.get(`/admin-api/check-email?email=${this.payload.email}`).then( async({data})=>{
        if(!data){
          axios.post(`/admin-api/register`,this.payload).then(({data})=>{
            this.$router.push({name: 'login'})
          });
        }
       });
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
  created() {},
};
</script>
<style scoped>
.hidden{
  display: none;
}
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
.cus-pt{
  padding-top: 100px !important;
}
</style>