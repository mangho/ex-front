<template>
    <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6">
            <v-hover v-slot:default="{ hover }">
            <v-card  :elevation="hover ? 6 : 0" :class="{ 'on-hover': hover }" :color="item.color" dark tile>
                <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="headline" v-text="item.title"></v-card-title>

                        <v-card-subtitle v-text="item.artist"></v-card-subtitle>
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
export default {
    name: "proList",
    data: () => ({
        icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
        items: [
            {
                color: "#1F7087",
                src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
                title: "Supermodel",
                artist: "Foster the People",
            },
            {
                color: "#952175",
                src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
                title: "Halcyon Days",
                artist: "Ellie Goulding",
            },
            {
                color: "#84D9C0",
                src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
                title: "Supermodel",
                artist: "Foster the People",
            },
            {
                color: "#77A3D1",
                src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
                title: "Halcyon Days",
                artist: "Ellie Goulding",
            },
            {
                color: "#29C32A",
                src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
                title: "Supermodel",
                artist: "Foster the People",
            },
            {
                color: "#EB743C",
                src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
                title: "Halcyon Days",
                artist: "Ellie Goulding",
            },
        ],
    }),
};
</script>
<style scoped>
.v-card {
  transition: all .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>