<template>
    <div>
       <v-card>
            <v-card-title>
            <span class="text-h5">Product Info</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                        v-model="payload.name"
                        label="Name*"
                        filled
                        hide-details=""
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-autocomplete
                        chips
                        deletable-chips
                        v-model="payload.category"
                        filled
                        label="Category"
                        hide-details="auto"
                        dense
                        :items="category"
                        item-text="name"
                        item-value="id"
                        prepend-inner-icon="mdi-plus"
                        multiple
                        ></v-autocomplete>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-text-field
                        label="Price*"
                        dense
                        v-model="payload.price"
                        type="number"
                        filled
                        min="1"
                        hide-details=""
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-text-field
                        label="Stocks*"
                        dense
                        v-model="payload.stocks"
                        type="number"
                        filled
                        min="1"
                        hide-details=""
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea
                            filled
                            v-model="payload.description"
                            label="Description"
                            hide-details=""
                        ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                        <v-file-input
                            chips
                            v-model="img"
                            counter
                            prepend-icon=""
                            accept="image/x-png,image/gif,image/jpeg"
                            label="Image"
                            filled
                            @change="onFileChange"
                            prepend-inner-icon="mdi-camera"
                        ></v-file-input>
                    </v-col>
                </v-row>
                <v-row justify="end">
                    <v-btn
                        color="secondary"
                        @click="close"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        class="mx-2"
                        color="success"
                        @click="save"
                    >
                        Save
                    </v-btn>
                </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        // dialog: false
        img: null,
        category: [],
        payload: {
            name: '',
            category: [],
            stocks: 1,
            price: '',
            description: '',
            image: null
        }
    }),
    props: {
        selectedItem: {}
        // formDialog: {}
    },
    created() {
        this.getCategory()
    },
    methods: {
        createImg(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
            this.payload.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        onFileChange(file) {
            if (!file) {
                return;
            }
            this.createImg(file);
        },
        getCategory() {
            axios.get(`/admin-api/category`).then(({data})=>{
                this.category = data
            })
        },
        close() {
            for (var key in this.payload){
                delete this.payload[key]
            }
            // this.img = {}
            this.$emit('cancel')
        },
        save() {
            // if(!this.selectedItem){
            //     console.log('not edit')
            // }else{
            //     console.log('edit')
            // }
            // // console.log(this.img)
            this.$emit('save', this.payload)
        },
    },
    watch: {
        selectedItem:{
            handler(val){
                for (var key in this.payload){
                        delete this.payload[key]
                    }
                if(Object.keys(val).length!==0){
                    this.img = {}
                    console.log(val,'afsf')
                    this.payload.name = val.name
                    val.categories.forEach(elem => {
                        this.payload.category.push(elem.id)
                    });
                    this.payload.price = val.price
                    this.payload.stocks = val.stocks
                    this.payload.description = val.description
                    val.images.forEach(elem => {
                        this.img.name = elem.file_name
                    });
                }else{
                    // this.img = null
                }
            },immediate:true
        }
    }
}
</script>