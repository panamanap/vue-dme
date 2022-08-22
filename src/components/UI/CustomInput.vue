<template>
    <div class="custom-input">
        <slot></slot>
        <input
            type="text"
            :placeholder="placeholder"
            :class="{
                'list': cls==='list',
                'modal': cls==='modal',
                'reg': cls==='reg'
            }"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script setup>

    defineProps({
        placeholder: String,
        cls: String,
        modelValue: [String, Number]
    })
</script>

<style scoped lang="scss">
    .custom-input {
        position: relative;

        input {
            width: 100%;
            border: 1px solid #E1E1E1;
            height: 40px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 30px;
        }

        .list {
            padding: 5px 40px;
        }

        .modal {
            padding: 5px 10px;
        }

        .reg {
            padding: 10px;
        }
    }
</style>