<template>
    <div class="m-main-wrapper">
        <m-cart/>
        <m-catalog/>
    </div>
</template>

<script>
    import mCatalog from './m-catalog'
    import mCart from './m-cart'

    export default {
        name: "m-main-wrapper",
        components: {
            mCart,
            mCatalog
        }
    }
</script>

<style scoped>

</style>
