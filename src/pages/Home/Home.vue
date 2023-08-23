<script lang="ts" setup>
import ProductCard from '@/components/ProductCard/ProductCard.vue'
import productPreview from '@/assets/images/product1.png'

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
</template>

<style src="./Home.module.scss" module></style>
