import goods from './goods'
export default {
  state: {
    goodsInBasket: [

    ]
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
          state.goodsInBasket.push(good)
        }
      })
    },
    // Мутация для удаления товара из корзины
    removeGoodFromBasket (state, value) {
      state.goodsInBasket.splice(value, 1)
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
