<template>
    <div class="m-notification">
        <transition-group
                name="m-transition-animate"
                class="messages-list"
        >
            <div
                    class="m-notification__content"
                    v-for="message in messages"
                    :key="message.id"
            >
                <div class="content__text">
                    <span>{{message.name}}</span>
                    <i class="material-icons">check_circle</i>
                </div>
                <div class="content__buttons">
                    <button v-if="rightButton.length">{{rightButton}}</button>
                    <button v-if="leftButton.length">{{leftButton}}</button>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: "m-notification",
        props: {
            messages: {
                type: Array,
                default: () => {
                    return []
                }
            },
            rightButton: {
                type: String,
                default: ''
            },
            leftButton: {
                type: String,
                default: ''
            },
            timeoutHide: {
                type: Number,
                default: 3000
            }
        },
        methods: {
            hideNotification() {
                if (this.messages.length) {
                    setTimeout(() => {
                        this.messages.splice(this.messages.length - 1, 1)
                    }, this.timeoutHide)
                }
            }
        },
        watch: {
            messages() {
                this.hideNotification()
            }
        },
        mounted() {
            this.hideNotification()
        }
    }
</script>

<style lang="scss">
    .m-notification {
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10;

        &__content {
            padding: $padding*2;
            border-radius: $radius;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            background: #26ae68;
            margin-bottom: $margin*2;
        }
    }

    .content {
        &__text {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

    }

    .material-icons {
        margin-left: $margin*2;
    }

    .m-transition-animate {
        &-enter {
            transform: translateX(150px);
            opacity: 0;
        }

        &-enter-active {
            transition: all .6s ease;
        }

        &-enter-to {
            opacity: 1;
        }

        &-leave {
            height: 50px;
            opacity: 1;
        }

        &-leave-active {
            transition: transform .6s ease, opacity .6s, height .6s .2s;
        }

        &-leave-to {
            height: 0;
            transform: translateX(150px);
            opacity: 0;
        }

        &-move {
            transition: transform .6s ease;
        }
    }
</style>
