import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import VueSimpleWebSocket from 'vue-simple-websocket'

const wsPath =
  process.env.VUE_APP_SOCKET_URL +
  '/login/stream/?client_id=' +
  process.env.VUE_APP_CLIENT_ID_TEST
console.log('Connecting to ' + wsPath)

Vue.use(VueSimpleWebSocket, wsPath, {
  reconnectEnabled: true,
  reconnectInterval: 1000 // time to reconnect in milliseconds
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
