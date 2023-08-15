<script lang="ts" setup>
import HeaderPanel from '@/components/Header/HeaderPanel.vue'

const headerLinks = [
  { label: 'Категория 1', href: '#' },
  { label: 'Категория 2', href: '#' },
  { label: 'Категория 3', href: '#' },
  { label: 'Категория 4', href: '#' },
  { label: 'Категория 5', href: '#' },
  { label: 'Категория 6', href: '#' }
]
</script>

<template>
  <header-panel v-bind:menuItemsList="headerLinks" />
  <RouterView />
</template>

<style scoped></style>
