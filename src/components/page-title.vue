<template>
  <div>
       <v-parallax :src="src" :height="height">
            <v-fade-transition>
                <v-overlay absolute :opacity="opacity" z-index="-1" :color="coverColor"></v-overlay>
            </v-fade-transition>
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 class="text-Heading-1 mb-4 top-title">{{title}}</h1>
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
        height:{
             type:String,
            default:'120'
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
.top-title{
    text-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}
</style>