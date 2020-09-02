<template>
<div>
     <page-title :title="this.$route.query.title" coverColor="secondary" :src="this.$route.query.image" />
    <v-container>
        <v-breadcrumbs :items="items">
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item
                    :href="item.href&&item.href"
                    :disabled="item.disabled"
                >{{ item.text }}</v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>
        <div v-html="content"></div>
    </v-container>
</div>
</template>

<script>
import pageTitle from "@/components/page-title.vue";
import data from "@/data/";
export default {
     components: {
        pageTitle,
    },
    data: () => ({
        items: [
            {
                text: "Home",
                disabled: false,
                href: "/#/",
            },
            {
                text: "博客",
                disabled: false,
                href: "/#/blog",
            },
            {
                text: "",
                disabled: true,
            },
        ],
        content:''
    }),
    mounted() {
        this.items[2].text = this.$route.query.title;
        this.content=data.blogList.find(i=>i.id===this.$route.params.id).content
    },
};
</script>
<style>
</style>