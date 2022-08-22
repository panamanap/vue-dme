<script setup>
    import Title from '@/components/Title.vue';
    import Content from '@/components/Content.vue';
    import CustomModal from '@/components/UI/CustomModal.vue';
    import {useModalStore} from "@/stores/modal";

    const modal = useModalStore();

</script>

<template>
    <header>
        <Title>
            <h1>Equipment Catalog</h1>
        </Title>
    </header>
    <Content/>
    <CustomModal v-if="modal.show"/>
</template>

<style scoped>
    h1 {
        font-weight: 600;
        font-size: 28px;
        line-height: 42px;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
</style>
