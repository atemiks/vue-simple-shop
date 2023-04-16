<template>
    <div class="card">
        <router-link
            class="card-thumbnail"
            :to="{
                name: 'single',
                params: { productLink: product.link },
            }"
        >
            <img
                loading="lazy"
                :src="product.image"
                :alt="product.title"
                class="card-media"
            />
        </router-link>

        <router-link
            class="card-title"
            :to="{
                name: 'single',
                params: { productLink: product.link },
            }"
        >
            {{ product.title }}
        </router-link>
        <data class="card-price">${{ product.price }}</data>
        <p v-if="product?.price_old" class="card-price-old"></p>

        <div class="card-actions">
            <button
                v-if="!inCart"
                type="button"
                class="card-action btn"
                @click="addProduct"
            >
                Buy
            </button>
            <router-link
                v-else
                class="card-action btn btn-secondary"
                :to="{ name: 'cart' }"
            >
                In cart
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { inCart } from '@/helpers/inCart';

// @ is an alias to /src

export default {
    name: 'v-card',
    props: {
        product_data: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            product: {
                ...this.product_data,
                quantity: 0,
            },
        };
    },
    computed: {
        ...mapGetters(['CART']),
        inCart() {
            return inCart(this.product.id, this.CART);
        },
    },
    methods: {
        ...mapActions(['addToCart']),
        addProduct() {
            this.product.quantity++;
            this.addToCart(this.product);
        },
    },
};
</script>

<style lang="scss">
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 8px;

    &-thumbnail {
        position: relative;
        margin: -15px -15px 0;
        padding-top: 50%;
    }

    &-media {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
