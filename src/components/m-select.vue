<template>
    <div class="m-select">
        <p
                class="title"
                @click="areOptionsVisible = !areOptionsVisible"
        >
            {{selected}}
        </p>
        <div
                class="options"
                v-if="areOptionsVisible"
        >
            <p
                    v-for="option in options"
                    :key="option.value"
                    @click="selectOption(option)"
            >
                {{option.name}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-select",
        props: {
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            selected: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                areOptionsVisible: false
            }
        },
        methods: {
            selectOption(option) {
                this.$emit('select', option)
                this.areOptionsVisible = false
            }
        }
    }
</script>

<style>
    .title {
        border: solid 1px #aeaeae;
    }

    .m-select {
        position: relative;
        width: 150px;
    }

    .m-select p {
        margin: 0;
    }

    .options {
        border: solid 1px #aeaeae;
        position: absolute;
        top: 20px;
        right: 0;
        width: 100%;
    }
    .options p:hover {
        background: #e7e7e7;
    }
</style>
