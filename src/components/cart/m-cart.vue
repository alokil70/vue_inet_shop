<template>
    <div class="m-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="m-catalog__link_to_cart">Catalog</div>
        </router-link>

        <h1>Cart</h1>
        <p v-if="!cart_data.length">Пустая корзинка</p>
        <m-cart-item
                v-for="(item, index) in cart_data"
                :key="item.article"
                :cart_item_data="item"
                @deleteFromCart="deleteFromCart(index)"
                @decrement="decrement(index)"
                @increment="increment(index)"
        />
        <div class="m-cart__total">
            <p class="total_name">Total:</p>
            <p>{{cartTotalCost}}</p>
        </div>
    </div>
</template>

<script>
    import mCartItem from './m-cart-item'
    import {mapActions} from 'vuex'

    export default {
        name: "m-cart",
        props: {
            cart_data: {
                type: Array,
                defaut() {
                    return []
                }
            }
        },
        components: {
            mCartItem
        },
        computed: {
            cartTotalCost() {
                let result = [];
                if (this.cart_data.length) {
                    for (let item of this.cart_data) {
                        result.push(item.price * item.quantity)
                    }
                    result = result.reduce(function (sum, el) {
                        return sum + el
                    })
                    return result
                }
                return 0
            }
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART',
                'INCREMENT_CART_ITEM',
                'DECREMENT_CART_ITEM'
            ]),
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            },
            decrement(index) {
                this.DECREMENT_CART_ITEM(index)
            },
            increment(index) {
                this.INCREMENT_CART_ITEM(index)
            }
        }
    }
</script>

<style lang="scss">
    .m-cart {
        margin-bottom: 100px;

        &__total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: $padding;
            display: flex;
            justify-content: center;
            background: $bg-green;
            color: #ffffff;
            font-size: 20px;
        }

        .total_name {
            margin-right: $margin*2;
        }
    }
</style>
