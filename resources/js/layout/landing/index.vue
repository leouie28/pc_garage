<template>
    <div>
        <register v-if="getUrl == 'register'"></register>
        <login v-else-if="getUrl == 'login'"></login>
        <profile v-else-if="getUrl == 'web-product'"></profile>
        <compatibility v-else-if="getUrl == 'web-compatibility'"></compatibility>
        <product v-else-if="getUrl == false"></product>
    </div>
</template>
<script>
import product from './product.vue'
import profile from './profile.vue'
import compatibility from './compatibility.vue'
import register from '@/components/signup.vue'
import login from '@/layout/login.vue'
export default {
    components: {
        product,
        profile,
        compatibility,
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