import pixelButton from './src/index.vue';
pixelButton.install = function(Vue) {
    Vue.component(pixelButton.name, pixelButton);
};
export default pixelButton;