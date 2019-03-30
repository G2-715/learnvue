<template>
	<div class="select-page">
		<custom-select :items="selectItems"></custom-select>
	</div>
</template>

<script>
	import Select from "../components/Select.vue";

  export default {
    components: {
      "custom-select": Select
    },

    data() {
      return {
        selectItems: [
          {text: "item-1"},
          {text: "item-2"},
          {text: "item-3"},
          {text: "item-4"},
          {text: "item-5"},
          {text: "item-6"}
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
	.select-page {
		width: 100%;
		min-height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
    flex-direction: column
	}
</style>