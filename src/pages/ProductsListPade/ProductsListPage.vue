<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import request from '@/utils/request'

import ProductCard from '@/components/ProductCard/ProductCard.vue'

import styles from './ProductsListPage.module.scss'
import type { Product } from '@/types/Product'

interface ProductItem extends Product {
  id: number
}
const route = useRoute()
const products = ref<ProductItem[]>([])
const category = route.params.category

onMounted(() => {
  request('GET', `/products${category ? `/category/${category}` : ''}`).then((data) => {
    products.value = data as ProductItem[]
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
