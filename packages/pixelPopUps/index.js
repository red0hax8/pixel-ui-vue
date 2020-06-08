import pixelPopUps from './src/index.vue';
pixelPopUps.install = function(Vue) {
    Vue.component(pixelPopUps.name, pixelPopUps);
};
export default pixelPopUps;