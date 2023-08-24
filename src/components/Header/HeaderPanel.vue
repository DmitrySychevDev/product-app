<script lang="ts" setup>
import styles from './Header.module.scss'
import { ref, onMounted } from 'vue'
import request from '@/utils/request'

interface MenuItem {
  label: string
  href: string
}

const headerMenu = ref<MenuItem[]>([])

onMounted(async () => {
  const categories: string[] = await request<undefined, string[]>('GET', '/products/categories')
  headerMenu.value = categories.map((category) => {
    return {
      label: category,
      href: `/categories/${category}`
    }
  })
})
</script>

<template>
  <header :class="styles.header">
    <div :class="styles['header__logo']">
      <a href="/">
        <img src="@/assets/images/logo.svg" />
      </a>
    </div>
    <div :class="styles['header__links']">
      <div
        v-for="item in headerMenu"
        v-bind:key="item.href"
        :class="styles['header__link-wrapper']"
      >
        <a v-bind:href="item.href" :class="styles['header__link']">{{ item.label }}</a>
      </div>
    </div>
  </header>
</template>

<style module src="./Header.module.scss" lang="scss"></style>
