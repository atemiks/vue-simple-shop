<template>
    <div class="cart-grid">
        <v-cart-item
            v-for="item in CART"
            :key="item.id"
            :product_data="item"
        ></v-cart-item>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import vCartItem from './v-cart-item.vue';

export default {
    name: 'v-cart-grid',
    components: {
        vCartItem,
    },
    computed: {
        ...mapGetters(['CART']),
    },
};
</script>

<style lang="scss">
.cart {
    &-grid {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
}
</style>
