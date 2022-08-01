<template>
  <div class="text-center">
    <v-menu offset-y
    :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        icon
        v-bind="attrs"
        v-on="on"
        depressed>
        <v-badge
        bordered
        color="error"
        content="3"
        overlap>
            <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
        </v-btn>
      </template>
        <v-card
            width="350"
            max-height="90vh"
        >
            <v-toolbar
            dense
            flat
            style="position:sticky; top:0; background-color:white; z-index:2;"
            >
            <v-toolbar-title class="font-weight-medium">Notifications</v-toolbar-title>
            <!-- <v-spacer></v-spacer>
            <v-btn small color="primary" text @click="markAllAsRead" >
                mark as read
            </v-btn> -->
            </v-toolbar>
            <v-divider></v-divider>
            <v-list two-line>
                <v-list-item
                style="background: #607D8B; color: white;">
                    <v-list-item-avatar>
                    <v-icon
                        class="grey lighten-1"
                        dark
                    >
                        mdi-account-circle
                    </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title>
                        Test User
                    </v-list-item-title>
                    <v-list-item-subtitle class="white--text">
                        Made an order
                    </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-list-item-action-text class="white--text">
                            3m ago
                        </v-list-item-action-text>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item
                style="background: #ECEFF1;">
                    <v-list-item-avatar>
                    <v-icon
                        class="grey lighten-1"
                        dark
                    >
                        mdi-account-circle
                    </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title>
                        Test User
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Registered to the system
                    </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-list-item-action-text>
                            5m ago
                        </v-list-item-action-text>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item
                style="background: #ECEFF1;">
                    <v-list-item-avatar>
                    <v-icon
                        class="grey lighten-1"
                        dark
                    >
                        mdi-account-circle
                    </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title>
                        Test User
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Registered to the system
                    </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-list-item-action-text>
                            5m ago
                        </v-list-item-action-text>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
    data: () => ({
        items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
        ],
    }),
}
</script>