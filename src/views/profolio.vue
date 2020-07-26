<template>
  <div>
       <page-title title="作品集" coverColor="secondary" />
      <v-container>
           <pro-list />
      </v-container>
  </div>
</template>

<script>
import pageTitle from "@/components/page-title.vue";
import proList from "@/components/pro-list.vue";
export default {
    name: "home",
    components: {
        pageTitle,
        proList,
    },
};
</script>

<style>

</style>