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
      <v-toolbar color="teal darken-4" fixed dark>
        <v-btn color="dark" class="hidden-sm-and-up" outline round @click.stop="drawer = !drawer">menu</v-btn>

        <router-link to="/"><v-img :src="require('@/assets/logo.svg')" class="my-1" contain height="40" width="40"></v-img></router-link>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <template v-for="(item, index) in items">
            <v-btn flat v-if="item.action" :key="item.title" @click="toPage(item)">{{item.title}}</v-btn>
            <v-divider v-else-if="item.divider" :key="index"></v-divider>
          </template>
        </v-toolbar-items>
      </v-toolbar>
      <div id="scrolling-techniques" class="scroll-y mt-5" style="height:100%;">
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <router-view/>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script>
import http from "@/api/index";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
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
          title: "Help",
          path: "/help"
        }
      ]
    };
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
