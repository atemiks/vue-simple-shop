<template>
    <div class="cart-item">
        <figure class="cart-item-thumbnail">
            <img
                loading="lazy"
                :src="product.image"
                :alt="product.title"
                class="cart-item-media"
            />
        </figure>

        <div class="cart-item-summary">
            <a href="#link" class="cart-item-title">{{ product.title }}</a>
        </div>

        <div class="cart-item-cost">
            <data class="cart-item-price">${{ product.price }}</data>
            <p v-if="product?.price_old" class="cart-item-price-old"></p>
        </div>

        <div class="cart-item-quantity">
            <v-counter
                :quantity_data="product.quantity"
                @changeCounter="changeCounter"
            ></v-counter>
        </div>

        <div class="cart-item-actions">
            <button type="button" class="btn btn-danger" @click="removeProduct">
                Delete
            </button>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

import { mapActions } from 'vuex';
import vCounter from './v-counter.vue';

export default {
    name: 'v-cart-item',
    components: {
        vCounter,
    },
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
            },
        };
    },
    methods: {
        ...mapActions(['addToCart', 'removeFromCart']),
        changeCounter(quantity) {
            this.product.quantity = quantity;
            this.addToCart(this.product);
        },
        removeProduct() {
            this.removeFromCart(this.product.id);
        },
    },
};
</script>

<style lang="scss">
.cart {
    &-item {
        display: grid;
        grid-template-columns: 100px 1fr min-content min-content min-content;
        gap: 30px;
        align-items: center;

        &-thumbnail {
            height: 100px;
            margin: 0;
        }

        &-media {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
