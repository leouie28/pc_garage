<template>
  <v-app-bar app fixed flat color="white" elevate-on-scroll elevation="4">
    <v-app-bar-nav-icon @click="$emit('handDrawer')"></v-app-bar-nav-icon>
    <v-toolbar-title>PCGarage</v-toolbar-title>
    <v-spacer></v-spacer>
    
    <admin-notification :notif="notifications"></admin-notification>
    
    <div class="text-center">
      <v-menu offset-y style="z-index: 10" rounded="0">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            elevation="0"
            light
            v-bind="attrs"
            color="white"
            v-on="on"
            large
            class="px-2"
            rounded
          >
            <v-avatar size="34">
              <img src="https://picsum.photos/500/300?image=40" alt="John" />
            </v-avatar>
            <div class="ml-1 font-weight-bold">{{ }}</div>
            <v-icon> mdi-chevron-down </v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item-group>
            <v-list-item @click="$router.push('profile')">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  @click="$router.push({ path: 'profile' }).catch(() => {})"
                  :class="getUrl == route ? 'active' : ''"
                  >Profile</v-list-item-title
                >
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
    user: {},
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