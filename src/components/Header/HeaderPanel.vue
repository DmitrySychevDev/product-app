<script lang="ts" setup>
import styles from './Header.module.scss'

interface HeaderMenuData {
  menuItemsList: {
    label: string
    href: string
  }[]
}

const props = defineProps<HeaderMenuData>()
console.log(props)
</script>

<template>
  <header :class="styles.header">
    <div :class="styles['header__logo']">
      <img src="@/assets/images/logo.svg" />
    </div>
    <div :class="styles['header__links']">
      <div v-for="item in props.menuItemsList" v-bind:key="item.href" class="header__link-wrapper">
        <a v-bind:href="item.href" :class="styles['header__link']">{{ item.label }}</a>
      </div>
    </div>
  </header>
</template>

<style module src="./Header.module.scss" lang="scss"></style>
