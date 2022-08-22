<template>
    <li @click="onClickCategory">
       <Title
           class="category"
           :class="{
                active: props.id === categories.selected[props.parent]
           }"
       >
           <p>{{ category }}</p>
           <CustomButton
               @click="modal.openModal('editing', parent, category, id)"
           >
               <img src="../assets/pencil.svg" class="pencil" alt="pencil"/>
           </CustomButton>
       </Title>
    </li>
</template>

<script setup>
    import Title from './Title.vue';
    import CustomButton from './UI/CustomButton.vue';

    import {useModalStore} from "@/stores/modal";
    import {useCategoriesStore} from "@/stores/categories";
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const modal = useModalStore();

    const categories = useCategoriesStore();

    const props = defineProps({
        category: String,
        id: Number,
        parent: String,
        selected: Boolean,
    })

    function onClickCategory() {
        categories.onOpenCategory(props.id, props.parent)
        if(props.parent === 'categories') {
            router.push(`/catalog/${props.id}`)
        } else if (props.parent === 'subcategories') {
            router.push(`/catalog/${categories.selected.categories}/${props.id}`)
        }
    }

</script>

<style scoped lang="scss">
    .category {
        padding: 8px 10px 8px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .pencil {
            cursor: pointer;
        }

        .pencil:hover {
            transform: scale(1.2);
        }

        .pencil:active {
            transform: scale(1);
        }

        &:hover {
            outline: 2px solid #000;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
    }

    .active {
        outline: 1px solid #05A3AD;
        background-color: #F5F7FB;

        p {
            color: #05A3AD;
        }
    }
</style>