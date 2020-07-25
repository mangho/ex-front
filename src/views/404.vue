<template>
    <div>
        <v-container>
            <div class="d-flex flex-column align-center my-4">
                <div class="text-h1 font-weight-black">404!</div>
                <div class="text-h6">貌似来到了知识的荒原</div>
                <v-btn class="ma-2" outlined color="blue" @click="$router.back()">
                    <v-icon left>mdi-chevron-left</v-icon>返回
                </v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>