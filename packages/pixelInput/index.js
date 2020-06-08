import pixelInput from './src/index.vue';
pixelInput.install = function(Vue) {
    Vue.component(pixelInput.name, pixelInput);
};
export default pixelInput;