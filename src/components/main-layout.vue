<template>
    <div>
        <v-app-bar app color="cyan" dark elevate-on-scroll>
            <div class="d-flex align-center">
                <v-img
                    alt="兴之所至"
                    class="shrink mr-2"
                    contain
                    src="@/static/img/logo.png"
                    transition="scale-transition"
                    width="40"
                />
                <div>兴之所至</div>
            </div>
            <v-spacer></v-spacer>
            <div v-for="(item, index) in topMenus" :key="index">
                <v-btn text class="mr-2" v-if="item.action">
                    <span>{{item.title}}</span>
                </v-btn>
            </div>
        </v-app-bar>
        <v-footer dark app padless absolute>
            <v-card class="flex" flat tile>
                <v-card-title class="py-2 d-flex justify-center" style="border-bottom:1px solid #666">
                    <v-btn v-for="icon in bottomMenu" :key="icon.icon" class="mx-3" dark icon outlined>
                        <v-icon size="18px" :title="icon.title">{{ icon.icon }}</v-icon>
                    </v-btn>
                </v-card-title>

                <v-card-text class="py-2 d-flex grey--text text--lingten-2 text-caption">
                    <div class="align-center pr-2">Powered by vue & vuetify & 七牛 & 阿里云</div>
                    <div>|</div>
                    <div class="pl-2 font-weight-thin grey--text text--darken-1">粤ICP备16080922号</div>
                    <v-spacer></v-spacer>
                    <div>
                        {{ new Date().getFullYear() }} —
                        <strong>MTX</strong>
                    </div>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
export default {
    name: "mainIndex",
    data: () => ({
        drawer: null,
        topMenus: [
            {
                action: "layer-group",
                title: "首页",
                path: "/",
            },
            { divider: true },
            {
                action: "info-circle",
                title: "作品",
                path: "/profolio",
            },
            {
                action: "mask",
                title: "博客",
                path: "/blog",
            },
            {
                action: "mask",
                title: "关于",
                path: "/about",
            },
        ],
        bottomMenu: [
            {title:'微信',color:"#66BC54",icon:"mdi-wechat"},
            {title:'QQ',color:"#4FA5DB",icon:"mdi-qqchat"},
        ],
    }),
};
</script>

<style>
</style>