<script>
export default {
    data(vm) {
        return {
            alert: {
                trigger: false,
                color: '',
                text: ''
            }
        }
    },
    methods: {
        newAlert(trigger, color, text){
            this.alert.color = color
            this.alert.text = text
            setTimeout(() => {
                this.alert.trigger = trigger
            }, 1000)
        }
    }
}
</script>