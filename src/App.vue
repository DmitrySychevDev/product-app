<script lang="ts" setup>
import HeaderPanel from '@/components/Header/HeaderPanel.vue'
import ProductCard from '@/components/ProductCard/ProductCard.vue'
import productPreview from '@/assets/images/product1.png'

const headerLinks = [
  { label: 'Категория 1', href: '#' },
  { label: 'Категория 2', href: '#' },
  { label: 'Категория 3', href: '#' },
  { label: 'Категория 4', href: '#' },
  { label: 'Категория 5', href: '#' },
  { label: 'Категория 6', href: '#' }
]

const products = [
  {
    id: 1,
    price: 22.3,
    rating: {
      rate: 4.3,
      count: 200
    },
    description: 'Slim-fitting style, contrast raglan long sleeve, three-butto',
    category: 'clothes',
    title: 'Футбока Красивая',
    image: productPreview
  },
  {
    id: 2,
    price: 22.3,
    rating: {
      rate: 4.3,
      count: 200
    },
    description: 'Slim-fitting style, contrast raglan long sleeve, three-butto',
    category: 'clothes',
    title: 'Футбока Красивая',
    image: productPreview
  },
  {
    id: 3,
    price: 22.3,
    rating: {
      rate: 4.3,
      count: 200
    },
    description: 'Slim-fitting style, contrast raglan long sleeve, three-butto',
    category: 'clothes',
    title: 'Футбока Красивая',
    image: productPreview
  },
  {
    id: 4,
    price: 22.3,
    rating: {
      rate: 4.3,
      count: 200
    },
    description: 'Slim-fitting style, contrast raglan long sleeve, three-butto',
    category: 'clothes',
    title: 'Футбока Красивая',
    image: productPreview
  },
  {
    id: 5,
    price: 22.3,
    rating: {
      rate: 4.3,
      count: 200
    },
    description: 'Slim-fitting style, contrast raglan long sleeve, three-butto',
    category: 'clothes',
    title: 'Футбока Красивая',
    image: productPreview
  },
  {
    id: 6,
    price: 22.3,
    rating: {
      rate: 4.3,
      count: 200
    },
    description: 'Slim-fitting style, contrast raglan long sleeve, three-butto',
    category: 'clothes',
    title: 'Футбока Красивая',
    image: productPreview
  }
]
</script>

<template>
  <header-panel v-bind:menuItemsList="headerLinks" />
  <div class="cards">
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
  <RouterView />
</template>

<style scoped>
.cards {
  margin-top: 100px;
  padding: 0 50px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}
</style>
