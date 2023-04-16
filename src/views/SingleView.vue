<template>
    <seciton class="section-product">
        <div class="container">
            <div class="product-layout">
                <div class="product-gallery">
                    <figure class="product-figure">
                        <img
                            :src="product.image"
                            :alt="product.title"
                            class="product-image"
                        />
                    </figure>
                </div>

                <div class="product-summary">
                    <div class="product-header">
                        <h1 class="product-title">{{ product.title }}</h1>
                    </div>
                    <div class="product-price">${{ product.price }}</div>

                    <div class="product-order">
                        <v-counter
                            :quantity_data="productQuantity"
                            @changeCounter="changeCounter"
                        ></v-counter>
                        <div class="product-actions">
                            <button
                                v-if="!inCart"
                                type="button"
                                class="product-action btn"
                                @click="addProduct"
                            >
                                Buy
                            </button>
                            <router-link
                                v-else
                                class="product-action btn btn-secondary"
                                :to="{ name: 'cart' }"
                            >
                                In cart
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </seciton>
</template>

<script>
// @ is an alias to /src

import { mapActions, mapGetters } from 'vuex';
import { inCart } from '@/helpers/inCart';
import vCounter from '@/components/v-counter.vue';

export default {
    name: 'ProductView',
    components: {
        vCounter,
    },
    props: {
        productLink: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            product: {},
        };
    },
    computed: {
        ...mapGetters(['PRODUCTS', 'CART']),
        productQuantity() {
            const cartItem = this.CART.find(
                (item) => item.id === this.product.id
            );
            const cartItemQuantity = cartItem ? cartItem.quantity : 1;

            console.log(
                'productQuantity',
                this.CART,
                cartItem,
                cartItemQuantity
            );

            return cartItemQuantity;
        },
        inCart() {
            return inCart(this.product.id, this.CART);
        },
    },
    methods: {
        ...mapActions(['fetchProducts', 'addToCart']),
        async getProductData() {
            this.product = this.PRODUCTS.find(
                (item) => item.link === this.productLink
            );

            if (!this.product) {
                this.$router.push({ name: 'home' });
            }
        },
        addProduct() {
            this.product.quantity = this.product.quantity
                ? this.product.quantity++
                : 1;
            this.addToCart(this.product);
        },
        changeCounter(quantity) {
            this.product.quantity = quantity;
            this.addToCart(this.product);
        },
    },
    async mounted() {
        await this.fetchProducts();
        await this.getProductData();
    },
};
</script>

<style lang="scss">
.product {
    &-layout {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 30px;
    }

    &-figure {
        position: relative;
        padding-top: 100%;
        margin: 0;
    }

    &-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &-summary {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    &-title {
        margin: 0;
    }

    &-price {
        font-size: 24px;
    }

    &-order {
        display: grid;
        grid-template-columns: max-content max-content;
        gap: 15px;
    }
}
</style>
