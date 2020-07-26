<template>
    <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6">
            <v-hover v-slot:default="{ hover }">
                <v-card
                    :elevation="hover ? 6 : 0"
                    :class="{ 'on-hover': hover }"
                    :color="item.color"
                    dark
                    v-ripple
                    tile
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="headline" v-text="item.title"></v-card-title>

                            <v-card-subtitle>
                                <v-chip
                                    class="my-1 mr-1"
                                    color="white"
                                    outlined
                                    x-small
                                    v-for="(teck, index) in item.tag"
                                    :key="index"
                                >{{teck}}</v-chip>
                            </v-card-subtitle>
                        </div>

                        <v-avatar class="ma-3" size="125" tile>
                            <v-img :src="item.src"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
            </v-hover>
        </v-col>
    </v-row>
</template>

<script>
import { homePro } from "@/data/local_data.js";
export default {
    name: "proList",
    data: () => ({
        icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
        items: [],
    }),
    mounted() {
        this.items = homePro;
    },
};
</script>
<style scoped>
.v-card {
    transition: all 0.3s ease-in-out;
}

.v-card:not(.on-hover) {
    opacity: 0.9;
}

.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}
</style>