<template>
    <div class="category-item">
        <Title class="category-header">
            <h3 class="title">{{ title }}</h3>
            <CustomButton
                @click="modal.openModal('adding', title.toLowerCase())"
            >
                <img src="../assets/plus.svg" class="title" alt="plus"/>
            </CustomButton >
        </Title>
        <CategoriesList
            :categories="categoriesStore[title.toLowerCase()]"
        />
    </div>
</template>

<script setup>
    import CustomButton from './UI/CustomButton.vue';
    import Title from './Title.vue';
    import CategoriesList from './CategoriesList.vue';
    import {useModalStore} from "@/stores/modal";

    import {useCategoriesStore} from '@/stores/categories';

    const categoriesStore = useCategoriesStore();

    const modal = useModalStore();

    defineProps({
        title: String,
    })

</script>

<style scoped lang="scss">
    .category-item {
        border: 1px solid #E1E1E1;
        min-width: 260px;

        .category-header {
            display: flex;
            justify-content: space-between;
            padding: 10px 10px 10px 20px;
            flex-grow: 1;

            .title {
                font-weight: 600;
                font-size: 22px;
                line-height: 33px;
            }
        }
    }
</style>