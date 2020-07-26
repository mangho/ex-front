<template>
  <div>
       <v-parallax :src="src" height="120">
            <v-fade-transition>
                <v-overlay absolute :opacity="opacity" z-index="-1" :color="coverColor"></v-overlay>
            </v-fade-transition>
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 class="text-Heading-1 mb-4">{{title}}</h1>
                </v-col>
            </v-row>
        </v-parallax>
  </div>
</template>

<script>
export default {
    props:{
        title:'',
        src:{
            default:require('@/static/img/bg/picbg1.jpg')
        },
        opacity:{
            type:String,
            default:'0.6'
        },
        coverColor:{
            type:String,
            default:'info'
        }

    }
}
</script>

<style>

</style>