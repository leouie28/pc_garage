<template>
    <v-app>
        <v-main>
            <v-container class="fill-height">
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="8">
                        <v-card class="elevation-12">
<<<<<<< Updated upstream
                                    <v-row>
                                        <v-col cols="12" md="8">
                                            <v-card-text class="mt-12">
                                                <h1 class="text-center display-2 teal--text text--accent-3">Sign in</h1>
                                                <!-- <div class="text-center mt-2">
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon style="font-size: 30px !important;">mdi-facebook</v-icon>
                                                    </v-btn>
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon style="font-size: 30px !important;">mdi-google-plus</v-icon>
                                                    </v-btn>
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon style="font-size: 30px !important;">mdi-linkedin</v-icon>
                                                    </v-btn>
                                                </div> -->
                                                <!-- <h4 class="text-center mlt-4">Ensure your email for registration</h4> -->
                                                <v-form>
                                                    <v-text-field
                                                        v-model="credential.email"
                                                        label="Email"
                                                        name="Email"
                                                        prepend-icon="mdi-email"
                                                        type="text"
                                                        color="teal accent-3"
                                                    />
                                                    <v-text-field
                                                        v-model="credential.password"
                                                        label="Password"
                                                        name="Password"
                                                        prepend-icon="mdi-lock"
                                                        type="password"
                                                        color="teal accent-3"
                                                    />
                                                </v-form>
                                                <a href="#" style="text-decoration: none; color: black;"><h3 class="text-center mt-3">Forgot your password ?</h3></a>
                                            </v-card-text>
                                                <v-flex class="class-text" md10>
                                                    <small v-if="iserror" class="errormessege">Invalid email or password</small>
                                                </v-flex>
                                            <div class="text-center mt-3">
                                                <v-btn rounded color="teal accent-3" dark @click="login">SIGN IN</v-btn>
                                            </div>
                                            <br>
                                        </v-col>
                                        <v-col cols="12" md="4" class="teal accent-3">
                                        </v-col>
                                    </v-row>
=======
                            <v-row>
                                <v-col cols="12" md="8">
                                    <v-card-text class="mt-12">
                                        <h1 class="text-center display-2 teal--text text--accent-3">Sign in</h1>
                                        <!-- <div class="text-center mt-2">
                                            <v-btn class="mx-2" fab color="black" outlined>
                                                <v-icon style="font-size: 30px !important;">mdi-facebook</v-icon>
                                            </v-btn>
                                            <v-btn class="mx-2" fab color="black" outlined>
                                                <v-icon style="font-size: 30px !important;">mdi-google-plus</v-icon>
                                            </v-btn>
                                            <v-btn class="mx-2" fab color="black" outlined>
                                                <v-icon style="font-size: 30px !important;">mdi-linkedin</v-icon>
                                            </v-btn>
                                        </div> -->
                                        <!-- <h4 class="text-center mlt-4">Ensure your email for registration</h4> -->
                                        <v-form
                                        ref="form"
                                        v-model="login">
                                            <v-text-field
                                                v-model="credential.email"
                                                label="Email"
                                                name="Email"
                                                :rules="emailRules"
                                                prepend-icon="mdi-email"
                                                type="text"
                                                color="teal accent-3"
                                            />
                                            <v-text-field
                                                v-model="credential.password"
                                                label="Password"
                                                name="Password"
                                                :rules="passwordRules"
                                                prepend-icon="mdi-lock"
                                                type="password"
                                                color="teal accent-3"
                                            />
                                        </v-form>
                                        <a href="#" style="text-decoration: none; color: black;"><h3 class="text-center mt-3">Forgot your password ?</h3></a>
                                    </v-card-text>
                                    <div class="text-center mt-3">
                                        <v-btn rounded color="teal accent-3" dark @click="login">SIGN IN</v-btn>
                                    </div>
                                    <br>
                                </v-col>
                                <v-col cols="12" md="4" class="teal accent-3">
                                </v-col>
                            </v-row>
>>>>>>> Stashed changes
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
<<<<<<< Updated upstream
  export default {
    name: 'login',
    data(){
     return{
          credential:{},
          isloading:false,
          iserror:false,
     }
 },
    methods: {
         login() {
                let payload = this.credential
                axios.post(`/api/admin/login`,{...payload}).then(({data})=>{
                    if(!data.error_message){
                        this.$router.push({name:'dashboard'})
                    }else {
                        this.iserror = true
                        setTimeout(() => {
                            this.iserror = false
                        }, 5000);
                    }
                })
                .finally(()=>{
                this.isloading = false
            })
        }
    },
    watch:{
        $route (to, from){
           
=======
export default {
    name: 'Login',
    data(){
        return{

            credential:{
                emial:null,
                password:null
            },
            dialog : false,
            email       : '',
            emailRules  : [
                email => !!email || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            password        : '',
            passwordRules   : [
                password => !!password ||'Password is required',
            ],

        }
    },
    methods: {
        login(){
        let payload = this.credential
            axios.post(`/admin/login`,{...payload}).then(({data})=>{
                if(!data.error_message){
                    this.$router.push({name:'dashboard'})
                }else {
                    this.iserror = true
                    setTimeout(() => {
                        this.iserror = false
                    }, 5000);
                }
            })
            .finally(()=>{
                this.isloading = false
            })
>>>>>>> Stashed changes
        }
    }
};
</script>