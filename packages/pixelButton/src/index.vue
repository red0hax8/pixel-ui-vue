<template>
  <div
    :class="['pixelButton','pixel-button-'+size,{'selected':selected}]"
    :style="{'font-size':fontSize + 'px','max-width': boxWidth + 'px'}"
    :key="randomNum"
  >
    <div class="pixelBorder">
      <div class="pixelPiece">
        <div></div>
        <div></div>
        <span></span>
        <div></div>
        <div></div>
      </div>
      <div class="pixelPiece">
        <div></div>
        <span></span>
        <div></div>
        <span></span>
        <div></div>
      </div>
    </div>
    <div class="text">
      <div class="textContent">
        <slot></slot>
      </div>
    </div>
    <div class="pixelBorder">
      <div class="pixelPiece">
        <div></div>
        <span></span>
        <div></div>
        <span></span>
        <div></div>
      </div>
      <div class="pixelPiece">
        <div></div>
        <div></div>
        <span></span>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pixelButton",
  props: {
    // small, middle, max
    size: {
      type: String,
      default: "middle"
    },
    fontSize: {
      type: Number
    },
    selected: {
      type: Boolean
    }
  },
  mounted() {
    this.randomNum = Math.random();
  },
  data() {
    return {
      randomNum: 0
    };
  },
  methods: {},
  computed: {
    boxWidth() {
      let width = 0;
      switch (this.size) {
        case "small":
          width = 140;
          break;
        case "middle":
          width = 200;
          break;
        case "max":
          width = 300;
          break;
      }
      return width;
    }
  }
};
</script>
<style lang="scss" scoped>
  @import "./css/index.scss";
</style>