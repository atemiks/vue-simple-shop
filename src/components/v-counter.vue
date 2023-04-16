<template>
    <div class="counter-block">
        <button class="counter-btn btn btn-round" @click="decrement">-</button>
        <input
            type="number"
            class="counter-input"
            v-model="quantity"
            :min="1"
            :max="20"
            @cange="inputChange"
        />
        <button class="counter-btn btn btn-round" @click="increment">+</button>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'v-counter',
    props: {
        quantity_data: {
            type: Number,
            default: 1,
        },
    },
    data() {
        return {
            quantity: this.quantity_data,
        };
    },
    methods: {
        increment() {
            this.quantity++;
        },
        decrement() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
        inputChange() {},
    },
    watch: {
        quantity_data: function (newQuantityData) {
            this.quantity = newQuantityData;
        },
        quantity() {
            this.$emit('changeCounter', this.quantity);
        },
    },
};
</script>

<style lang="scss">
.counter {
    &-block {
        display: flex;
        gap: 10px;
    }

    &-input {
        width: 60px;
        margin: 0;
        padding: 0;
        font-size: 18px;
        text-align: center;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &[type='number'] {
            -moz-appearance: textfield;
        }
    }
}
</style>
