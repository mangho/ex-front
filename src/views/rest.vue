<template>
  <v-container>
    <v-layout row v-if="testData">{{testData}}</v-layout>
    <v-layout row>
      <v-flex>
        <v-btn color="pink" dark @click="initData()">init data</v-btn>
        <v-btn color="purple" dark @click="getLocalNews()">get News</v-btn>
        <v-btn color="blue" dark @click="createLocalNews()">create News</v-btn>
        <v-btn color="red" dark @click="updateLocalNews()">update</v-btn>
        <v-btn color="red" dark @click="deleteLocalNews()">delete select</v-btn>
      </v-flex>
      <v-flex>
        <v-select v-model="selectValue" :items="items" label="Standard"></v-select>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs6>
        <v-select
          v-model="select"
          :hint="`${select.state}, ${select.abbr}`"
          :items="demoItems"
          item-text="state"
          item-value="abbr"
          label="Select"
          return-object
          persistent-hint
          single-line
        ></v-select>
      </v-flex>
    </v-layout>
    <!-- local news -->
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 d-flex>
          <v-layout wrap v-if="newsItems">
            <v-flex xs4 v-for="(item,i) in newsItems" :key="i">
              <v-card>
                <v-img :src="item.images"></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-chip
                      color="green"
                      text-color="white"
                      small
                      disabled
                      v-for="(part,k) in item.tag"
                      :key="k"
                    >{{part}}</v-chip>
                  </div>
                  <h3 class="headline mb-0">{{item.title}}</h3>
                  <div>{{item.abstract}}</div>
                </v-card-title>

                <v-card-actions>
                  <v-btn flat color="primary">View</v-btn>
                  <v-btn flat color="orange">{{item.views}}</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    select: { state: "Florida", abbr: "FL" },
    demoItems: [
      { state: "Florida", abbr: "FL" },
      { state: "Georgia", abbr: "GA" },
      { state: "Nebraska", abbr: "NE" },
      { state: "California", abbr: "CA" },
      { state: "New York", abbr: "NY" }
    ],
    items: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    selectValue: "0",
    newsItems: "",
    testData: ""
  }),
  created() {
    this.$store.commit("setactivePage", { activePage: "rest" });
  },
  computed: {},
  watch: {},
  methods: {
    initData() {
      Object.assign(this.$data, this.$options.data());
    },
    async getLocalNews() {
      this.newsItems = "";
      let res;
      res = await this.$api.local.getNews();
      this.newsItems = res;
    },
    async createLocalNews() {
      let data = {
        title: "创建示例标题",
        abstract: "创建示例摘要",
        desc:
          "创建示例正文示例正文示例正文示例正文，创建示例正文示例正文示例正文示例正文示例正文示例正文。",
        tag: "创建",
        views: 9554,
        images: "http://dummyimage.com/200x388/e979f2&text=sl"
      };
      let res = await this.$api.local.createNews(data);
      this.getLocalNews();
    },
    async updateLocalNews() {
      let data = {
        id: this.selectValue,
        title: "更新示例标题",
        abstract: "更新示例摘要",
        desc:
          "更新示例正文示例正文示例正文示例正文，更新示例正文示例正文示例正文示例正文示例正文示例正文。",
        tag: "更新",
        views: 9554,
        images: "http://dummyimage.com/200x388/e979f2&text=sl"
      };
      let res;
      try {
        res = await this.$api.local.updateNews(data);
        this.newsItems = res;
      } catch (e) {
        console.log(e)
      }
    },
    async deleteLocalNews(id) {
      let data = {
        id: this.selectValue
      };
      let res = await this.$api.local.deleteNews(data);
      this.getLocalNews();
    }
  }
};
</script>