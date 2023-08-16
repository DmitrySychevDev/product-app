<script setup lang="ts">
import styles from './CustomButton.module.scss'

interface ButtonProps {
  label: string
  onClickHandler: () => void
}

const props = defineProps<ButtonProps>()
</script>

<template>
  <button :class="styles['button']" @click="onClickHandler()">{{ props.label }}</button>
</template>
