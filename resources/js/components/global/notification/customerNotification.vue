<template>
    <div>
        <v-menu
        open-on-hover
        left
        offset-y
        >
            <template v-slot:activator="{ on, attrs }">
                <v-list-item v-on="on" v-bind="attrs">
                    <v-list-item-icon>
                        <v-icon>mdi-bell</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Notification
                        <v-badge
                        class="ml-1"
                        color="error"
                        content="3"
                        ></v-badge>
                    </v-list-item-title>
                </v-list-item>
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
                <v-spacer></v-spacer>
                <v-btn small color="primary">
                    mark all as read
                </v-btn>
                </v-toolbar>
                <v-divider></v-divider>
                <v-list two-line>
                    <template v-for="n in 3">
                        <v-list-item
                        :key="n"
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
                                Admin
                            </v-list-item-title>
                            <v-list-item-subtitle class="white--text">
                                <span class="text-capitalize">Confirm your order</span>
                            </v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-list-item-action-text class="white--text">
                                    5m ago
                                </v-list-item-action-text>
                            </v-list-item-action>
                        </v-list-item>
                    </template>
                </v-list>
                <!-- <v-subheader v-else class="pa-4 mx-auto">
                    No notification!
                </v-subheader> -->
            </v-card>
        </v-menu>
    </div>
</template>