<template>
  <div class="header-page">
    <header class="header">
      <custom-select 
        :items="backgrounds"
        @select="changeBackground"
      ></custom-select>
    </header>
    <div class="background" :style="{ backgroundImage: `url(${backgroundUrl})` }"></div>
  </div>
</template>

<script>
import Select from "../components/Select";

import background_1 from "../assets/wallpaper-1.jpg";
import background_2 from "../assets/wallpaper-2.jpg";
import background_3 from "../assets/wallpaper-3.jpg";
import background_4 from "../assets/wallpaper-4.jpg";

export default {
  components: {
    "custom-select": Select
  },

  data() {
    return {
      backgroundUrl: background_1,

      backgrounds: [
        {
          text: "wallpaper 1",
          url: background_1
        },
        {
          text: "wallpaper 2",
          url: background_2
        },
        {
          text: "wallpaper 3",
          url: background_3
        },
        {
          text: "wallpaper 4",
          url: background_4
        }
      ]
    }
  },

  methods: {
    changeBackground(item) {
      this.backgroundUrl = item.url;
    }
  }
}
</script>

<style lang="less" scoped>
  .header-page {
    height: 100%;

    .header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 20px 30px;
      border-bottom: 1px solid #DDD;
      z-index: 5;
      background-color: #fff;
    }

    .background {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: #666;
      background-size: cover;
      background-position: center center;
      transition: background-image .2s;
    }
  }
</style>
