<template>
    <ul class="categories-list">
        <CategoriesItem
            v-for="category in categories"
            :category="category.title"
            :parent="category.parent"
            :key="category.id"
            :id="category.id"
            :selected="category.selected"
        />
    </ul>
</template>

<script setup>
    import CategoriesItem from "./CategoriesItem.vue";

    defineProps({
        categories: {
            type: Array,
        }
    })

</script>

<style scoped lang="scss">
    .categories-list {
        list-style-type: none;
    }
</style>