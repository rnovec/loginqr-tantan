import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import VueSimpleWebSocket from 'vue-simple-websocket'

const wsScheme = window.location.protocol === 'https:' ? 'wss' : 'ws'
const wsPath = wsScheme + '://' + window.location.hostname + ':8000/login/stream/'
console.log('Connecting to ' + wsPath)

window.document.cookie = 'client_id=2c56f0cd-27c5-4148-9fb2-120e15360890;'

Vue.use(VueSimpleWebSocket, wsPath, {
  reconnectEnabled: true,
  reconnectInterval: 1000 // time to reconnect in milliseconds
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
