<template>
  <div class="main">
    <div class="main__header">
      <Header />
    </div>
    <Main />
  </div>
</template>

<script>
// import { ref } from 'vue'
import Header from '@/components/blocks/HeaderMain.vue'
import Main from '@/components/blocks/Main.vue'

export default {
  name: 'MainPage',
  components: {
    Header,
    Main
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: #161516;
  padding-bottom: 45px;
}

.main__header {
  z-index: 1;
  background-color: #161516;
  position: fixed;
  width: 100%;
  padding-top: 54px;
  padding-bottom: 50px;
}
</style>
