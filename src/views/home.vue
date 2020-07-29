<template>
    <div>
        <v-parallax height="400" src="//www.evaci.top/source/static/photos/s15.jpg">
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 class="display-1 font-weight-thin mb-4">welcome</h1>
                </v-col>
            </v-row>
        </v-parallax>
        <v-row align="center" justify="space-around">
            <v-col class="text-center" cols="4">
                <h1 class="text-Heading-1 mb-4">Talk is cheap</h1>
                <h4 class>show you the work</h4>
            </v-col>
            <v-col class="text-center" cols="4">
                <h1 class="text-Heading-1 mb-4">Talk is cheap</h1>
                <h4 class>show you the work</h4>
            </v-col>
            <v-col class="text-center" cols="4">
                <h1 class="text-Heading-1 mb-4">Talk is cheap</h1>
                <h4 class>show you the work</h4>
            </v-col>
        </v-row>
        <v-parallax src="//www.evaci.top/source/static/images/bg/picbg1.jpg" height="150">
            <v-fade-transition>
                <v-overlay absolute opacity="0.6" z-index="-1" color="info"></v-overlay>
            </v-fade-transition>
             <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 class="text-Heading-1 mb-4">Talk is cheap</h1>
                    <h1 class="display-1 font-weight-thin mb-4">show you the work</h1>
                </v-col>
            </v-row>
        </v-parallax>
            <v-container>
                <carousel-list></carousel-list>
                <pro-list :showAll="false"/>
            </v-container>
    </div>
</template>

<script>
import proList from "@/components/pro-list.vue";
import carouselList from "@/components/carousel-list.vue";

export default {
    name: "home",
    components: {
        proList,
        carouselList
    },
};
</script>
