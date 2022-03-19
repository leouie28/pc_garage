<template>
    <div class="login">
        <v-card
            class="mx-auto"
            width="500"
        >
            <v-card-text>
                <div class="top">

                </div>
                <v-form
                    ref="form"
                    v-model="login"
                >
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Username"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                    ></v-text-field>

                    <div class="text-center">
                        <v-btn
                        color="success"
                        class="mx-auto"
                        @click="login"
                        >
                        Login
                        </v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
    }),

    methods: {
      login(){

      }
    },
  }
</script>

<style scoped>
.login{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.top{
    width: 100%;
    height: 150px;
    background: #4DB6AC;
}
</style>