<template>
  <div class="main">
    <CardProduct
      v-for="( cartData, index ) in prodCartData"
      v-bind:key="index"
      :title="cartData.title"
      :description="cartData.description"
      :price="cartData.price"
      :imageSource="cartData.imageSource"
      @clickMain = "addToBasket(cartData.id)"
    />
  </div>
</template>

<script>
// import { ref } from 'vue'
import { computed } from 'vue'
import CardProduct from '../elements/CardProduct.vue'
import { useStore } from 'vuex'

export default {
  name: 'MainComponent',
  components: {
    CardProduct
  },
  data () {
  },
  props: {
  },
  setup () {
    const store = useStore()

    // Создаем вычисляемое свойство для получения списка товаров
    const prodCartData = computed(() => {
      // Используем геттер getGoods из хранилища для получения списка товаров
      return store.getters.getGoods
    })

    // Создаем функцию для добавления товара в корзину
    const addToBasket = (goodId) => {
      // Вызываем мутацию addGoodInBasket из хранилища с переданным идентификатором товара
      store.commit('addGoodInBasket', goodId)
    }
    return {
      prodCartData,
      addToBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 170px;
  display: grid;
  grid-template-columns: repeat(4, 312px);
  justify-content: center;
  grid-column-gap: 20px;
  grid-row-gap: 35px;
}
</style>
