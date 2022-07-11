<template>
    <v-app>
        <v-main>
            <v-container class="fill-height" style="max-width:1000px">
                <v-row align="center" justify="center">
                    <v-col cols="12" md="6">
                        <v-card class="elevation-12">
                            <v-window>
                                <v-row class="">
                                    <v-col cols="12" md="12" class="px-16">
                                        <v-card-text class="mt-12">
                                            <h1 class="text-center display-2 teal--text text--accent-3">Sign in</h1>
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
                                                    @keydown.enter="login"
                                                />
                                            </v-form>
                                            <!-- <a href="https://google.com" target="_blank" style="text-decoration: none; color: black;"><h3 class="text-center mt-3">Forgot your password ?</h3></a> -->
                                        </v-card-text>
                                        <v-flex class="class-text" md10>
                                            <small v-if="iserror" class="errormessege">Invalid email or password</small>
                                        </v-flex>
                                        <div class="text-center mt-3">
                                            <v-btn color="teal accent-3" dark @click="login">SIGN IN</v-btn>
                                        </div>
                                        <div class="text-center my-3">
                                            OR<br>
                                            <span>Create Account</span>
                                        </div>
                                        <br>
                                    </v-col>
                                </v-row>
                            </v-window>       
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{

            credential:{
                email:null,
                password:null
            },

            isloading:false,
            iserror:false,

            dialog : false,
            email       : '',
            password        : '',
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
        }
    },
    watch:{
        $route (to, from) {}
    }
};
</script>
