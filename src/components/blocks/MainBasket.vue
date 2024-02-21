<template>
  <div class="main">
    <CardProduct
      v-for="( cartData, index ) in prodCartData"
      v-bind:key="index"
      :title="cartData.title"
      :description="cartData.description"
      :price="cartData.price"
      :imageSource="cartData.imageSource"
      :line="true"
      @clickBasket="removeFromBasket(index)"
    />
  </div>
</template>

<script>
// import { ref } from 'vue'
import { computed } from 'vue'
import CardProduct from '../elements/CardProduct.vue'
import { useStore } from 'vuex'
export default {
  name: 'MainBasket',
  components: {
    CardProduct
  },
  props: {
  },
  data () {
  },
  setup () {
    const store = useStore()

    const prodCartData = computed(() => {
      return store.getters.getBasketGoods
    })

    // Создаем функцию для удаления товара из корзины
    const removeFromBasket = (goodIndex) => {
      console.log('Удалено из корзины', goodIndex)
      // Вызываем мутацию removeGoodFromBasket из хранилища с переданным индексом товара для удаления
      store.commit('removeGoodFromBasket', goodIndex)
    }
    return {
      prodCartData,
      removeFromBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 35px;
}
</style>
