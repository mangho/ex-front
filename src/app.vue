<template>
    <v-app>
       <main-index/>
        <v-main>
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
import mainIndex from '@/components/main-index.vue'
export default {
    name: "App",
    components:{
        mainIndex
    },
    data: () => ({
       
    }),
};
</script>
