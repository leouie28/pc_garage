<template>
    <v-app-bar app
      :color="'#00897B'"
      elevate-on-scroll
      elevation="4"
      dark
    >
      <v-app-bar-nav-icon @click="$emit('handDrawer')"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="brown"
              size="48"
            >
              <span class="white--text text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="brown"
              >
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
      <!-- <v-toolbar-title>Your Buisness</v-toolbar-title>
      <v-spacer /> -->

      <!-- <v-col lg="6" cols="12" class="mt-5 mr-5">
        <v-form class="mt-5 mr-5">
          <v-text-field
          v-model="keyword"
          outlined
          dense
          placeholder="Search Here"
          append-icon="mdi-magnify"
          color="success"
          light
          background-color="#fff"
          @keydown.enter="$emit('search', keyword)"
          >
          </v-text-field>
        </v-form>
      </v-col> -->

      <!-- <v-btn
        color="success"
        elevation="2"
        icon
        large
        outlined
        style="background-color:#fff"
        @click="$router.push({name: 'globalsearch'})"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <!-- <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on" style="cursor:pointers;" class="mx-5 mr-10">
            <v-badge offset-x="10" offset-y="10" color="red" content="5">
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </span>
        </template>
        <v-list three-line width="250">
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-menu> -->

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
       user: {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
      },
     
    }),
  }
</script>