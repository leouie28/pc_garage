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
        v-if="count>0"
        bordered
        color="error"
        :content="count"
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
            <v-btn small color="primary" :disabled="count<=0?true:false" text v-if="notif.length>0">
                mark all as read
            </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list two-line v-if="notif.length>0">
                <template v-for="item in notif.slice().reverse()">
                    <v-list-item
                    :key="item.id"
                    @click="$router.push({path: '/admin/'+item.data.link}).catch(() => {}), $emit('markRead',item)"
                    :style="item.read_at==null?'background: #607D8B; color: white;':'background: #ECEFF1;'">
                        <v-list-item-avatar>
                            <v-icon
                                class="grey lighten-1"
                                dark
                            >
                                mdi-{{item.data.icon?item.data.icon:'account-circle'}}
                            </v-icon>
                        </v-list-item-avatar>

                        <v-list-item-content>
                        <v-list-item-title>
                            <span class="text-capitalize">{{item.data.name}}</span>
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
            <v-subheader v-else class="pa-4 d-flex justify-center">
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
        count: 0
    }),
    props: {
        notif: {
            type: Array,
            default: () => []
        }
    },
    watch: {
        notif: {
            handler() {
                let counter = 0
                this.notif.forEach(elem => {
                    if(elem.read_at==null){
                        counter++
                    }
                    this.count = counter
                });
            },immediate:true, deep:true
        }
    }
}
</script>