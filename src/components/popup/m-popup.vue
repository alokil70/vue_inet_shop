<template>
    <div class="popup_wrapper">
        <div class="m-popup">
            <div class="m-popup__header">
                <span>{{popupTitle}}</span>
                <span>
                <i
                        class="material-icons"
                        @click="closePopup"
                >
                    close
                </i>
            </span>
            </div>
            <div class="m-popup__content">
                <slot></slot>
            </div>
            <div class="m-popup__footer">
                <button
                        class="modal_close btn"
                        @click="closePopup"
                >
                    Close
                </button>
                <button class="btn">{{rightBtnTitle}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-popup",
        props: {
            popupTitle: {
                type: String,
                default: 'Popup window'
            },
            rightBtnTitle: {
                type: String,
                default: 'Add'
            }
        },
        methods: {
            closePopup() {
                this.$emit('closePopup')
            }
        }
    }
</script>

<style lang="scss">
    .popup_wrapper {
        background: rgba(64, 64, 64, .4);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
    }

    .m-popup {
        padding: $padding*2;
        position: fixed;
        top: 50px;
        width: 400px;
        background: #ffffff;
        box-shadow: 0 0 17px 0 #e7e7e7;


        &__header, &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__content {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

</style>
