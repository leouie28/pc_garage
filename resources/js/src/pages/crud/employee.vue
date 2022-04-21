<template>
  <div>
    <v-row>
      <v-col lg="12">
        <v-card rounded="24" elevation="2">

          <v-data-table
            :headers="headers"
            :items="employees"
            item-key="name"
            class="elevation-1"
            :search="search"
          >

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
                <v-toolbar-title>Employee</v-toolbar-title>
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
                  Add Employee
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
                                label="Employee name"
                                :rules="[() => !!payload.name ||  'this field is required']"
                                ref="name"
                                :error-messages="errorMessages"
                                ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col
                                cols="24"
                                sm="12"
                                md="8"
                            >
                                <v-text-field
                                v-model="payload.email"
                                label="Email"
                                :rules="[() => !!payload.email ||  'this field is required']"
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
                                v-model="payload.phone"
                                label="Cellphone Number"
                                :rules="[() => !!payload.phone ||  'this field is required']"
                                ref="name"
                                :error-messages="errorMessages"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="24"
                                sm="12"
                                md="8"
                            >
                                <v-select
                                v-model="payload.position"
                                :items="position"
                                menu-props="auto"
                                hide-details
                                label="Select Position"
                                single-line
                                :rules="[() => !!payload.position ||  'this field is required']"
                                ref="name"
                                :error-messages="errorMessages"
                                ></v-select>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                v-model="payload.password"
                                label="Password"
                                type="password"
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
                      <v-card-title class="text-h5">Are you sure you want to delete this employee?</v-card-title>
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
        { text: 'Position', align: 'center', value: 'position', sortable: false },
        { text: 'Status', align: 'center', value: 'status', sortable: false },
        { text: 'Actions', align: 'center', value: 'actions', sortable: false },
      ],
      position: [
          'Chef', 'Cashier', 'Waiter',
      ],
      valid: '',
      employees: [],
      payload:{},
      search: '',
      editedIndex: -1,
      editedItem: {
        name: '',
        email: '',
        phone: 0,
        status: '',
      },
      defaultItem: {
        name: '',
        email: '',
        phone: 0,
        position: '',
        status: 0,
      },
      formTitle:"Add Employee",
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
        axios.get('/admin/employee').then(({data}) => {
          this.employees = data;
        })
      },

      editDialog(item){
        this.dialog = true
        this.formTitle = 'Edit Eployee'
        this.payload = JSON.parse(JSON.stringify(item))
      },

      addDialog(){
        this.formTitle = 'Add Employee'
        this.dialog = true
        this.resetValidation();
      },
      
      editItem (id) {
        axios.put('/admin/employee/update'+id).then(({data}) => {
          console.log('Success');
          this.initialize();
        })
      },

      deleteItem (item) {
        this.dialogDelete = true
        this.payload = item
      },

      deleteItemConfirm (id) {
        axios.delete('/admin/emloyee/destroy/'+this.payload.id, this.payload).then(({data}) => {
          console.log('Success');
          this.initialize();
          this.dialogDelete = false
        })
      },

      close () {
        this.payload= {}
        this.dialog = false
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
          axios.put('/admin/employee/update/'+this.payload.id, this.payload).then(({data}) => {
            this.initialize()
            this.close()
            // this.$toast.success('successfully updated!', {position:'bottom'})
          }).catch(error => {
            if(error.response.data.errors.email) {
              alert(error.response.data.errors.email)
            } else if (error.response.data.errors.phone) {
              alert(error.response.data.errors.phone)
            } else if (error.response.data.errors.password) {
              alert(error.response.data.errors.password)
            }
          })
        } else {
          axios.post('/admin/employee/create', this.payload).then(({data}) => {
            this.initialize()
            this.close()
          }).catch(error => {
              if(error.response.data.errors.email) {
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
        axios.put('/admin/employee/updateStatus/'+id).then(({data}) => {
          //console.log('Success');
          this.initialize();
        })
      },

      resetValidation() {
        this.payload.name =''
        this.payload.email = ''
        this.payload.phone = ''
        this.payload.position = ''
        this.$refs.form.resetValidation();
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