<script setup lang="ts">
import { ref, computed } from 'vue'

interface Option {
    value: string
    label: string
}

const props = defineProps<{
    options: Option[]
    placeholder: string
    modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const isOpen = ref(false)

const selectedLabel = computed(() => {
    const found = props.options.find(o => o.value === props.modelValue)
    return found ? found.label : ''
})

function select(option: Option) {
    emit('update:modelValue', option.value)
    isOpen.value = false
}

function toggle() {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <div class="custom-select" :class="{ 'custom-select-open': isOpen }">
        <button type="button" class="custom-select-trigger" @click="toggle">
            <span :class="{ 'custom-select-placeholder': !modelValue }">
                {{ modelValue ? selectedLabel : placeholder }}
            </span>
            <svg class="custom-select-arrow" :class="{ 'custom-select-arrow-open': isOpen }" width="16" height="16"
                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#9CA8BF" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </button>

        <ul v-if="isOpen" class="custom-select-dropdown">
            <li v-for="option in options" :key="option.value" class="custom-select-option"
                :class="{ 'custom-select-option-selected': option.value === modelValue }" @click="select(option)">
                {{ option.label }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.custom-select {
    position: relative;
    width: 100%;
}

.custom-select-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 1rem;
    border: 1.5px solid #CED4DF;
    border-radius: 8px;
    background: #FFF;
    font-size: 0.750rem;
    font-weight: 400;
    font-family: 'Poppins';
    color: #1E293B;
    cursor: pointer;
    text-align: left;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.custom-select-open .custom-select-trigger {
    border-color: #1656DF;
    box-shadow: 0 0 0 3px rgba(22, 86, 223, 0.12);
}

.custom-select-placeholder {
    color: #8F9098;
}

.custom-select-arrow {
    flex-shrink: 0;
    transition: transform 0.25s ease;
}

.custom-select-arrow-open {
    transform: rotate(180deg);
}

.custom-select-dropdown {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: #FFF;
    border: 1.5px solid #CED4DF;
    border-radius: 8px;
    list-style: none;
    margin: 0;
    padding: 4px;
    z-index: 10;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    max-height: 200px;
    overflow-y: auto;
}

.custom-select-option {
    padding: 0.625rem 0.875rem;
    font-size: 0.875rem;
    font-family: 'Poppins', sans-serif;
    color: #1E293B;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
}

.custom-select-option:hover {
    background: #EFF4FF;
    color: #1656DF;
}

.custom-select-option-selected {
    background: #EFF4FF;
    color: #1656DF;
    font-weight: 600;
}
</style>