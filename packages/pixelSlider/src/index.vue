<template>
  <div class="pixelSlider">
    <input
      type="range"
      id="pixelSlider"
      :min="sliderArray[0]"
      :max="sliderArray[1]"
      :step="sliderStep"
      :value="value"
      @change="change"
    />
    <div class="shadow"></div>
    <div class="sliderNumBox">
      <p>{{promptText}}</p>
      {{value}}
    </div>
  </div>
</template>
<script>
export default {
  name: "pixelSlider",
  props: {
    value: {
      default: ""
    },
    sliderArray: {
      type: Array,
      default: () => {
        return [0, 255]
      },
      required: true
    },
    sliderStep: {
      type: Number,
      default: 1
    },
    promptText: {
      type: String
    }
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {
    change() {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
<style lang="scss" scoped>
  @import "./css/index.scss";
</style>