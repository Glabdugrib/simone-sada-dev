import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

Vue.config.productionTip = false

// fallback language
i18n.locale = 'en'

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
