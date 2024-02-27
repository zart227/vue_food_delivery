export default {
  state: {
    goods: [
      // Список товаров
      {
        id: 1,
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700,
        imageSource: require('@/assets/img/image0.png')
      },
      {
        id: 2,
        title: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: 1600,
        imageSource: require('@/assets/img/image1.png')
      },
      {
        id: 3,
        title: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        price: 1820,
        imageSource: require('@/assets/img/image2.png')
      },
      {
        id: 4,
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700,
        imageSource: require('@/assets/img/image0.png')
      },
      {
        id: 5,
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700,
        imageSource: require('@/assets/img/image0.png')
      },
      {
        id: 6,
        title: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: 1600,
        imageSource: require('@/assets/img/image1.png')
      },
      {
        id: 7,
        title: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        price: 1820,
        imageSource: require('@/assets/img/image2.png')
      },
      {
        id: 8,
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700,
        imageSource: require('@/assets/img/image0.png')
      }
    ],
    Product: null
  },
  getters: {
    // Геттер для получения всех товаров
    getGoods: state => state.goods,
    // Геттер для получения товара по id
    getGoodById: state => id => {
      return state.goods.find(good => good.id === id)
    },
    getProductItem: state => state.Product
  },
  mutations: {
    SetProductItem (state, val) {
      state.Product = state.goods.find(element => {
        return element.id === +val
      })
    }
  },
  actions: {
  },
  modules: {
  }
}
