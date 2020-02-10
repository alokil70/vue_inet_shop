<template>
    <div class="m-cart-item">
        <img
                class="m-cart-item__image"
                :src="require('../../assets/images/' + cart_item_data.image)"
                alt="img"
        >
        <div class="m-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
        </div>
        <div class="m-cart-item__quantity">
            <p>Quantity</p>
            <span>
            <span class="btn_cursor" @click="decrementCartItem">-</span>
                {{cart_item_data.quantity}}
            <button class="btn_cursor" @click="incrementCartItem">+</button>
            </span>

        </div>
        <button class="btn" @click="deleteFromCart">delete</button>
    </div>
</template>

<script>
    export default {
        name: "m-cart-item",
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            deleteFromCart() {
                this.$emit('deleteFromCart')
            },
            decrementCartItem() {
                this.$emit('decrement')
            },
            incrementCartItem() {
                this.$emit('increment')
            }
        },
        mounted() {
            this.$set(this.cart_item_data, 'quantity', 1)
        }
    }
</script>

<style lang="scss">
    .m-cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;

        &__image {
            width: 50px;
        }
    }
    .btn_cursor {
        cursor: pointer;
    }
</style>
