import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false



router.afterEach((to, from) => {
  if (to.params.userId && to.params.userId !== from.params.userId) {
    store.dispatch('chat/getChat', {
      id: to.params.userId
    })
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
