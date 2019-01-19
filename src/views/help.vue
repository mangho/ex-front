<template>
  <v-container class="help">
    <h1>This is an help page
      <fa-icon :icon="['fas', 'spinner']" spin fixed-width/>
    </h1>

    <h3>store count:{{count}}</h3>
    <h2 v-if="noData" class="test-color-1">no data</h2>
    <h2 v-else>{{msg}}</h2>
    <v-btn
      :loading="loadingPost"
      :disabled="loadingPost"
      round
      color="primary"
      @click="getMsg()"
    >get post</v-btn>
    <v-btn
      :loading="loadingPhoto"
      :disabled="loadingPhoto"
      round
      dark
      color="green"
      @click="getImg()"
    >get photo placeholder</v-btn>
    <v-btn round dark color="purple" @click="getPicsum()">get picsum</v-btn>
    <v-btn round dark color="blue" @click="getlocalTest()">get local news</v-btn>
    <v-btn round dark color="dark" @click="initData()">init data</v-btn>
    <v-btn round dark color="red" @click="customFn()">custom function</v-btn>
    <!-- picsum pic -->
    <v-layout row wrap v-if="picN">
      <v-flex v-for="n in picN" :key="n" xs4 d-flex>
        <v-card flat tile class="d-flex">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * imgNum + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * imgNum + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <!--news sheet -->


    <!-- local news -->
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 d-flex>
          <v-layout wrap v-if="newsItems">
            <v-flex xs3 v-for="(item,i) in newsItems" :key="i">
              <v-card>
                <v-img :src="item.images"></v-img>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{item.title}}</h3>
                    <div>{{item.desc}}</div>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <v-btn flat color="orange">{{item.tag}}</v-btn>
                  <v-btn flat color="orange">{{item.views}}</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- placeholder pic -->
    <v-layout row wrap>
      <v-flex v-for="item in img" :key="item.id" xs4 d-flex>
        <v-card flat tile class="d-flex">
          <v-img
            :src="item.url"
            :lazy-src="item.thumbnailUrl"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import fns from "@/assets/js/common";
export default {
  data: () => ({
    loaderPost: null,
    loadingPost: false,
    loaderPhoto: null,
    loadingPhoto: false,
    newsItems: "",
    msg: "",
    img: "",
    imgNum: "",
    picN: ""
  }),
  created() {
    this.getMsg();
    this.getPicNum;
  },
  watch: {
    loaderPost(v) {
      if (!v) {
        this.loadingPost = false;
      } else {
        this.loadingPost = true;
      }
    },
    loaderPhoto(v) {
      if (!v) {
        this.loadingPhoto = false;
      } else {
        this.loadingPhoto = true;
      }
    }
  },
  created() {
    this.$store.commit("setactivePage", { activePage: "Components" });
    fns.fnTwo();
  },
  computed: {
    noData() {
      if (this.msg) {
        return false;
      } else {
        return true;
      }
    },
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    initData() {
      Object.assign(this.$data, this.$options.data());
    },
    customFn(){
      fns.fnOne();
    },
    async getMsg() {
      this.loaderPost = "loading";
      this.msg = "";
      let res;
      try {
        res = await this.$api.jsonplaceholder.getPosts1();
      } catch (e) {
        console.log(e);
      }
      this.loaderPost = null;
      this.msg = res.title;
      this.loaderPost = null;
    },
    getPicNum() {
      this.imgNum = Math.floor(Math.random() * 11);
    },
    async getPicsum() {
      this.picN = "";
      this.getPicNum();
      setTimeout(() => {
        this.picN = 9;
      }, 2);
    },
    async getImg() {
      this.loaderPhoto = "loading";
      this.img = "";
      let res;
      try {
        res = await this.$api.jsonplaceholder.getPhotos();
      } catch (e) {
        console.log(e);
      }
      this.loaderPhoto = null;
      let arr = [];
      for (let i = 0; i < 9; i++) {
        arr.push(res[i]);
      }
      this.img = arr;
      this.loaderPhoto = null;
    },
    async getlocalTest() {
      this.newsItems = "";
      let res;
      res = await this.$api.local.getNews();
      this.newsItems = res.data;

    }
  }
};
</script>
<style>
.test-color-1 {
  color: #139755;
}
</style>
