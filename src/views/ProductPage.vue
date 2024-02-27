<!-- <template>
  <div class="product-page" v-if="product">
    <h1>{{ product.title }}</h1>
    <img :src="product.imageSource" :alt="product.title" class="product-image">
    <p>{{ product.description }}</p>
    <p>{{ product.price }} ₽</p>
    <button @click="addToCart">Добавить в корзину</button>
    <router-link to="/basket">Перейти в корзину</router-link>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template> -->

<template>
  <div class="wrapper">
      <Header isItem title="" />
      <div class="container item">
          <div class="item__img">
              <img class="item__ipreview" :src="product.imageSource" alt="">
          </div>
          <div class="item__descr">
              <h2 class="item__title">{{ product.title }}</h2>
              <p class="item__description">{{ product.description }}</p>
              <div class="item__footer">
                <span class="item__price">{{ product.price.toLocaleString() }} ₽</span>
                <Button isGoodFooter textShow buttonText="В корзину"  @click="addToCart" />
              </div>
            </div>
      </div>
  </div>
</template>

<script>

import { onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Header from '@/components/blocks/HeaderComponent.vue'
import Button from '@/components/ui/Button.vue'

export default {
  name: 'ProductPage',
  components: {
    Button,
    Header
  },
  setup () {
    const route = useRoute()
    const store = useStore()

    const product = computed(() => {
      return store.getters.getProductItem
    })

    onBeforeMount(() => {
      store.commit('SetProductItem', route.params.id)
    })

    const addToCart = () => {
      store.commit('addGoodInBasket', product.value.id)
    }
    return {
      product,
      addToCart
    }
  }
}

</script>

<style lang="scss" scoped>
.wrapper {
    background-image: url(../assets/img/bgItem.png);
    background-size: cover;
    // background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    color: #fff;
}

:deep(.header) {
    background-color: transparent;
    // max-width: 1304px;
}

.item {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;

    &__ipreview {
      width: 501px;
      height: 503px;
    }

    &__descr {
      padding: 60px 10px 40px 150px;
    }

    &__title {
      font-size: 30px;
      font-family: Montserrat;
      font-weight: 500;
      margin-bottom: 46px;
      color: #D58C51;
    }

    &__description {
      font-size: 14px;
      font-family: Montserrat;
      font-weight: 400;
      margin-bottom: 30px;
    }

    &__price {
      font-size: 23px;
      font-family: Montserrat;
      font-weight: 500;
      padding-right: 137px;
    }

    &__footer {
      display: flex;
      align-items: center;
      // justify-content: space-between;
      margin-top: 34px;
      margin-bottom: 30px;
    }

}
</style>
