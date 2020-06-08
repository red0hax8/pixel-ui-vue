import pixelSlider from './src/index.vue';
pixelSlider.install = function(Vue) {
    Vue.component(pixelSlider.name, pixelSlider);
};
export default pixelSlider;