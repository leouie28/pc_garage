<template>
  <v-app-bar app fixed flat color="white" elevate-on-scroll elevation="4">
    <v-app-bar-nav-icon @click="$emit('handDrawer')"></v-app-bar-nav-icon>
    <v-toolbar-title>PCGarage</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-badge
      :content="CART_COUNT"
      :value="CART_COUNT"
      color="primary"
      left
      overlap
      class="card"
    >
      <v-avatar @click="CART_COUNT?$router.push({name:'cart'}):''" class="mr-2" size="34">
        <v-icon size="30"> mdi-cart </v-icon>
      </v-avatar>
    </v-badge>
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
import { mapGetters } from "vuex";
export default {
  data: () => ({
    dialog: false,
    user: {},
    route: "",
  }),
  methods: {
    logout() {
      this.$emit("logout");
    },
    editItem(id) {
      axios.put("/admin-api/userprofile/update" + id).then(({ data }) => {
        console.log("Success");
        this.initialize();
      });
    },
    profileDialog() {
      this.formTitle = "User Profile";
      this.dialog = true;
    },
    getCartCount(){
      axios.get(`/customer-api/cart-count`).then(({data})=>{
        this.$store.dispatch("GET_CART_COUNT", data);
      })
    }
  },
  created(){
    if(localStorage.role=='customer'){
      this.getCartCount()
    }
  },
  computed: {
    ...mapGetters(["CART_COUNT"]),
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