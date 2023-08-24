<script setup lang="ts">
import styles from './ProductCard.module.scss'
import CustomButton from '@/components/Button/CustomButton.vue'

import type { Product } from '@/types/Product'

const props = defineProps<Product>()

const buttonHandler = () => {
  console.log('test')
}
</script>

<template>
  <div :class="styles['product-card']">
    <div :class="styles['product-card__image']"><img v-bind:src="props.image" /></div>
    <div :class="styles['product-card__content']">
      <div :class="styles['product-card__title']">
        <h3 :class="styles['product-card-title__name']">{{ props.title }}</h3>
        <div :class="styles['product-card-title__price']">{{ props.price }} $</div>
      </div>
      <p :class="styles['product-card__description']">
        {{
          props.description.length > 113
            ? `${props.description.substring(0, 113)} ...`
            : props.description
        }}
      </p>
      <div :class="styles['product-card__action-block']">
        <div :class="styles['product-card__action-block__rating']">
          <div>
            <div :class="styles['product-card__action-block__rang']">
              <div>
                <img src="@/assets/images/star.svg" />
              </div>
              <p>{{ props.rating?.rate }}</p>
            </div>
            <p>{{ props.rating?.count }} оценок</p>
          </div>
        </div>
        <div>
          <custom-button v-bind:label="'Узнать больше'" v-bind:onClickHandler="buttonHandler" />
        </div>
      </div>
    </div>
  </div>
</template>
