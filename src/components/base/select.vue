<script setup lang="ts">
const modelValue = defineModel<unknown>({ required: true })
defineProps<{
  options: { value: unknown; label: string }[]
}>()
</script>

<template>
  <select v-model="modelValue">
    <option v-for="{ value, label } of options" :key="label" :value>
      {{ label }}
    </option>
  </select>
</template>

<style scoped>
select {
  min-width: 150px;
  padding: 8px 8px;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;

  border: rgba(0, 0, 0, 0.06) 1px solid;
  background: url(../../assets/icons/system/chevronDown.svg) 90% / 5% no-repeat #fff;

  appearance: base-select;
  color: #71717a;
  box-sizing: border-box;
  padding: 0.5rem 0.75rem;
  border: 1px solid #e4e4e7;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  & > button {
    display: flex;
    width: 100%;
    font-family: inherit;
    color: currentColor;

    & > svg {
      margin: 0 0 0 auto;
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  &:has(option:not([hidden]):checked) {
    color: #18181b;
  }

  &:focus-visible {
    outline: 2px solid #a1a1aa;
    outline-offset: -1px;
  }

  &::picker-icon {
    display: none;
  }

  &::picker(select) {
    appearance: base-select;
    border: 1px solid #e4e4e7;
    padding: 0.25rem;
    margin-top: 0.25rem;
    border-radius: 4px;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
    cursor: default;
    transition:
      opacity 225ms ease-in-out,
      transform 225ms ease-in-out;
    transform-origin: top;
    transform: translateY(0);
    opacity: 1;

    @starting-style {
      transform: translateY(-0.25rem) scale(0.95);
      opacity: 0;
    }
  }

  & optgroup label {
    display: block;
    padding: 0.375rem 0.5rem;
  }

  & option {
    padding: 8px 8px;
    border-radius: 4px;
    outline: none;

    &::before {
      content: '';
      width: 3px;
      border-radius: 4px;
      height: 18px;
      translate: -8px 0;
      opacity: 0;
      background: var(--windows-accent-color);
    }

    &::checkmark {
      display: none;
    }

    &:checked {
      background-color: rgba(0, 0, 0, 0.04);

      &::before {
        opacity: 1;
      }
    }

    &:hover,
    &:focus-visible {
      background-color: #f4f4f5;
      color: #18181b;
    }
  }
}
</style>
