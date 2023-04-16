<template>
    <v-header></v-header>

    <router-view />
</template>

<script>
import vHeader from './components/v-header.vue';

export default {
    name: 'App',
    components: {
        vHeader,
    },
};
</script>

<style lang="scss"></style>
