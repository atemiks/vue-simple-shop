<template>
    <header class="header-box">
        <div class="header-grid container">
            <v-logo></v-logo>
            <v-nav></v-nav>
            <v-account></v-account>
        </div>
    </header>
</template>

<script>
// @ is an alias to /src
import vLogo from './v-logo.vue';
import vNav from './v-nav.vue';
import vAccount from './v-account.vue';

export default {
    name: 'v-header',
    components: {
        vLogo,
        vNav,
        vAccount,
    },
};
</script>

<style lang="scss">
.header {
    &-box {
        position: sticky;
        z-index: 99;
        top: 0;
        padding-top: 15px;
        padding-bottom: 15px;
        background-color: rgba($color: #fff, $alpha: 0.75);
        backdrop-filter: blur(3px);
    }

    &-grid {
        display: grid;
        grid-template-columns: max-content auto max-content;
        gap: 30px;
        align-items: center;
    }
}
</style>
