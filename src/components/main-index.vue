<template>
    <v-app-bar app color="primary" dark elevate-on-scroll src="@/static/img/index-bg.jpg">
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
    }),
};
</script>

<style>
</style>