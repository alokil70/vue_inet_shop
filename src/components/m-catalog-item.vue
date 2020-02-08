<template>
    <div class="m-catalog-item">
        <img
                class="m-catalog-item__image"
                :src="require('../assets/images/' + product_data.image)" alt="img">
        <p class="m-catalog-item__name">{{ product_data.name }}</p>
        <p class="m-catalog-item__price">Price: {{ product_data.price }} Р</p>
        <button
                class="m-catalog-item__add_to_cart_btn btn"
                @click="addToCart"
        >Add to cart
        </button>
    </div>
</template>

<script>
    export default {
        name: "m-catalog-item",
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            addToCart() {
                this.$emit('addToCart', this.product_data)
            }
        }
    }
</script>

<style lang="scss">
    .m-catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;

        &__image {
            width: 100px;
        }
    }
</style>
