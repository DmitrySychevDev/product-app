<script lang="ts">
import { defineComponent } from 'vue'

interface HeaderMenuData {
  menuItemsList: {
    label: string
    href: string
  }[]
}

export default defineComponent({
  data() {
    return {
      menuItemsList: this.menuItems
    } as HeaderMenuData
  },
  props: ['menuItems']
})
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/images/logo.svg" />
    </div>
    <div class="header__links">
      <div v-for="item in menuItemsList" v-bind:key="item.href" class="header__link-wrapper">
        <a v-bind:href="item.href" class="header__link">{{ item.label }}</a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import url('./Header.module.scss');
</style>
