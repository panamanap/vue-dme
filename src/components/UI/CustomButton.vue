<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped lang="scss">
    .btn {
        display: flex;
        align-self: center;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
    }

    .btn:active {
        transform: scale(0.9);
    }
</style>