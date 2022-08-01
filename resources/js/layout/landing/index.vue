<template>
    <div>
        <register v-if="getUrl == 'register'"></register>
        <login v-else-if="getUrl == 'login'"></login>
        <product v-else></product>
    </div>
</template>
<script>
import product from './product.vue'
import register from '@/components/signup.vue'
import login from '@/layout/login.vue'
export default {
    components: {
        product,
        register,
        login,
    },
    data: () => {
        return{
            // product: false,
            // register: false,
            // login: false
        }
    },
    created() {
        // this.route()
    },
    methods: {

    },
    computed: {
        getUrl() {
            let url = this.$route.fullPath
            let path = url.split('/')
            console.log(path[1], 'afjlafjsl')
            if(path[1]){
                return path[1]
            }
            else{
                return false
            }
        }
    }
}
</script>