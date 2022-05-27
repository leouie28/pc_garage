<script>
export default {
    methods: {
      createImageBase64(file) {
            var reader = new FileReader();

            return new Promise((resolve, reject) => {
                reader.onload = e => {
                    let res = e.target.result;
                    resolve(res);
                };
                reader.readAsDataURL(file);
            });
        },
    }
}
</script>