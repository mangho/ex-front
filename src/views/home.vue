<template>
    <div>
         <home-banner></home-banner>
        <v-container>

        <pro-list />
        </v-container>
    </div>
</template>

<script>
import homeBanner from "@/components/home-banner.vue";
import proList from "@/components/pro-list.vue";

export default {
    name: "home",
    components: {
        proList,
        homeBanner

    },
};
</script>
