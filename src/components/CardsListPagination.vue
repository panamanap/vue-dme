<template>
    <div class="pages">
        <div
            v-for="pageNumber in cardsStore.totalPages"
            :key="pageNumber"
            class="page"
            :class="{
                'current-page': pageNumber === cardsStore.page
            }"
            @click="cardsStore.changePage(pageNumber)"
        >
            {{ pageNumber }}
        </div>
    </div>
</template>

<script setup>

    import {useCardsStore} from "../stores/card";

    const cardsStore = useCardsStore();


</script>

<style scoped lang="scss">
    .pages{
        display: flex;
        justify-content: center;
        margin-top: 15px;
    }

    .page {
        border: 1px solid #a5a5a5;
        padding: 10px 15px;
        user-select: none;
        cursor: pointer;
    }

    .current-page {
        border: 2px solid #05A3AD;
        background-color: #F5F7FB;
        color: #05A3AD;
    }
</style>