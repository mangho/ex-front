<template>
  <v-container>
    <v-carousel class="round-deli">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>

    <v-layout row>
      <v-flex xs12>
        <v-btn color="info" @click="change()">change store</v-btn>
        {{count}}
      </v-flex>
      <v-flex xs12>
        <v-alert :value="true" type="success">This is a success alert.</v-alert>

        <v-alert :value="true" type="info">This is a info alert.</v-alert>

        <v-alert :value="true" type="warning">This is a warning alert.</v-alert>

        <v-alert :value="true" type="error">This is a error alert.</v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://via.placeholder.com/1920x600?text=1"
        },
        {
          src: "https://via.placeholder.com/1920x600?text=2"
        },
        {
          src: "https://via.placeholder.com/1920x600?text=3"
        },
        {
          src: "https://via.placeholder.com/1920x600?text=4"
        }
      ]
    };
  },
  created() {},
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    change() {
      this.$store.commit("increment");
    }
  }
};
</script>
<style>
/* .round-deli .v-btn__content .v-icon{
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background-color: white;
} */
</style>
