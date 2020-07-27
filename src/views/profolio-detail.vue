<template>
<div>
 <page-title :title="this.$route.query.title" coverColor="secondary" :src="this.$route.query.image" />
  <v-container>
          <div>blog detail</div>
      </v-container>
</div>
</template>

<script>
import pageTitle from "@/components/page-title.vue";
export default {
 components: {
        pageTitle,
    },
   mounted(){
   }
}
</script>

<style>

</style>