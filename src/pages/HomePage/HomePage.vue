<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import request from '@/utils/request'

import ProductCard from '@/components/ProductCard/ProductCard.vue'

import styles from './HomePage.module.scss'

import productPreview from '@/assets/images/product1.png'
import type { Product } from '@/types/Product'

interface ProductItem extends Product {
  id: number
}

const products = ref<ProductItem[]>([])

onMounted(() => {
  request('GET', '/products').then((data) => {
    products.value = data.data as ProductItem
  })
})
</script>

<template>
  <div :class="styles.cards">
    <product-card
      v-for="product in products"
      v-bind:description="product.description"
      v-bind:image="product.image"
      v-bind:key="product.id"
      v-bind:title="product.title"
      v-bind:rating="product.rating"
      v-bind:price="product.price"
    />
  </div>
</template>
