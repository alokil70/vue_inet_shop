<template>
    <div class="m-main-wrapper">
        <p>{{title}}</p>

        <keep-alive>
            <router-view/>
        </keep-alive>

    </div>
</template>
<script>


    export default {
        name: "m-main-wrapper",
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
