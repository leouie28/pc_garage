<template>
  <v-app id="inspire">
    <v-main>
        <v-container class="text-center w-100 d-flex justify-center align-center flex-column" style="height: 100vh;">
            <v-subheader>
                <div class="display-1">
                    Getting ready...
                </div>
            </v-subheader>
            <v-progress-linear
                color="light-blue lighten-1"
                indeterminate
                class="loader mt-4"
                rounded
                height="8"
            ></v-progress-linear>
        </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.loader{
    max-width: 400px;
}
</style>