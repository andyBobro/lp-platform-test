import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

document.addEventListener('userLoader:show', () => {
  document.querySelector('#userLoader').style.display = 'flex'
})

document.addEventListener('userLoader:hide', () => {
  document.querySelector('#userLoader').style.display = 'none'
})

document.addEventListener('chatLoader:show', () => {
  document.querySelector('#chatLoader').style.display = 'flex'
})

document.addEventListener('chatLoader:hide', () => {
  document.querySelector('#chatLoader').style.display = 'none'
})

document.addEventListener('pageLoader:show', () => {
  document.querySelector('#pageLoader').style.display = 'flex'
})

document.addEventListener('pageLoader:hide', () => {
  document.querySelector('#pageLoader').style.display = 'none'
})

router.afterEach((to, from) => {
  if (to.params.userId && to.params.userId !== from.params.userId) {
    if (document.querySelector('#chatLoader')) {
      document.dispatchEvent(new Event('chatLoader:show'))
    }

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
