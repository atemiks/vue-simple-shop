<template>
    <section class="section-cart">
        <div class="container">
            <div class="section-header">
                <h1 class="section-title">Cart</h1>
            </div>

            <div v-if="!CART.length">
                Cart is empty. Go to
                <router-link :to="{ name: 'home' }">catalog</router-link>
                and add products
            </div>
            <v-cart-grid v-else></v-cart-grid>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import vCartGrid from '../components/v-cart-grid.vue';

export default {
    name: 'CartView',
    components: {
        vCartGrid,
    },
    computed: {
        ...mapGetters(['CART']),
    },
};
</script>
