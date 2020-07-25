<template>
    <div>
        <div>home</div> 
        <pro-list />
    </div>
</template>

<script>
import proList from "@/components/pro-list.vue";

export default {
    name: "home",
    components: {
        proList,
    },
};
</script>
