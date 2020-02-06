<template>
    <div class="m-catalog">
        <h1>catalog</h1>
        <div class="m-catalog__list">
            <m-catalog-item
                    v-for="product in PRODUCTS"
                    :key="product.article"
                    :product_data="product"
                    @sendArticleToParent="qwe"
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
        data() {
            return {}
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API'
            ]),
            qwe(data) {
                console.log(data)
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
        },
        computed: {
            ...mapGetters([
                'PRODUCTS'
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
    }
</style>
