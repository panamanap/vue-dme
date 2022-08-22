<template>
    <div class="content">
        <CustomInput
            :placeholder="'Search category or HCPCS name'"
            :cls="'list'"
            v-model="cards.searchText"
        >
            <img src="@/assets/search.svg" alt="search">
        </CustomInput>
        <div class="cardsList" v-if="cards.searchedCards.length > 0">
            <CardItem
                v-for="card in cards.searchedCards"
                :card="card"
                :key="card.id"
                :id="card.id"
            />
        </div>
        <div class="not-found" v-else>
            <h2>Nothing found</h2>
        </div>
        <CardsListPagination/>
    </div>
</template>

<script setup>
    import CustomInput from './UI/CustomInput.vue';
    import CardItem from './CardItem.vue';
    import CardsListPagination from '@/components/CardsListPagination.vue';
    import {useCardsStore} from "@/stores/card";
    import {onMounted} from 'vue';

    const cards = useCardsStore();

    onMounted(
    () => {
            cards.fetchCardsInformation()
        }
    )
</script>

<style scoped lang="scss">
    .content {
        height: 100%;
        padding: 10px;

        .not-found {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }

        img {
            position: absolute;
            top: 8px;
            left: 8px;
        }

        .cardsList {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin-top: 10px;
        }
    }
</style>