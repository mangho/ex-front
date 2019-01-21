<template>
  <v-container>
    <v-carousel interval="10000" class="round-deli">
      <v-carousel-item v-for="(item,i) in items" :key="i">
        <v-img :src="item.src" :lazy-src="item.lazySrc" class="grey lighten-2" v-if="item.src">
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey  darken-3"></v-progress-circular>
          </v-layout>
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <v-layout row v-if="testData">{{testData}}</v-layout>
    <v-layout row>
      <v-flex xs12>
        <div class="testContent">
          <v-btn color="blue" @click="testFn()">test</v-btn>
          <v-btn color="error" @click="changePic()">change pic</v-btn>
          <v-btn color="info" @click="change()">change store</v-btn>
          {{count}}
        </div>
        <v-alert :value="true" type="success">This is a success alert.</v-alert>

        <v-alert :value="true" type="info">This is a info alert.</v-alert>

        <v-alert :value="true" type="warning">This is a warning alert.</v-alert>

        <v-alert :value="true" type="error">This is a error alert.</v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import "@/assets/css/base.css";
export default {
  data: () => ({
    testData: "",
    items: [
      {
        src: "",
        lazySrc: ""
      },
      {
        src: "",
        lazySrc: ""
      },
      {
        src: "",
        lazySrc: ""
      },
      {
        src: "",
        lazySrc: ""
      }
    ],
    imgNum: ""
  }),
  created() {
    this.changePic();
    this.$store.commit("setactivePage", { activePage: "about" });
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    change() {
      this.$store.commit("increment");
      // console.log(`%c custom console.log %c test-demo v0.0.1 %c`,"background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff","background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;color: #fff","background:transparent")
    },
    changePic() {
      this.imgNum = Math.floor(Math.random() * 101 + 10);
      this.items.forEach(v => {
        v.src = "https://picsum.photos/1280/600?image=" + this.imgNum;
        v.lazySrc = "https://picsum.photos/12/6?image=" + this.imgNum;
        this.imgNum++;
      });
    },
    testFn() {
      var resOk = {
        status: "1",
        msg: "OK",
        errMsg: ""
      };
      var news = { data: [] };
      var data = Object.assign(resOk, news);
      this.testData = data;
    }
  }
};
</script>
