<template>
    <div>
        <page-title title="文章" coverColor="secondary" />
        <v-container>
            <blog-list/>
        </v-container>
    </div>
</template>

<script>
import pageTitle from "@/components/page-title.vue";
import blogList from '@/components/blog-list.vue'
export default {
    components: {
        pageTitle,
		blogList
    },
};
</script>

<style>
</style>