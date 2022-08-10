<template>
  <div>
    <v-row>
      <v-col
      cols="12"
      class="mx-auto"
      md="10"
      >
        <v-card elevation="0" max-width="700" class="mx-auto">
            <v-card-title>
              My Orders 
              <v-icon class="ml-2">mdi-format-list-checks</v-icon>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="grey lighten-5">
              <v-tabs grow v-model="tab" background-color="transparent">
                <v-tab
                v-for="tab in tabs"
                :key="tab.name"
                @click="route(tab.name)">
                  <v-badge
                  v-if="tab.content>0"
                  :color="tab.color"
                  :content="tab.content">
                    <h5>{{ tab.name }}</h5>
                  </v-badge>
                  <h5 v-else>{{ tab.name }}</h5>
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab" class="grey lighten-5">
                <v-tab-item>
                  <pending></pending>
                </v-tab-item>
                <v-tab-item >
                  <delivery></delivery>
                </v-tab-item>
                <v-tab-item >
                  <received></received>
                </v-tab-item>
              </v-tabs-items>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Pending from '@/components/customer/order/pending.vue'
import Delivery from '@/components/customer/order/delivery.vue'
import Received from '@/components/customer/order/received.vue'
export default {
  components: {
    Pending,
    Delivery,
    Received
  },
  data () {
    return {
      tab: 0,
      tabs: [
        {
          name: 'pending',
          color: 'blue-grey',
          content: 0,
        },
        {
          name: 'delivery',
          color: 'primary',
          content: 0
        },
        {
          name: 'received',
          color: 'success',
          content: 0
        }
      ]
    }
  },
  mounted() {
    this.orderStat()
  },
  methods: {
    route(link) {
      let params = JSON.parse(JSON.stringify(this.$route.query));
      console.log(params)
      params.link = link
      this.$router.replace({ query: params }).catch(() => {})
    },
    orderStat() {
      axios.get(`/customer-api/order-stat`).then(({ data }) => {
        this.tabs.forEach((elem, index) => {
          if(elem.name=='pending'){
            this.tabs[index].content = data.pending
          }else if(elem.name=='delivery'){
            this.tabs[index].content = data.delivery
          }
        });
      });
      let params = JSON.parse(JSON.stringify(this.$route.query));
      if(params.link=='received'){
        this.tab = 2
      }else if(params.link=='delivery'){
        this.tab = 1
      }else{
        this.tab = 0
      }
    }
  },
  computed: {
    // curlink() {
    //   let params = JSON.parse(JSON.stringify(this.$route.query));
    //   if(params.link=='received'){
    //     this.tab = 2
    //   }else if(params.link=='delivery'){
    //     this.tab = 1
    //   }else{
    //     this.tab = 0
    //   }
    // }
  }
}
</script>
<style>
.text-max-width{
    max-width: 360px !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>