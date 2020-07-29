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
    data:()=>({
        items: [
            {
                text: "Home",
                disabled: false,
                href: "/#/",
            },
            {
                text: "作品集",
                disabled: false,
                href: "/#/profolio",
            },
            {
                text: "",
                disabled: true,
            },
        ],
    }),
  mounted() {
        this.items[2].text = this.$route.query.title;
    },
}
</script>

<style>

</style>