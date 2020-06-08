import pixelButton from './pixelButton'
import pixelDropInput from './pixelDropInput'
import pixelInput from './pixelInput'
import pixelPopUps from './pixelPopUps'
import pixelSlider from './pixelSlider'

export default {
  install(Vue) {
    Vue.use(pixelButton);
    Vue.use(pixelDropInput);
    Vue.use(pixelInput);
    Vue.use(pixelPopUps);
    Vue.use(pixelSlider);
  },
}