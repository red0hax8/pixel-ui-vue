<template>
  <div class="pixelInput">
    <div class="border"></div>
    <input :value="value" @input="input" type="text" :placeholder="placeholder" />
    <div class="border"></div>
  </div>
</template>
<script>
export default {
  name: "pixelInput",
  props: {
    value: {
      default: ""
    },
    placeholder: {
      default: ""
    }
  },
  mounted() {
    this.text_ = this.text;
  },
  data() {
    return {};
  },
  methods: {
    input() {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
<style lang="scss" scoped>
  @import "./css/index.scss";
</style>