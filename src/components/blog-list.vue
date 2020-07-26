<template>
    <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
            <v-hover v-slot:default="{ hover }">
                <v-card
                    :elevation="hover ? 2 : 0"
                    :class="{ 'on-hover': hover }"
                    v-ripple
                    tile
                    outlined
                >
                    <div class="d-flex flex-no-wrap">
                        <v-avatar
                            class="ma-3"
                            size="100"
                            tile
                            :class="{ 'title-hover': hover }"
                            @click="toDetail(item)"
                        >
                            <v-img :src="item.image"></v-img>
                        </v-avatar>
                        <div>
                            <v-card-title
                                class="headline"
                                :class="{ 'title-hover secondary--text': hover }"
                                color="primary"
                                @click="toDetail(item)"
                            >{{item.title}}</v-card-title>
                            <v-card-subtitle>{{item.time}}</v-card-subtitle>
                            <v-card-text class="d-flex">
                                <div
                                    class="mr-2 text-caption"
                                    v-for="(teck, index) in item.tag"
                                    :key="index"
                                >:{{teck}}</div>
                            </v-card-text>
                        </div>
                    </div>
                </v-card>
            </v-hover>
        </v-col>
    </v-row>
</template>

<script>
import { blogList } from "@/data/export.js";
export default {
    name: "proList",
    data: () => ({
        icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
        items: [],
    }),
    mounted() {
        this.items = blogList;
    },
    methods: {
        toDetail(item) {
            this.$router.push(`/blog-detail?id=${item.id}`).catch((e) => {
                console.log(e);
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.v-card {
    transition: all 0.1s ease-in-out;
}
.title-hover {
    cursor: pointer;
}
.v-card:not(.on-hover) {
    opacity: 0.9;
}
</style>