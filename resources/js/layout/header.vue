<template>
  <v-app-bar app fixed flat color="white" elevate-on-scroll elevation="4">
    <v-app-bar-nav-icon @click="$emit('handDrawer')"></v-app-bar-nav-icon>
    <v-toolbar-title>PCGarage</v-toolbar-title>
    <v-spacer></v-spacer>
    
    <admin-notification :notif="notifications" @markRead="markRead" @markAll="markAll"></admin-notification>
    
    <div class="text-center">
      <v-menu offset-y style="z-index: 10" rounded="0">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            elevation="0"
            v-bind="attrs"
            v-on="on"
            large
            depressed
            text
            rounded
            class="px-3"
            min-width="20"
          >
            <v-icon>mdi-account</v-icon>
            <!-- <v-avatar size="34">
              <img src="https://picsum.photos/500/300?image=40" alt="John" />
            </v-avatar> -->
            <v-icon small>mdi-chevron-down </v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item-group>
            <v-list-item @click="getAdmin">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Account</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </div>
    <v-dialog v-model="profileForm" max-width="500">
      <v-card>
        <v-card-title>
          Login Information
          <v-spacer></v-spacer>
          <v-tooltip bottom v-if="readOnly">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                text
                @click="readOnly=false"
              >
                <v-icon class="mr-1">mdi-square-edit-outline</v-icon>
                Edit
              </v-btn>
            </template>
            <span>Edit Profile</span>
          </v-tooltip>
          <v-btn v-else color="success">
            <v-icon class="mr-1">mdi-content-save</v-icon>
            Save
          </v-btn>
        </v-card-title>
        <v-card-text class="py-3">
          <v-row wrap>
            <v-col md="12" cols="12">
              <v-text-field
              :readonly="readOnly"
              :outlined="readOnly?false:true"
              v-model="user.email"
              dense
              label="Email"
              hide-details="auto"
              :filled="readOnly"
              ></v-text-field>
            </v-col>
            <v-col md="12" cols="12">
              <v-text-field
              :readonly="readOnly"
              :outlined="readOnly?false:true"
              dense
              v-model="password"
              label="Password"
              type="password"
              hide-details="auto"
              :filled="readOnly"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="profileForm=false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import AdminNotification from '@/components/global/notification/adminNotification.vue'
// import { component } from 'vue/types/umd';
export default {
  components: {
    AdminNotification
  },
  data: () => ({
    dialog: false,
    user: {
      email: ''
    },
    password: '',
    readOnly: true,
    profileForm: false,
    notifications: [],
    isCustomer: false,
    route: "",
  }),
  created() {
    this.notif()
  },
  methods: {
    logout() {
      this.$emit("logout");
    },
    notif() {
      axios.get(`/admin-api/admin-notification`).then(({data})=>{
        this.notifications = data
      })
    },
    markRead(item) {
      axios.put(`/admin-api/admin-notification/mark-read?id=${item.id}`).then(({data})=>{
        this.notif()
      })
    },
    markAll() {
      axios.put(`/admin-api/admin-notification/mark-read?all=true`).then(({data})=>{
        this.notif()
      })
    },
    getAdmin() {
      this.profileForm = true
      axios.get(`/admin-api/admin-info`).then(({data})=>{
        this.user = data
      })
    }
  },
  computed: {
    getUrl() {
      let url = this.$route.fullPath;
      let path = url.split("/admin");
      return path[1];
    },
  },
};
</script>
<style lang="scss" scoped>
  .card{
    cursor: pointer;
  }
</style>