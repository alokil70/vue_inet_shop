<template>
    <div class="m-catalog">
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="m-catalog__link_to_cart">Cart: {{CART.length}}</div>
        </router-link>

        <h1>catalog</h1>
        <div class="m-catalog__list">
            <m-catalog-item
                    v-for="product in PRODUCTS"
                    :key="product.article"
                    :product_data="product"
                    @addToCart="addToCart"
            />

        </div>

    </div>
</template>

<script>
    import mCatalogItem from './m-catalog-item'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "m-catalog",
        components: {
            mCatalogItem
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then((response) => {
                    if (response.data) {
                        console.log('data prishla')
                    }
                })
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ])
        }
    }
</script>

<style lang="scss">
    .m-catalog {
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

        &__link_to_cart {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding*2;
            border: solid 1px #aeaeae;
            border-radius: $radius;
        }
    }
</style>
