<template>
  <v-container>
    <v-carousel hide-controls 
    delimiter-icon="·"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

  </v-container>
</template>
<script>
export default {
  data () {
      return {
        items: [
          {
            src: 'https://via.placeholder.com/1920x600?text=1'
          },
          {
            src: 'https://via.placeholder.com/1920x600?text=2'
          },
          {
            src: 'https://via.placeholder.com/1920x600?text=3'
          },
          {
            src: 'https://via.placeholder.com/1920x600?text=4'
          }
        ]
      }
    },
    created(){
    }
}
</script>
