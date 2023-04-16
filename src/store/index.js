import { createStore } from 'vuex';

export default createStore({
    state: {
        products: [],
        cart: [],
        cartCount: 0,
        cartTotal: 0,
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        },
        CART_COUNT(state) {
            return state.cartCount;
        },
        CART_TOTAL(state) {
            return state.cartTotal;
        },
    },
    mutations: {
        fetchProducts(state, data) {
            state.products = data;
        },
        calcCartCount(state) {
            state.cartCount = state.cart.reduce((accumulator, product) => {
                return accumulator + product.quantity;
            }, 0);
        },
        calcCartTotal(state) {
            state.cartTotal = state.cart.reduce((accumulator, product) => {
                return accumulator + product.quantity * product.price;
            }, 0);
        },
        addToCart(state, data) {
            const index = state.cart.findIndex(
                (product) => product.id === data.id
            );

            if (index === -1) {
                state.cart.push(data);
            }

            if (index !== -1) {
                state.cart[index] = data;
            }
        },
        removeFromCart(state, id) {
            state.cart = state.cart.filter((product) => product.id !== id);
        },
    },
    actions: {
        fetchProducts(context) {
            // simulation fetch request
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const products_data = [
                        {
                            id: 1,
                            title: "Ocean's Whispering Breeze",
                            link: 'ocean-whispering-breeze',
                            image: 'https://images.unsplash.com/photo-1677798462220-e7b9a383c476?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
                            price: 199,
                        },
                        {
                            id: 2,
                            title: 'Midnight Mystic Moon',
                            link: 'midnight-mystic-moon',
                            image: 'https://images.unsplash.com/photo-1681283900137-acf9375f7470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
                            price: 149,
                        },
                        {
                            id: 3,
                            title: 'Secret Garden Oasis',
                            link: 'secret-garden-oasis',
                            image: 'https://images.unsplash.com/photo-1681159003721-bc037867bc0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                            price: 129,
                        },
                        {
                            id: 4,
                            title: 'Velvet Thunderstorm Sky',
                            link: 'velvet-thunderstorm-sky',
                            image: 'https://images.unsplash.com/photo-1681199863794-4051cbbafa32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                            price: 169,
                        },
                        {
                            id: 5,
                            title: 'Crystal Clear Waters',
                            link: 'crystal-clear-waters',
                            image: 'https://images.unsplash.com/photo-1681282894722-ffb0b238d799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                            price: 179,
                        },
                    ];
                    context.commit('fetchProducts', products_data);
                    resolve(products_data);
                }, 100);
            });
        },
        calcCartCount(context) {
            context.commit('calcCartCount');
        },
        calcCartTotal(context) {
            context.commit('calcCartTotal');
        },
        addToCart(context, data) {
            context.commit('addToCart', data);
            context.commit('calcCartCount');
            context.commit('calcCartTotal');
        },
        removeFromCart(context, id) {
            context.commit('removeFromCart', id);
            context.commit('calcCartCount');
            context.commit('calcCartTotal');
        },
    },
    modules: {},
});
