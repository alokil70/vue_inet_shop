<template>
    <div class="m-catalog">

        <m-notification
                :messages="messages"

        />

        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="m-catalog__link_to_cart">Cart: {{CART.length}}</div>
        </router-link>

        <h1>catalog</h1>
        <m-select
                :options="categories"
                :selected="selected"
                @select="sortByCategories"
        />
        <div class="m-catalog__list">
            <m-catalog-item
                    v-for="product in filteredProducts"
                    :key="product.article"
                    :product_data="product"
                    @addToCart="addToCart"
            />

        </div>
    </div>
</template>

<script>
    import mCatalogItem from './m-catalog-item'
    import mSelect from '../m-select'
    import mNotification from '../notifications/m-notification'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "m-catalog",
        components: {
            mCatalogItem,
            mSelect,
            mNotification
        },
        props: {},
        data() {
            return {
                categories: [
                    {name: 'Все', value: 'ALL'},
                    {name: 'Мужские', value: 'м'},
                    {name: 'Женские', value: 'ж'}
                ],
                selected: 'Все',
                sortedProducts: [],
                messages: []
            }
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
                    .then(() => {
                        let timeStamp = Date.now().toLocaleString()
                        this.messages.unshift(
                            {name: timeStamp, id: timeStamp}
                        )
                    })
            },
            sortByCategories(category) {
                this.selected = category.name;
                this.sortedProducts = [];
                this.PRODUCTS.map(item => {
                    if (item.category === category.name) {
                        this.sortedProducts.push(item)
                    }
                })
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
            ]),
            filteredProducts() {
                if (this.sortedProducts.length) {
                    return this.sortedProducts
                } else {
                    return this.PRODUCTS
                }
            }
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
