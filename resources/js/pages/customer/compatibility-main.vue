<template>
    <div>
        <v-card elevation="0" color="transparent" class="mx-auto" max-width="1000">
            <v-card-title>
                <span class="text-h4">Compatibility Checker</span>
            </v-card-title>
            <v-card-text class="pt-0" @click="test">
                <v-card rounded="lg" elevation="0" min-height="120" class="mb-4">
                    <v-card-title class="d-flex justify-space-between">
                        <span>Processor</span>
                        <div class="d-flex">
                            <v-tooltip bottom color="primary">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    <v-icon color="primary">mdi-rotate-3d-variant</v-icon>
                                    </v-btn>
                                </template>
                                <span>Change component</span>
                            </v-tooltip>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </template>
                                <span>Remove Compoonent</span>
                            </v-tooltip>
                        </div>
                    </v-card-title>
                    <v-card-text class="text-center">
                        <v-chip outlined large>
                            <v-subheader>
                                AMD Ryzen 9 5300XZ 
                            </v-subheader>
                        </v-chip>
                    </v-card-text>
                </v-card>
                <v-card rounded="lg" elevation="0" min-height="120" class="mb-4">
                    <v-card-title class="d-flex justify-space-between">
                        <span>Graphics card</span>
                        <div class="d-flex">
                            <v-tooltip bottom color="primary">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    <v-icon color="primary">mdi-rotate-3d-variant</v-icon>
                                    </v-btn>
                                </template>
                                <span>Change component</span>
                            </v-tooltip>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </template>
                                <span>Remove Compoonent</span>
                            </v-tooltip>
                        </div>
                    </v-card-title>
                    <v-card-text class="text-center">
                        <v-chip outlined large>
                            <v-subheader>
                                ZOTAC RTX3090ti 12GB FORTNITE LIMITED EDITION 
                            </v-subheader>
                        </v-chip>
                    </v-card-text>
                </v-card>
                <v-card rounded="lg" color="transparent" elevation="0" min-height="120" class="btn-panel d-flex justify-center align-center">
                    <v-icon x-large class="panel-btn">mdi-plus</v-icon>
                    <span class="panel-btn">Add Component</span>
                </v-card>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" class="px-5" rounded>
                    Check Build
                    <v-icon class="ml-2">mdi-magnify</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    data: ()=> ({

    }),
    methods: {
        test() {

        }
    }
}
</script>
<style scoped>
.btn-panel {
    cursor: pointer !important;
    border: 2px dashed rgb(156, 156, 156) !important;
}
.btn-panel:hover {
    background: rgb(248, 248, 248) !important;
}
.panel-btn {
    font-size: 26px !important;
    color: rgb(156, 156, 156);
}
</style>