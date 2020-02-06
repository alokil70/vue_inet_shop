<template>
    <div class="m-main-wrapper">
        <p>{{title}}</p>
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
        },
        data() {
            return {
                title: 'Main wrapper'
            }
        }
    }
</script>

<style>
    .m-main-wrapper {
        max-width: 900px;
        margin: 0 auto;
    }

</style>
