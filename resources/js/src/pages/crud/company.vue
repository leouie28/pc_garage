<template>
  <div>
    <v-row>
      <v-col lg="12">
        <v-card rounded="24" elevation="2">

          <v-data-table
            :headers="headers"
            :items="companies"
            item-key="name"
            class="elevation-1"
            :search="search"
            dense
          >

            <!-- <template v-slot:[`item.address`]="{ item }">
                {{ item.barangay + ', ' + item.city +', ' + item.province }}
            </template> -->

            <template v-slot:[`item.status`]="{ item }">
              <v-btn icon @click="updateStatus(item.id)">
                <v-icon  v-if="item.status" color="success" > mdi-check</v-icon>
                <v-icon v-else color="error">mdi-close </v-icon>
              </v-btn>
            </template>

            <template v-slot:top>
              <v-toolbar
                  flat
              >
                <v-toolbar-title>Companies</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  class="mr-4"
                  single-line
                  hide-details
                ></v-text-field>
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
                  Add Company
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
                                label="Company name"
                                dense
                                :rules="[() => !!payload.name ||  'this field is required']"
                                ref="name"
                                :error-messages="errorMessages"
                                ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col>
                              <v-text-field
                              v-model="payload.email"
                              label="Email"
                              dense
                              :rules="[() => !!payload.email ||  'this field is required']"
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
                                v-model="payload.phone"
                                label="Cellphone Number"
                                dense
                                :rules="[() => !!payload.phone ||  'this field is required']"
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
                                v-model="payload.barangay"
                                label="Barangay"
                                dense
                                :rules="[() => !!payload.barangay ||  'this field is required']"
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
                                v-model="payload.city"
                                label="City"
                                dense
                                :rules="[() => !!payload.city ||  'this field is required']"
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
                                v-model="payload.province"
                                label="Province"
                                dense
                                :rules="[() => !!payload.province ||  'this field is required']"
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
                                v-model="payload.password"
                                label="Password"
                                type="password"
                                dense
                                ></v-text-field>
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
                      <v-card-title class="text-h5">Are you sure you want to delete this company?</v-card-title>
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
        { text: 'Email', align: 'center', value: 'email', sortable: false },
        { text: 'Phone No.', align: 'center', value: 'phone', sortable: false },
        // { text: 'Address', align: 'center', value: 'address', sortable: false },
        { text: 'Barangay', align: 'center', value: 'barangay', sortable: false },
        { text: 'City', align: 'center', value: 'city', sortable: false },
        { text: 'Province', align: 'center', value: 'province', sortable: false },
        { text: 'Status', align: 'center', value: 'status', sortable: false },
        { text: 'Actions', align: 'center', value: 'actions', sortable: false },
        // {value: 'barangay', class: 'hide' },
        // {value: 'barangay', class: 'hide' },
        // {value: 'barangay', class: 'hide' },
      ],
      valid: '',
      companies: [],
      payload:{},
      search: '',
      editedIndex: -1,
      editedItem: {
        name: '',
        email: '',
        phone: 0,
        address: '',
      },
      defaultItem: {
        name: '',
        email: '',
        phone: 0,
        address: '',
        status: 0,
      },
      formTitle:"Add Company",
      errorMessages:''
    }),

    watch: {
      dialog (val) {
        val || this.close()
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
        axios.get('/admin/company').then(({data}) => {
          this.companies = data;
        })
      },

      editDialog(item){
        this.dialog = true
        this.formTitle = 'Edit Company'
        this.payload = JSON.parse(JSON.stringify(item))
      },

      addDialog(){
        this.formTitle = 'Add Company'
        this.dialog = true
      },
      
      editItem (id) {
        axios.put('/admin/company/update'+id).then(({data}) => {
          this.initialize();
        })
      },

      deleteItem (item) {
        this.dialogDelete = true
        this.payload = item
      },

      deleteItemConfirm (id) {
        axios.delete('/admin/company/destroy/'+this.payload.id, this.payload).then(({data}) => {
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
          axios.put('/admin/company/update/'+this.payload.id, this.payload).then(({data}) => {
            this.initialize()
            this.close()
            // this.$toast.success('successfully updated!', {position:'bottom'})
          }).catch(error => {
            if(error.response.data.errors.name) {
              alert(error.response.data.errors.name)
            } else if(error.response.data.errors.email) {
              alert(error.response.data.errors.email)
            } else if (error.response.data.errors.phone) {
              alert(error.response.data.errors.phone)
            } else if (error.response.data.errors.password) {
              alert(error.response.data.errors.password)
            }
          })
        } else {
          axios.post('/admin/company/create', this.payload).then(({data}) => {
            this.initialize()
            this.close()
          }).catch(error => {
            if(error.response.data.errors.name) {
              alert(error.response.data.errors.name)
            } else if(error.response.data.errors.email) {
              alert(error.response.data.errors.email)
            } else if (error.response.data.errors.phone) {
              alert(error.response.data.errors.phone)
            } else if (error.response.data.errors.password) {
              alert(error.response.data.errors.password)
            }
          })
        }
      },
      
      updateStatus(id){
        axios.put('/admin/company/updateStatus/'+id).then(({data}) => {
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
      /* border: 1px solid rgb(235, 235, 235);
      box-shadow: 1px 5px 5px #ccc; */
  }

  /* .hide-header {
    display: none !important;
  } */
</style>