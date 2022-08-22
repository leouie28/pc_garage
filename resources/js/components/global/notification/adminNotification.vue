<template>
  <div class="text-center">
    <v-menu offset-y
    :close-on-content-click="true">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        icon
        v-bind="attrs"
        v-on="on"
        depressed>
        <v-badge
        v-if="notif.length>0"
        bordered
        color="error"
        :content="notif.length"
        overlap>
            <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
        <v-icon v-else>mdi-bell-outline</v-icon>
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
            <v-spacer></v-spacer>
            <v-btn small color="primary" text v-if="notif.length>0">
                mark all as read
            </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list two-line v-if="notif.length>0">
                <template v-for="item in notif">
                    <v-list-item
                    :key="item.id"
                    @click="$router.push({path: '/admin/'+item.data.link}).catch(() => {})"
                    :style="item.read_at==null?'background: #607D8B; color: white;':'background: #ECEFF1;'">
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
                            {{item.data.name}}
                        </v-list-item-title>
                        <v-list-item-subtitle :class="item.read_at==null?'white--text': ''">
                            <span class="text-capitalize">{{item.data.text}}</span>
                        </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-list-item-action-text :class="item.read_at==null?'white--text': ''">
                                {{moment(item.created_at).fromNow()}}
                            </v-list-item-action-text>
                        </v-list-item-action>
                    </v-list-item>
                </template>
            </v-list>
            <v-subheader v-else class="pa-4 mx-auto">
                No notification!
            </v-subheader>
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
    props: {
        notif: {
            type: Array,
            default: () => []
        }
    },
}
</script>