import goods from './goods'
export default {
  state: {
    goodsInBasket: []
  },
  getters: {
    // Геттер для получения товаров в корзине
    getBasketGoods: state => state.goodsInBasket
  },
  mutations: {
    // Мутация для добавления товара в корзину
    addGoodInBasket (state, value) {
      goods.state.goods.forEach(good => {
        if (value === good.id) {
          const itemBasket = {
            id: good.id,
            imageSource: good.imageSource,
            title: good.title,
            price: good.price
          }
          state.goodsInBasket.push(itemBasket)
        }
      })
      localStorage.basket = JSON.stringify(state.goodsInBasket)
    },
    SetStoreBasket (state, val) {
      state.goodsInBasket = JSON.parse(localStorage.getItem('basket'))
      console.log(state.goodsInBasket)
    },
    // Мутация для удаления товара из корзины
    removeGoodFromBasket (state, value) {
      state.goodsInBasket.splice(value, 1)
      localStorage.basket = JSON.stringify(state.goodsInBasket)
    }
  },
  actions: {
    // Action для удаления товара из корзины
    removeGoodFromBasket ({ commit }, index) {
      commit('removeGoodFromBasket', index)
    }
  },
  modules: {
  }
}
