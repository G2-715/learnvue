<template>
	<div class="select-page">
		<div class="select">
			<button
				@click="showSelect"
				@blur="blur"
				class="select__button"
			>
				{{ selectValue ? selectValue : "Select item..." }}
			</button>
			<transition name="slide">
				<ul
					v-show="selectStatus"
					@mouseover="activateTarget"
					@mouseleave="deactivateTarget"
					class="select__menu"
				>
					<li
						v-for="item in selectItems"
						@click="selectItem(item.text)"
						class="select__menu-item"
					>
						{{ item.text }}
					</li>
				</ul>
			</transition>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        selectStatus: false,
        target: false,
        selectValue: "",

        selectItems: [
          {text: "item-1"},
          {text: "item-2"},
          {text: "item-3"},
          {text: "item-4"},
          {text: "item-5"},
          {text: "item-6"}
        ]
      }
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

      selectItem(text) {
        this.selectValue = text;

        this.hideSelect();
      }
    }
  }
</script>

<style lang="less" scoped>
	@border: #eee;
	@background: #f9f9f9;

	.select-page {
		width: 100%;
		min-height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.select {
		position: relative;
		display: inline-block;

		&__button {
			width: 200px;
			outline: none;
			background-color: @background;
			padding: 5px 40px;
			font-size: 16px;
			border: 1px solid @border;
			border-radius: 5px;
			color: #666;
			cursor: pointer;
			transition: background-color .3s;
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

			&-item {
				padding: 10px 20px;
				font-family: 'Tahoma', sans-serif;
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
	}

	.slide-enter-active, .slide-leave-active {
		transition: all .3s;
	}

	.slide-enter, .slide-leave-to {
		opacity: 0;
		transform: translateY(-10%);
	}
</style>