<template>
    <div>
        <v-card elevation="0" class="mx-auto" max-width="1000">
            <v-card-title>
                Recommendation Section
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <div v-if="recommendations.length>0">
                    <template v-for="text in recommendations.slice().reverse()">
                        <div class="d-flex fb mb-4" :key="text.id" v-if="text.id&&text.customer_id!=account.id">
                            <v-avatar size="36" color="blue-grey" class="mr-2 mt-1">
                                <v-img
                                v-if="text.customer.images.length>0"
                                :src="'/images/customer/'+text.customer.images[0].file_name"
                                ></v-img>
                                <v-icon v-else color="white">mdi-account</v-icon>
                            </v-avatar>
                            <v-sheet rounded="" color="grey lighten-5" elevation="2" class="pa-2" max-width="100%" width="100%">
                                <h4 class="d-flex justify-space-between">
                                    <span>{{ text.customer.first_name + ' ' + text.customer.last_name}}</span>
                                    <v-menu
                                    left
                                    direction="left"
                                    transition="slide-x-reverse-transition"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon v-bind="attrs" v-on="on">mdi-dots-vertical</v-icon>
                                        </template>
                                        <v-btn small @click="text.id = false">
                                            Hide
                                            <v-icon class="ml-1" small>mdi-cancel</v-icon>
                                        </v-btn>
                                    </v-menu>
                                </h4>
                                <div>
                                    <v-tooltip bottom v-if="text.status==1">
                                        <template v-slot:activator="{ on, attrs }">
                                        <v-icon small color="success" v-bind="attrs" v-on="on">mdi-sticker-check-outline</v-icon>
                                        </template>
                                        <span>Read by admin</span>
                                    </v-tooltip>
                                    {{ text.recommendation }}<br>
                                    <!-- <span>{{ moment(fb.created_at).format('YYYY/MM/DD') }}</span> -->
                                    <span>2022/08/16</span>
                                </div>
                            </v-sheet>
                        </div>
                        <div class="d-flex justify-end fb mb-4" :key="text.id" v-else-if="text.id&&text.customer_id==account.id">
                            
                            <v-sheet rounded="" color="green lighten-4" elevation="2" class="pa-2" max-width="100%">
                                <!-- <h4 class="d-flex justify-space-between">
                                    <span>{{ text.customer.first_name + ' ' + text.customer.last_name}}</span>
                                    <v-menu
                                    left
                                    direction="left"
                                    transition="slide-x-reverse-transition"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon v-bind="attrs" v-on="on">mdi-dots-vertical</v-icon>
                                        </template>
                                        <v-btn small @click="text.id = false">
                                            Hide
                                            <v-icon class="ml-1" small>mdi-cancel</v-icon>
                                        </v-btn>
                                    </v-menu>
                                </h4> -->
                                <div>
                                    <v-tooltip bottom v-if="text.status==1">
                                        <template v-slot:activator="{ on, attrs }">
                                        <v-icon small color="success" v-bind="attrs" v-on="on">mdi-sticker-check-outline</v-icon>
                                        </template>
                                        <span>Read by admin</span>
                                    </v-tooltip>
                                    {{ text.recommendation }}<br>
                                    <!-- <span>{{ moment(fb.created_at).format('YYYY/MM/DD') }}</span> -->
                                    <span>2022/08/16</span>
                                </div>
                            </v-sheet>
                            <v-avatar size="36" color="blue-grey" class="ml-2 mt-1">
                                <v-img
                                v-if="text.customer.images.length>0"
                                :src="'/images/customer/'+text.customer.images[0].file_name"
                                ></v-img>
                                <v-icon v-else color="white">mdi-account</v-icon>
                            </v-avatar>
                        </div>
                    </template>
                    <v-divider></v-divider>
                </div>
                <empty v-else></empty>
                <div class="mt-4">
                    <v-textarea
                    label="Recommendation"
                    hide-details=""
                    v-model="text"
                    dense
                    outlined
                    ></v-textarea>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="submit">
                    Submit
                    <v-icon class="ml-2">mdi-send</v-icon>
                </v-btn>
            </v-card-actions>
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
    data: ()=> ({
        recommendations: [],
        text: '',
        opt: false,
        account: {}
    }),
    mounted() {
        this.getUser()
        this.getRecommendation()
    },
    methods: {
        getUser() {
            axios.get(`/customer-api/profile`).then(({data})=>{
                this.account = data.profile
            });
        },
        getRecommendation() {
            axios.get(`/customer-api/recommendations`).then(({data})=>{
                this.recommendations = data.data
                console.log(data.data)
            });
        },
        submit() {
            let payload = {text: this.text}
            axios.post(`/customer-api/recommendations`, payload).then(({data})=>{
                this.getRecommendation()
                this.text = ''
                this.newAlert(true, data.type, data.message)
            });
        },
    },
}
</script>