<template>
    <div>
        <v-card>
            <v-card-title class="text-h5">
                Delete <span class="ml-2 text-capitalize">{{ data.model}}</span>!
            </v-card-title>
            <v-card-text class="text-center">
                <span class="text-subtitle-1" style="size:'30px'; font-weight:500;">
                    Are you sure you want to delete
                    <strong class="red--text">"{{ data.text }}"</strong>
                    {{ data.model }}?
                </span>
            </v-card-text>
            <v-card-actions class="mr-4">
                <v-spacer></v-spacer>
                <v-btn
                elevation="0"
                color="secondary"
                @click="cancel"
                >
                Cancel
                <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-btn
                color="error"
                elevation="0"
                @click="confirm"
                >
                Delete
                <v-icon>mdi-delete</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    props: {
        data: {}
    },
    methods: {
        cancel(){
            this.$emit('close')
        },
        confirm() {
            this.$emit('confirm')
        }
    }
  }
</script>