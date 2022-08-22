<template>
    <div
        class="card"
        :class="{
            active: cardsStore.cards.find(obj => obj.id === props.id).selected
        }"
    >
        <CustomCheckbox
            @select="selectedCard"
            v-model="selected"
            :id="id"
        />
        <img
            src="../assets/wheelchair.png"
            alt="wheelchair"
        >
        <div class="card-decr">
            <h4> {{ card.title.split(' ')[0] }}</h4>
            <p> {{ card.body.split(' ').splice(0, 5).join(' ') }}</p>
        </div>
    </div>
</template>

<script setup>
    import CustomCheckbox from '@/components/UI/CustomCheckbox.vue';
    import {useCardsStore} from "../stores/card";
    import {ref} from 'vue';

    let modelValue = ref(false);

    const cardsStore = useCardsStore();

    const props = defineProps({
        card: {
            type: Object,
            required: true,
        },
        id: [Number, String]
    })

    const selected = cardsStore.cards.find(obj => obj.id === props.id).selected;

    function selectedCard(value) {
        cardsStore.selectedCard(props.id, value);
    }

</script>

<style scoped lang="scss">
    .card {
        border: 1px solid #E1E1E1;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
        border-radius: 4px;
        width: 205px;
        height: 270px;
        padding: 20px 10px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;


        img {
            width: 150px;
            height: 150px;
            margin-bottom: 20px;
        }

        .card-decr {

            h4 {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 113%;
                color: #14446E;
            }

            p {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 120%;
                color: #8C99AF;
            }
        }
    }

    .active {
        border: 1px solid #05A3AD;
    }
</style>