<template>
  <v-footer height="auto" color="grey darken-4 pt-3">
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link" color="white" flat round>{{ link }}</v-btn>
      <v-flex text-xs-center xs12 my-1>
        <v-btn
          v-for="(item,index) in icons"
          :key="index"
          @click="footerBtn(item)"
          flat
          large
          outline
          icon
          dark
        >
          <fa-icon :icon="['fab', item.icon]" size="lg"/>
        </v-btn>
      </v-flex>
      <v-flex grey darken-3 py-1 text-xs-center white--text xs12>
        &copy;2019 —
        <strong>Mangho</strong>
      </v-flex>
    </v-layout>
    <v-snackbar top v-model="snackbar.snackbar" :color="snackbar.color" :timeout="snackbar.timeout">
      {{ snackbar.text }}
      <v-btn icon @click="snackbar.snackbar = false"><fa-icon icon="times-circle" size="lg"></fa-icon></v-btn>
    </v-snackbar>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    icons: [
      { icon: "google-plus-g", action: "to be android", color: "error" },
      { icon: "facebook-f", action: "to be android", color: "info" },
      { icon: "weixin", action: "to be android", color: "success" },
      { icon: "weibo", action: "to be No.1", color: "cyan" }
    ],
    snackbar: {
      snackbar: false,
      color: "",
      timeout: 5000,
      text: ""
    }
  }),
  methods: {
    footerBtn(item) {
        this.snackbar={
            text:'you have click "'+item.icon+'"',
            color : item.color,
            snackbar : true
        }
    //   this.snackbar.text = item.action;
    //   this.snackbar.color = item.color;
    //   this.snackbar.snackbar = true;
    }
  }
};
</script>