import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import VueSimpleWebSocket from 'vue-simple-websocket'

const wsScheme = window.location.protocol === 'https:' ? 'wss' : 'ws'
const wsPath = wsScheme + '://' + window.location.hostname + ':8000/login/stream/'
console.log('Connecting to ' + wsPath)

Vue.use(VueSimpleWebSocket, wsPath, {
  reconnectEnabled: true,
  reconnectInterval: 5000 // time to reconnect in milliseconds
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
