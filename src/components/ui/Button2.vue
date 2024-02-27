<template>
  <button
    :class="{
      'button': true,
      'button_remove': remove,
      'button_arrow': arrow
    }"
  >
    <span class="button__line"></span>
  </button>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'ButtonUI',
  components: {
  },
  props: {
    remove: {
      type: Boolean,
      default: false
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.button{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: orange;
    border-color: orange;
  }

  &__line {
    position: relative;
    height: 2px;
    width: 12px;
    display: block;
    background-color: #fff;
    border-radius: 2px;

    &::before{
      content: '';
      position: absolute;
      left: 0;
      transform: rotate(90deg);
      height: 2px;
      width: 12px;
      background-color: #fff;
      border-radius: 2px;
    }
  }

  &_remove {
    transform: rotate(45deg);
    background-color: orange;

    &:hover {
      background-color: #fff;
      border-color: #fff;
    }

    .button__line {
      background-color: orange;

      &::before {
        background-color: orange;
      }
    }
  }
  &_arrow {
    background-color: orange;

    &:hover {
      background-color: #fff;
      border-color: #fff;
    }

    .button__line {
      background-color: orange;

      &::before {
        top: 2px;
        transform: rotate(45deg);
        width: 6px;
        background-color: orange;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: -2px;
        transform: rotate(-45deg);
        height: 2px;
        width: 6px;
        background-color: orange;
        border-radius: 2px;
      }
    }
  }
}
</style>
