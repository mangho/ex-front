<template>
 <v-content>
      <HelloWorld/>
    </v-content>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    created(){
      this.$store.commit("setactivePage", { activePage: "Home" })
    }
  }
</script>
