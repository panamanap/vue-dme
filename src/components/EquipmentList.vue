<template>
    <div class="equipment-list">
        <div class="equipment-item">
            <Title class="equipment-header">
                <h3 class="title">Equipment List</h3>
                <div class="additional-btns">
                    <CustomButton @click="modal.openModal('card')">
                        <img src="../assets/plus.svg" class="title" alt="plus"/>
                    </CustomButton>
                    <CustomButton
                        class="equipment-btn"
                        @click="onClickExports"
                    >
                        <img src="../assets/export.svg" class="title" alt="export"/>
                        Exports
                    </CustomButton>
                    <CustomButton
                        class="equipment-btn"
                        :class="{
                            'hide': cards.selectedСards.length === 0
                        }"
                        :disabled="cards.selectedСards.length === 0"
                        @click="onClickMoveAndCopy"
                    >
                        <img src="../assets/move.svg" class="title" alt="move"/>
                        Move & Copy
                    </CustomButton>
                    <CustomButton
                        class="equipment-btn"
                        :class="{
                            'hide': cards.selectedСards.length === 0
                        }"
                        :disabled="cards.selectedСards.length === 0"
                        @click="cards.deletingSelectedCards"
                    >
                        <img src="../assets/trash.svg" class="title" alt="trash"/>
                        Delete
                    </CustomButton>
                </div>
            </Title>
        </div>
        <CardsList />
    </div>
</template>

<script setup>
    import CategoryList from './CategoriesList.vue';
    import Title from './Title.vue';
    import CustomButton from './UI/CustomButton.vue';
    import CardsList from './CardsList.vue';
    import {useCardsStore} from "@/stores/card";
    import {useModalStore} from "@/stores/modal";

    const modal = useModalStore();

    const cards = useCardsStore();

    function onClickMoveAndCopy() {
        alert('Move&Copy')
    }

    function onClickExports() {
        alert('Exports')
    }

</script>

<style scoped lang="scss">
    .equipment-list {
        display: flex;
        flex-grow: 3;
        flex-direction: column;

        .equipment-item {

            .equipment-header {
                display: flex;
                justify-content: space-between;
                align-items: center;

                h3 {
                    font-size: 22px;
                    line-height: 33px;
                }
            }

            .additional-btns {
                display: flex;

                .hide {
                    opacity: 0.4;
                    transform: none;
                    cursor: default;
                }

                .equipment-btn {
                    display: flex;
                    align-items: center;
                    border: 1px solid #8C99AF;
                    border-radius: 2px;
                    color: #8C99AF;
                    padding: 4px 10px;
                }

                .equipment-btn  {
                    margin-left: 15px;
                }

                .equipment-btn + .equipment-btn  {
                    margin-left: 10px;
                }
            }
        }
    }
</style>