<template>
    <div class="main">
        <div class="main__header">
            <router-link to="/">
                <Button fontIcon='fa-solid fa-arrow-left fa-2xs' isBasketCard iconShow />
            </router-link>
            <h1 class="main__header-info">Корзина с выбранными товарами</h1>
            <Button isBasketFooter textShow buttonText="Выйти" @click="logout" />
        </div>
    </div>
</template>

<script>
// import { ref } from 'vue'
import Button from '../ui/Button.vue'
export default {
  name: 'HeaderBasket',
  components: {
    Button
  },
  props: {
  },
  methods: {
    logout () {
      // Очищаем локальное хранилище и перенаправляем на страницу авторизации
      localStorage.setItem('currentUser', [])
      localStorage.setItem('isAuthenticated', false)
      this.$router.push('/auth')
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.main__header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 74px;
}

.main__header-info {
    color: #FFF;
    font-family: Montserrat;
    font-size: 31px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
}
</style>
