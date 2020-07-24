<template>
    <v-app>
       <main-layout/>
        <home-banner></home-banner>
        <v-main class="pb-16 mb-16">
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <router-view/>
            </v-flex>
          </v-layout>
        </v-container>
        </v-main>
    </v-app>
</template>

<script>
import mainLayout from '@/components/main-layout.vue'
import homeBanner from "@/components/home-banner.vue";

export default {
    name: "App",
    components:{
        mainLayout,
        homeBanner

    },
    data: () => ({
       
    }),
};
</script>
<style>
@impoort url(//at.alicdn.com/t/font_1965943_yj4uqgnfhh.css)
</style>