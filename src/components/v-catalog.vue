<template>
    <section class="section-catalog">
        <div class="container">
            <div class="section-header">
                <h2>Catalog</h2>
            </div>

            <div class="catalog-grid">
                <v-card
                    v-for="product in PRODUCTS"
                    :key="product.id"
                    :product_data="product"
                ></v-card>
            </div>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';
import vCard from './v-card.vue';

export default {
    name: 'v-catalog',
    components: {
        vCard,
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['PRODUCTS']),
    },
    methods: {
        ...mapActions(['fetchProducts']),
    },
    mounted() {
        this.fetchProducts();
    },
};
</script>

<style lang="scss">
.catalog-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 30px;
}
</style>
