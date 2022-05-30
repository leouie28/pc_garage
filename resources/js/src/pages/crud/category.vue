<template>
 
  <div class='Category'>
   <v-row>
     <v-col lg="12">
     
         <v-card rounded="24" elevation="2" flat>
         
  <v-data-table
    dense
    :headers="headers"
    :items="category"
    :search="search"
    class="elevation-1">

    <template v-slot:top> 
      <v-toolbar flat>

        <v-toolbar-title>Category</v-toolbar-title> 
           <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
                    <v-spacer></v-spacer>
                <v-col sm="3">
                 <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  class="mr-4"
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

               <v-dialog v-model="dialog" max-width="500px" persistent>
                  <v-card>
                      <v-card-title >
                       <span class="text-h5">{{ Title }}</span>    
                      </v-card-title>
                        <v-card-text>
                           <v-container>
                              <v-form ref="form" v-model="valid" lazy-validation>
                                <v-row> 
                                         <v-col cols="12" sm="12">
                                           <v-text-field
                                              v-model="payload.name"
                                              :rules="nameRules"
                                               required
                                                label ="Category Name"
                                                    ref="name"
                                                    hint="For example Accessories, Gadgets and etc."
                                                         outlined>
                                                         </v-text-field> </v-col>                                                                   
                                  </v-row>                       
                              </v-form>
                              <v-card-actions>
                             <v-spacer></v-spacer>
                                 <v-btn  @click="save" depressed color="success" align="center" justify="space-around"  >Save</v-btn>
                                 <v-btn  @click="cancelDialog" depressed color="error">Cancel</v-btn>
                            </v-card-actions> 
                           </v-container>
                        </v-card-text>
                            
                                              
                   
                  </v-card>
             </v-dialog>

              <v-dialog v-model="dialogDelete" max-width="390px">
                  <v-card>
                      <v-card-title class="text-h5">Are you sure you want to delete this category?</v-card-title>
                      <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="success" @click="deleteItemConfirm"  >OK</v-btn>
                       <v-btn color="error" @click="closeDelete">Cancel</v-btn>
                      <v-spacer></v-spacer>
                      </v-card-actions>
                  </v-card>
                </v-dialog>
    
    </v-toolbar>  
    </template>
   
        <template v-slot:[`item.created_at`]="{ item }">  
        {{ moment(item.created_at).format("MMM Do YYYY")  }}
              <!-- {{ moment(item.created_at).format("ll")  }} -->
                 </template>     
      <template v-slot:[`item.cat_act`]="{ item }">
              <v-icon
                  small
                  class="mr-2"
                  @click="editDialog(item)"
              >
                  mdi-pencil
              </v-icon>
              <v-icon
                  small
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
import Swal from 'sweetalert2'
  export default {
    data: () => ({
      
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      dialog: false,
      search: '',
      dialogDelete: false,
      defaultItem: {
        name: '',
      },
     
      headers: [
         { text: 'ID', value: 'id', sortable: false},
         { text: 'Category Name', value: 'name',},
        {text: 'Date Created', value: 'created_at'},
         { text: 'Action', value: 'cat_act', sortable:false, align:'center',},
        
       
      ],
       category:[],
       payload:{},
      Title: 'Add Category',


      
    }),

    

    
     created () {
      //this.$toast.success('Successfully updated client status', {position: 'bottom'});
      this.initialize()
    },

    methods:{

      initialize () {
        axios.get('/admin/category').then(({data}) => {
          this.category = data;
          this.resetValidation();
        })
      },

    
       addDialog(){
        this.Title = 'Add Category'
        this.dialog = true
        this.resetValidation();

        
      },

      cancelDialog(){
            
        this.dialog = false

      },

      editDialog(text){
        this.dialog = true
        this.Title = 'Edit Category'
        this.payload = JSON.parse(JSON.stringify(text))
        
      
      },
      
      deleteItem(item)
      {
        this.dialogDelete =  true
        this.payload = item
      },

      closeDelete(){
         this.dialogDelete = false
      },

      deleteItemConfirm (id) {
          axios.delete('/admin/category/destroy/'+this.payload.id, this.payload).then(({data}) => {
          console.log('Success');
          this.resetValidation();
          this.initialize();
          this.dialogDelete = false
        })
      },


       editItem (id) {
        axios.put('/admin/category/update'+id).then(({data}) => {
          console.log('Success');
          this.initialize();
        })
      },

      save () { 
             if(this.payload.id) {
             axios.put('/admin/category/update/'+this.payload.id, this.payload).then(({data}) => {
             this.initialize()
             this.close()
            
            // this.$toast.success('successfully updated!', {position:'bottom'})
               }).then(response =>{

                   Swal.fire({
                   icon: 'success',
                   text: 'Category Updated!',
                         })
                 
               }).catch(error => {
                   if(error.response.data.errors.name = this.payload.name) {

                       Swal.fire({
                       icon: 'error',
                       text: 'Category has been added already!',
                         })
                   
                  }
               })
        }
         else {
          
          axios.post('/admin/category/create', this.payload).then(({data}) => {
            this.initialize()
            this.close()
          }).then(response =>{

                   Swal.fire({
                   icon: 'success',
                   text: 'Category Saved!',
                         })
                 
               }).catch(error => {
             if(error.response.data.errors.name = this.payload.name) {

                Swal.fire({
                   icon: 'error',
                  text: 'Category has been added already!',
                         })
             
              }
            })

        }
        
      },

      resetValidation() {
        this.payload.name =''
        this.payload.id = ''
        this.$refs.form.resetValidation();
      },

    close () {
       
        this.payload= {}
        this.dialog = false
        this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1

        })
      },
    },
    
    
      
  }
</script>




