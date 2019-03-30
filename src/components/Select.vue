<template>
  <div class="select" :style="{ width: `${width || 200}px` }">
    <button
      @click="showSelect"
      @blur="blur"
      class="select__button"
    >
      {{ Object.keys(selectedItem).length ? selectedItem.text : "Select item..." }}
    </button>
    <transition name="slide">
      <ul
        v-show="selectStatus"
        @mouseover="activateTarget"
        @mouseleave="deactivateTarget"
        class="select__menu"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          @click="selectItem(item)"
          class="select__menu-item"
        >
          {{ item.text }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Select",

  props: {
    items: {
      type: Array,
      required: true
    },
    width: {
      type: Number,
      required: false
    }
  },

  data() {
    return {
      selectStatus: false,
      target: false,
      selectedItem: {}
    };
  },

  methods: {
    showSelect() {
      this.selectStatus = true;
    },

    hideSelect() {
      this.selectStatus = false;
    },

    activateTarget() {
      this.target = true;
    },

    deactivateTarget() {
      this.target = false;
    },

    blur() {
      if (!this.target) this.hideSelect();
    },

    selectItem(item) {
      this.selectedItem = item;
      this.$emit('select', item);
      this.hideSelect();
    }
  }
};
</script>

<style lang="less" scoped>
@border: #eee;
@background: #f9f9f9;

.select {
  position: relative;
  display: inline-block;

  &__button {
    width: 100%;
    outline: none;
    background-color: @background;
    padding: 5px 40px;
    font-size: 16px;
    border: 1px solid @border;
    border-radius: 5px;
    color: #666;
    cursor: pointer;
    transition: background-color 0.3s;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    &:hover {
      background-color: @border;
    }
  }

  &__menu {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background-color: @background;
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 10;

    &-item {
      padding: 10px 20px;
      font-family: "Tahoma", sans-serif;
      cursor: pointer;
      color: #666;

      &:not(:last-child) {
        border-bottom: 1px solid @border;
      }

      &:hover {
        background-color: @border;
      }
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s;
  }

  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-10%);
  }
}
</style>
