<template>
  <div>
       <page-title title="作品集" height="300"  coverColor="secondary" src="//www.evaci.top/source/static/images/bg/codbg1s-1.jpg"/>
      <v-container>
           <pro-list showAll="true" />
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