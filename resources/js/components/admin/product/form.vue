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
                        :rules="required"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-autocomplete
                        chips
                        deletable-chips
                        v-model="payload.categories"
                        filled
                        label="Category"
                        hide-details="auto"
                        dense
                        :rules="required"
                        :items="category"
                        item-text="name"
                        item-value="id"
                        multiple
                        ></v-autocomplete>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-text-field
                        label="Cost Price*"
                        dense
                        :rules="required"
                        v-model="payload.cost_price"
                        type="number"
                        filled
                        min="1"
                        hide-details=""
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-text-field
                        label="Selling Price*"
                        dense
                        :rules="required"
                        v-model="payload.price"
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
                            :rules="required"
                            v-model="payload.description"
                            label="Description"
                            hide-details=""
                        ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                        <v-file-input
                            :show-size="isEdit ? false : true"
                            v-model="img"
                            :counter="isEdit ? false : true"
                            prepend-icon=""
                            :rules="required"
                            accept="image/*"
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
                        {{ isEdit ? 'Update' : 'Create' }}
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
        isEdit: false,
        newPayload: {},
        img: null,
        category: [],
        required: [
            v => !!v || 'This field is required!',
        ],
        payload: {
            name: '',
            categories: [],
            stocks: 1,
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
                this.category = data.data
            })
        },
        close() {
            // this.img = {}
            this.$emit('cancel')
            this.isEdit = false
            this.img = null
            this.payload = JSON.parse(JSON.stringify(this.newPayload))
        },
        save() {
            if(this.isEdit){
                this.$emit('update', this.payload)
            }else{
                this.$emit('save', this.payload)
            }
            this.isEdit = false
            this.payload = JSON.parse(JSON.stringify(this.newPayload))
        },
    },
    watch: {
        selectedItem:{
            handler(val){
                if(Object.keys(val).length===0){
                    this.isEdit = false
                    return
                }
                this.payload = JSON.parse(JSON.stringify(val))
                this.payload.categories = []
                val.categories.forEach(elem => {
                    this.payload.categories.push(elem.id)
                });
                this.img = {}
                val.images.forEach(elem => {
                    this.img.name = elem.file_name
                });
                this.isEdit = true
            },
            deep: true,
            immediate:true
        }
    }
}
</script>