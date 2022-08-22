<template>
   <div class="categories-group">

       <RouterView></RouterView>
<!--        <Category-->
<!--            :title="'Categories'"-->
<!--            :categories="categoriesStore.categories"-->
<!--        />-->
<!--       <Category-->
<!--           :title="'Subcategories'"-->
<!--           :categories="categoriesStore.subcategories"-->
<!--       />-->
<!--        <EquipmentList />-->
   </div>
</template>

<script setup>


</script>

<style scoped lang="scss">
    @mixin categories {
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
    }

    .categories-group {
        display: flex;

        @include categories;
    }
</style>