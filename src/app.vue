<template>
    <v-app>
        <main-layout />

        <v-main class="pb-16 mb-16">
            <v-layout row>
                <v-flex xs12>
                    <transition :name="transitionName" mode="out-in"> 
                        <router-view />
                    </transition>
                </v-flex>
            </v-layout>
        </v-main>
    </v-app>
</template>

<script>
import mainLayout from "@/layouts/main-layout.vue";

export default {
    name: "App",
    components: {
        mainLayout,
    },
    data: () => ({
        transitionName: "fade",
    }),
    watch: {
        $route(to, from) {
            const toDepth = to.path.split("/").length;
            const fromDepth = from.path.split("/").length;
            this.transitionName = toDepth < fromDepth ? "" : "fade";
        },
    },
    mounted() {
        this.$vuetify.theme.dark = this.$store.state.dark === true;
    },
};
</script>
<style lang="scss">
@import "@/styles/main.scss";
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter {
  opacity: 0;
}
</style>