<template>
    <navbar />
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
    components:{
        Navbar,
    }
}
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .app {
        padding: 20px;
    }
</style>