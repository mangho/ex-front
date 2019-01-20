<template>
  <v-content>
    <HelloWorld/>
    <v-layout row justify-center>
      <v-btn color="primary" dark @click="dialog = true">Open Dialog</v-btn>
      <v-dialog v-model="dialog" persistent max-width="450">
        <v-card>
          <v-card-title class="headline grey lighten-2">Use Google's location service?</v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-grey darken-4" flat @click="dialog = false">Disagree</v-btn>
            <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-content>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data: () => ({
    dialog: false
  }),
  created() {
    this.$store.commit("setactivePage", { activePage: "home" });
  }
};
</script>
