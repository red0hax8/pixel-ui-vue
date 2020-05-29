<template>
  <div class="pixelPopUps" v-show="layerShow">
    <div class="popUpsBox">
      <div class="popTextTopBox">
        <div class="columnBox"></div>
        <div class="columnBox"></div>
        <div class="columnBox"></div>
        <!-- shadown -->
        <div class="shadowBox"></div>
        <div class="shadowBox"></div>
      </div>
      <div class="popText">
        <p>{{layerText}}</p>
        <!-- shadown -->
        <div class="shadowBox"></div>
      </div>
      <div class="popTextBottomBox">
        <div class="columnBox"></div>
        <div class="columnBox"></div>
        <div class="columnBox"></div>
        <div class="columnBox"></div>
        <div class="columnBox"></div>
        <div class="columnBox"></div>
        <!-- shadown -->
        <div class="shadowBox"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "pixelPopUps",
  created() {
    Vue.prototype.$layer = (layerText, time) => {
      if (!layerText) {
        this.layerShow = false;
        return;
      }
      this.layerText = layerText;
      this.layerShow = true;
      let times = time ? time : 3000;
      setTimeout(() => {
        this.layerShow = false;
      }, times);
    };
  },
  data() {
    return {
      layerShow: false,
      layerText: ""
    };
  }
};
</script>
<style lang="scss" scoped>
@import "./css/index.scss";
</style>