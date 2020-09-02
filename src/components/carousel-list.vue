<template>
    <div>
        <v-carousel cycle touchless height="400" show-arrows-on-hover hide-delimiter-background>
            <v-carousel-item v-for="(slide, i) in lists" :key="i" :src="slide.src">
               <v-hover v-slot="{ hover }">
                <v-row class="fill-height"  align="center" justify="center">
                    <v-overlay absolute :opacity="hover?0.1:0.4" z-index="-1" color="primary"></v-overlay>
                    <a  class="text-h3 white--text ca-title ma-3" @click="toDetail(slide)">{{ slide.title }}</a>
                </v-row>
               </v-hover>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
import data from "@/data/";
export default {
    name: "carouselList",
    data: () => ({
        items: [],
    }),
    mounted() {
        this.items = data.homePro;
    },
    computed: {
        lists: function () {
            return this.items.filter((i) => i.id < 3);
        },
    },
    methods: {
        toDetail(item) {
            this.$router.push({
                path: `/profolio-detail/${item.id}`,
                query: { title: item.title, image: item.src },
            });
        },
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
.ca-title{
    text-shadow: 0 4px 10px #111;
}
</style>