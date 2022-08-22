<template>
    <input
        type="checkbox"
        :value="modelValue"
        @input="updateCheckbox"
        :id="id"
        class="custom-checkbox"
    />
    <label :for="id"></label>
</template>

<script setup>

    const emit = defineEmits(['select'])

    defineProps({
        modelValue: Boolean,
        id: [Number, String]
    })

    function updateCheckbox(event) {
        emit('select', event.target.checked)
    }

</script>

<style scoped lang="scss">
    .custom-checkbox, label {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .custom-checkbox+label::before {
        content: '';
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        background-image: url('@/assets/empty-checkbox.svg');
        background-repeat: no-repeat;
        background-origin: border-box;
    }

    .custom-checkbox:checked+label::before {
        background-image: url('@/assets/checkbox.svg');
    }
</style>