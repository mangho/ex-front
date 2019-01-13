<template>
  <v-app>
    <v-navigation-drawer dark class="blue-grey" v-model="drawer" fixed temporary>
      <v-list class="pa-1"></v-list>
      <v-list class="pt-0" dense>
        <template v-for="(item, index) in items">
          <v-list-tile v-if="item.action" :key="item.title" @click="toPage(item)">
            <v-list-tile-action>
              <fa-icon :icon="item.action" fixed-width/>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-else-if="item.divider" :key="index"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>

    <div class="hide-overflow" style="position: relative;">
      <v-toolbar color="indigo" fixed dark>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
        <router-link to="/"><v-img :src="require('@/assets/logo.svg')" class="my-1" contain height="40" width="40"></v-img></router-link>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <template v-for="(item, index) in items">
            <v-btn flat v-if="item.action" :class="{'btn-active':activePage==item.title}" :key="item.title" @click="toPage(item)">{{item.title}}</v-btn>
            <v-divider v-else-if="item.divider" :key="index"></v-divider>
          </template>
        </v-toolbar-items>
      </v-toolbar>
      <div id="scrolling-techniques" class="scroll-y mt-5">
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <router-view/>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  <comfooter/>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import http from "@/api/index";
import comfooter from "./components/comfooter";
export default {
  name: "App",
  components: {
    comfooter
  },
  data:()=> ({
      drawer: null,
      items: [
        {
          action: "layer-group",
          title: "Home",
          path: "/"
        },
        { divider: true },
        {
          action: "info-circle",
          title: "About",
          path: "/about"
        },
        {
          action: "mask",
          title: "Components",
          path: "/help"
        }
      ]
    }),
  created(){
    
  },
  mounted(){

  },
  computed:{
     count() {
      return this.$store.state.count;
    },
    activePage() {
      return this.$store.state.activePage;
    }
  },
  methods: {
    toPage(item) {
      if (item.path) {
        this.$router.push(item.path);
      }
    }
  }
};
</script>
<style>
.btn-active .v-btn__content{
  border-bottom: 2px solid #2196f3;
  color: #2196f3;
}
</style>
