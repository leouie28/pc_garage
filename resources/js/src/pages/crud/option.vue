<template>
  <div>
    <v-row>
      <v-col lg="8" style="margin: 0 auto">
        <v-card rounded="24" elevation="2">

          <v-data-table
            :headers="headers"
            :items="options"
            item-key="name"
            class="elevation-1"
            :search="search"
            dense
          >

            <template v-slot:[`item.variation_id`]="{ item }">
              <span>{{ item.variations.name }}</span>
            </template>

            <template v-slot:top>
              <v-toolbar
                  flat
              >
                <v-toolbar-title>Options</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-col
                  cols="6"
                  md="3"
                  sm="4"
                >
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  class="mr-4"
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
                  Add Option
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
                        <v-form ref="form" v-model="valid" lazy-validation>
                          <v-row>
                            <v-col>
                                <v-text-field
                                v-model="payload.name"
                                label="Option name"
                                dense
                                :rules="[() => !!payload.name ||  'this field is required']"
                                ref="name"
                                :error-messages="errorMessages"
                                ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                              v-model="payload.addprice"
                              label="Add Price"
                              type="number"
                              dense
                              :rules="[() => !!payload.addprice ||  'this field is required']"
                              ref="name"
                              :error-messages="errorMessages"
                              ></v-text-field>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
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
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
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
                      <v-card-title class="text-h5">Are you sure you want to delete this option?</v-card-title>
                      <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                      <v-btn color="red darken-1" text @click="deleteItemConfirm">OK</v-btn>
                      <v-spacer></v-spacer>
                      </v-card-actions>
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
      headers: [
        {
          text: 'ID',
          align: 'center',
          sortable: false,
          value: 'id',
        },
        { text: 'Name', value: 'name' },
        { text: 'Add Price', align: 'center', value: 'addprice', sortable: false },
        { text: 'Stock', align: 'center', value: 'stock', sortable: false },
        { text: 'Variation', value: 'variation_id' },
        { text: 'Actions', align: 'center', value: 'actions', sortable: false },
      ],
      valid: '',
      options: [],
      variations: [],
      payload:{},
      search: '',
      editedIndex: -1,
      editedItem: {
        name: '',
        addprice: 0,
        stock: 0,
        variation_id: '',
      },
      defaultItem: {
        name: '',
        addprice: 0,
        stock: 0,
        variation_id: '',
      },
      formTitle:"Add Option",
      errorMessages:''
    }),

    watch: {
      dialog (val) {
        if(val) {
          axios.get('/admin/variation').then(({data}) => {
            this.variations = data;
          })
        }
      },

      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      //this.$toast.success('Successfully updated client status', {position: 'bottom'});
      this.initialize()
    },

    methods: {
      initialize () {
        axios.get('/admin/option').then(({data}) => {
          this.options = data;
          console.log(this.options)
        })
      },

      editDialog(item){
        this.dialog = true
        this.formTitle = 'Edit Option'
        this.payload = JSON.parse(JSON.stringify(item))
      },

      addDialog(){
        this.formTitle = 'Add Option'
        this.dialog = true
      },
      
      editItem (id) {
        axios.put('/admin/option/update'+id).then(({data}) => {
          console.log('Success');
          this.initialize();
        })
      },

      deleteItem (item) {
        this.dialogDelete = true
        this.payload = item
      },

      deleteItemConfirm (id) {
        axios.delete('/admin/option/destroy/'+this.payload.id, this.payload).then(({data}) => {
          console.log('Success');
          this.initialize();
          this.dialogDelete = false
        })
      },

      close () {
        this.payload= {}
        this.dialog = false
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

      save () { 
        if(!this.$refs.form.validate()) return;
        if(this.payload.id) {
          axios.put('/admin/option/update/'+this.payload.id, this.payload).then(({data}) => {
            this.initialize()
            this.close()
          }).catch(error => {
            if(error.response.data.errors.name) {
              alert(error.response.data.errors.name)
            }
          })
        } else {
          axios.post('/admin/option/create', this.payload).then(({data}) => {
            this.initialize()
            this.close()
          }).catch(error => {
            if(error.response.data.errors.name) {
              alert(error.response.data.errors.name)
            }
          })
        }
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
</style>