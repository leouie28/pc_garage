<template>
    <div>
        <v-card elevation="0" class="mx-auto" max-width="1000">
            <v-card-title>
                Recommendation Section
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <div>
                    <div class="d-flex fb mb-4" v-for="n in 5" :key="n">
                        <v-avatar size="36" color="blue-grey" class="mr-2 mt-1">
                            <!-- <v-img
                            v-if="fb.customer.avatar!=null"
                            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                            ></v-img> -->
                            <v-icon color="white">mdi-account</v-icon>
                        </v-avatar>
                        <v-sheet rounded="" color="grey lighten-5" elevation="2" class="pa-2" width="100%">
                            <h4 class="d-flex justify-space-between">
                                <span>Test User</span>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </h4>
                            <div>
                                Test Lorem
                                <br>
                                <div>

                                </div>
                                <!-- <span>{{ moment(fb.created_at).format('YYYY/MM/DD') }}</span> -->
                                <span>2022/08/16</span>
                            </div>
                        </v-sheet>
                    </div>
                    <v-divider></v-divider>
                </div>
                <div class="mt-4">
                    <v-textarea
                    label="Recommendation"
                    hide-details=""
                    dense
                    outlined
                    ></v-textarea>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">
                    Submit
                    <v-icon class="ml-2">mdi-send</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>