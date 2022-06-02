<template>
  <div>
    <v-row>
      <v-col lg="12">
        <v-card rounded="24" elevation="2">

          <v-data-table
            :headers="headers"
            :items="products"
            item-key="name"
            class="elevation-1"
            :search="search"
            dense
          >
            <template v-slot:[`item.image`]="{ item }">
              <v-icon
              @click="showImage(item)"
              color="primary"
              > mdi-image-multiple</v-icon>
            </template>

            <template v-slot:[`item.price`]="{ item }">
              <span>₱ {{ item.price }}.00</span>
            </template>

            <!-- <template v-slot:[`item.is_service`]="{ item }">
              <v-btn icon @click="updateStatus(item.id)">
                <v-icon  v-if="item.is_service" color="success" > mdi-check-circle-outline</v-icon>
                <v-icon v-else color="error">mdi-cancel </v-icon>
              </v-btn>
            </template>

            <template v-slot:[`item.category_id`]="{ item }">
              <span>{{ item.categories.name }}</span>
            </template>

            <template v-slot:[`item.variation_id`]="{ item }">
              <span>{{ item.variations.name }}</span>
            </template> -->

            <template v-slot:top>
              <v-toolbar
                  flat
              >
                <v-toolbar-title>Products</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-col
                  cols="3"
                  md="2"
                  sm="2"
                >
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
                </v-col>
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  @click="addDialog"
                >
                  Add Product
                </v-btn>

                <v-dialog
                  v-model="dialog"
                  max-width="500px"
                >
                  <v-card>
                      
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-form ref="form">
                          <v-row>
                            <v-col>
                                <v-text-field
                                v-model="payload.name"
                                label="Product name"
                                dense
                                :rules="[() => !!payload.name ||  'this field is required']"
                                ref="name"
                                :error-messages="errorMessages"
                                ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col>
                              <v-textarea
                              v-model="payload.description"
                              label="Product description"
                              rows="1"
                              dense
                              :rules="[() => !!payload.description ||  'this field is required']"
                              ref="name"
                              :error-messages="errorMessages"
                              ></v-textarea>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col>
                              <v-text-field
                              v-model="payload.reference"
                              label="Reference"
                              dense
                              :rules="[() => !!payload.reference ||  'this field is required']"
                              ref="name"
                              :error-messages="errorMessages"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col
                              cols="18"
                              sm="9"
                              md="6"
                            >
                              <v-text-field
                              v-model="payload.price"
                              label="Price"
                              type="number"
                              dense
                              :rules="[() => !!payload.price ||  'this field is required']"
                              ref="name"
                              :error-messages="errorMessages"
                              ></v-text-field>

                            </v-col>
                            <v-col
                              cols="18"
                              sm="9"
                              md="6"
                            >
                              <v-text-field
                              v-model="payload.stock"
                              label="Stock"
                              type="number"
                              dense
                              :rules="[() => !!payload.stock ||  'this field is required']"
                              ref="name"
                              :error-messages="errorMessages"
                              ></v-text-field>
                            </v-col>
                            <!-- <v-col
                              cols="18"
                              sm="9"
                              md="6"
                            >
                              <v-select
                              :items="categories"
                              v-model="payload.category_id"
                              item-value="id" 
                              item-text="name"
                              label="Category"
                              dense
                              :rules="[() => !!payload.category_id ||  'this field is required']"
                              ref="name"
                              :error-messages="errorMessages"
                              ></v-select>
                            </v-col>
                            <v-col
                              cols="18"
                              sm="9"
                              md="6"
                            >
                              <v-select
                              :items="variations"
                              v-model="payload.variation_id"
                              item-value="id" 
                              item-text="name"
                              label="Variation"
                              dense
                              :rules="[() => !!payload.variation_id ||  'this field is required']"
                              ref="name"
                              :error-messages="errorMessages"
                              ></v-select>
                            </v-col> -->
                          </v-row>
                          <v-row>
                            <v-col>
                              <input
                                  ref="file_input"
                                  type='file' class="hidden upload-box" 
                                  accept="image/x-png,image/gif,image/jpeg" 
                                  @change="onFileChange($event.target.files)"
                              />
                              <label v-if="invalid" style="color:red !important">this field is required</label>
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                          color="blue darken-1"
                          text
                          @click="close"
                      >
                          Cancel
                      </v-btn>
                      <v-btn
                          color="green darken-1"
                          text
                          @click="save"
                      >
                          Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>

                </v-dialog>

                <v-dialog v-model="dialogDelete" max-width="390px">
                  <v-card>
                      <v-card-title class="text-h5">Are you sure you want to delete this product?</v-card-title>
                      <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                      <v-btn color="red darken-1" text @click="deleteItemConfirm">OK</v-btn>
                      <v-spacer></v-spacer>
                      </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="showImageDialog" max-width="400px">
                  <v-card>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                          <v-icon
                            color="red darken-1"
                            @click="closeImage"
                          >
                          mdi-close-circle
                          </v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-card-text>
                    <v-img

                      height="250px"
                      width="400px"
                      :contain="true"
                      :src="images"

                    ></v-img>
                    </v-card-text>
                  </v-card>
                </v-dialog>

              </v-toolbar>
            </template>

            <template v-slot:[`item.actions`]="{ item }">
              <v-icon
                  small
                  class="mr-2"
                  color="green darken-1"
                  @click="editDialog(item)"
              >
                  mdi-pencil
              </v-icon>
              <v-icon
                  small
                  color="red darken-1"
                  @click="deleteItem(item)"
              >
                  mdi-delete
              </v-icon>
            </template>

          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      showImageDialog: false,
      headers: [
        {
          text: 'ID',
          align: 'center',
          sortable: false,
          value: 'id',
        },
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description', sortable: false },
        { text: 'Image', align: 'center', value: 'image', sortable: false },
        { text: 'Price', align: 'center', value: 'price', sortable: false },
        { text: 'Reference', align: 'center', value: 'reference', sortable: false },
        { text: 'Stock', align: 'center', value: 'stock', sortable: false },
        // { text: 'Is Service', align: 'center', value: 'is_service', sortable: false },
        // { text: 'Category', align: 'center', value: 'category_id', sortable: false },
        // { text: 'Variation', align: 'center', value: 'variation_id', sortable: false },
        { text: 'Actions', align: 'center', value: 'actions', sortable: false },
      ],
      valid: '',
      products: [],
      categories: [],
      variations: [],
      payload:{},
      search: '',
      category: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        description: '',
        price: 0,
        reference: '',
        stock: 0,
        is_service: 0,
        category_id: '',
        variation_id: '',
      },
      defaultItem: {
        name: '',
        description: '',
        price: 0,
        reference: '',
        stock: 0,
        is_service: 0,
        category_id: '',
        variation_id: '',
      },
      formTitle:"Add Product",
      errorMessages:'',
      defualt_image:'',
      invalid: false,
      images:''
    }),

    watch: {
      dialog (val) {
        if(val) {
          axios.get('/admin/category').then(({data}) => {
            this.categories = data;
          })
          axios.get('/admin/variation').then(({data}) => {
            this.variations = data;
          })
        }
      },
            
      dialogDelete (val) {
        val || this.closeDelete()
      },

      showImageDialog (val) {
        val || this.closeImage()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        axios.get('/admin/product').then(({data}) => {
          this.products = data;
        })
      },

      editDialog(item){
        this.dialog = true
        this.formTitle = 'Edit Product'
        this.payload = JSON.parse(JSON.stringify(item))
      },

      addDialog(){
        this.formTitle = 'Add Product'
        this.dialog = true
      },
      
      editItem (id) {
        axios.put('/admin/product/update'+id).then(({data}) => {
          this.initialize();
        })
      },

      deleteItem (item) {
        this.dialogDelete = true
        this.payload = item
      },

      deleteItemConfirm (id) {
        axios.delete('/admin/product/destroy/'+this.payload.id, this.payload).then(({data}) => {
          this.initialize();
          this.dialogDelete = false
        })
      },

      close () {
        this.payload= {}
        this.image= {}
        this.dialog = false
        this.invalid = false
        this.$refs.file_input.value = null;
        this.$refs.form.resetValidation();
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeImage () {
        this.showImageDialog = false
      },

      save () {
        if(!this.$refs.form.validate()){
          if(!this.payload.image_base64){
            this.invalid = true
          }
          return;
        }
        if(this.payload.id) {
          axios.put('/admin/product/update/'+this.payload.id, this.payload).then(({data}) => {
            this.initialize()
            this.close()
          })
        } else {
          axios.post('/admin/product/create', this.payload).then(({data}) => {
            this.initialize()

            if(!this.payload.image_base64) {
              this.invalid = true
              return
            }

            this.close()
          })
        }
      },

      updateStatus(id){
        axios.put('/admin/product/updateStatus/'+id).then(({data}) => {
          this.initialize();
        })
      },

      showImage(item){
        this.showImageDialog = true
        this.images = item.images[0].filename
      },

      triggerUpload() {
        this.$refs.file_input.click()
      },

      async onFileChange (file) {
        let imageFile = file[0]

        if (file.length>0) {
          if (!imageFile.type.match('image.*')) {
            this.errorDialog = true
            this.errorText = 'Please choose an image file'
            } else {
              let imageURL = URL.createObjectURL(imageFile)
              this.avatar_blob = imageURL
              this.payload.image_base64 = await this.createImageBase64(imageFile);
              //console.log(this.payload.image_base64)
            }
        }
        if(this.payload.image_base64) {
          this.invalid = false;
        }
      },

      isService(){
        axios.get('/admin/product/services').then(({data}) => {
          this.initialize();
        })
      },
    },
  }
</script>

<style scoped>
  .dashboard{
      padding: 10px;
      border-radius: 10px;
      border: 1px solid rgb(235, 235, 235);
      box-shadow: 1px 5px 5px #ccc;
  }

  .class-images{
    display: flex;
    justify-content: center;

    /* .v-image{
        cursor: pointer;
    } */
  }

  inpt#file-input {
    display: none;
  }

  .upload-box {
    font-size: 16px;
    background: white;
    border-radius: 3px;
    box-shadow: 1px 1px 1px 1px black;
    width: 100%;
    outline: none;
  }

  /* ::webkit-file-upload-button {
    color: white;
    background: #206a5d;
    padding: 20px;
    border: none;
    border-radius: 50px;
    box-shadow:1px 0 1px 1px #6b4559;
    outline: none;
  }

  ::webkit-file-upload-button:hover {
    background: #438a5e;
  } */
</style>