<template>
    <v-app>
       <main-layout/>
       
        <v-main class="pb-16 mb-16">
          <v-layout row>
            <v-flex xs12>
              <router-view/>
            </v-flex>
          </v-layout>
        </v-main>
    </v-app>
</template>

<script>
import mainLayout from '@/layouts/main-layout.vue'


export default {
    name: "App",
    components:{
        mainLayout,

    },
    data: () => ({
       
    }),
    mounted(){
        this.$vuetify.theme.dark=this.$store.state.dark===true
    }
};
</script>
<style lang="scss">
@import "@/styles/main.scss";
</style>