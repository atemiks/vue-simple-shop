<template>
    <div class="header-account">
        <router-link
            to="/cart"
            class="header-account-btn header-account-cart btn"
        >
            <span class="header-accout-text">Cart:</span>
            <span class="header-account-value">${{ CART_TOTAL }}</span>
            <span class="header-account-badge">{{ CART_COUNT }}</span>
        </router-link>
    </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from 'vuex';

export default {
    name: 'v-account',
    computed: {
        ...mapGetters(['CART_COUNT', 'CART_TOTAL']),
    },
};
</script>

<style lang="scss">
.header-account {
    &-cart {
        position: relative;
    }

    &-badge {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: red;
        transform: translate(-50%, -50%);
        font-size: 14px;
    }
}
</style>
