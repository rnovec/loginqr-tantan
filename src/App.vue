<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app clipped-right flat>
      <b>Login con TanTan</b>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app width="300">
      <v-navigation-drawer
        v-model="drawer"
        absolute
        color="grey lighten-3"
        mini-variant
      >
        <v-avatar
          class="d-block text-center mx-auto mt-4"
          color="grey darken-1"
          size="36"
        ></v-avatar>

        <v-divider class="mx-3 my-5"></v-divider>
      </v-navigation-drawer>

      <v-sheet color="grey lighten-5" height="128" width="100%"></v-sheet>

      <v-list class="pl-14" shaped> </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer app clipped right>
      <v-list> </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-card v-if="state === 'login'" class="mx-auto">
        <v-card-text class="text--primary d-flex justify-center">
          <!-- 1. Render a QR Code with TanTan Server -->
          <vue-qrcode
            v-if="token"
            :color="{ dark: '#F38027' }"
            :value="token"
          />
        </v-card-text>

        <v-card-text>
          <v-form ref="form">
            <v-text-field
              v-model="socket_url"
              :counter="10"
              label="Socket server URL"
              required
            ></v-text-field>
            <v-text-field
              v-model="client_id"
              :counter="10"
              label="Client ID"
              required
            ></v-text-field>

            <v-text-field v-model="token" label="Token" required></v-text-field>
            <v-btn @click="recconectWebsocket">Generar QR</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
      <br />
      <v-card v-if="state === 'home'" class="mx-auto" max-width="500" outlined>
        <v-list-item three-line v-if="user_data.scope_result">
          <v-list-item-content>
            <div class="overline mb-4">
              welcome
            </div>
            <v-list-item-title class="title">
              {{ user_data.scope_result.personal_data.first_name }}
              {{ user_data.scope_result.personal_data.last_name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{
              user_data.scope_result.personal_data.email
            }}</v-list-item-subtitle>

            <v-list>
              <v-list-group
                v-for="(key, value) of user_data.scope_result"
                :key="key"
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="value"></v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item v-for="(k, v) of key" :key="k">
                  <v-list-item-content>
                    <v-list-item-title
                      ><b>{{ k }}</b> ({{ v }})</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-list-item-content>

          <v-list-item-avatar size="80" v-if="user_data.scope_result.biometrics"
            ><v-img :src="user_data.scope_result.biometrics.image"></v-img
          ></v-list-item-avatar>
          <v-list-item-avatar
            v-else
            size="80"
            rounded
            color="red"
          ></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined rounded color="red" @click="state = 'login'">
            Logout
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-dialog v-model="dialog" width="500">
        <!-- <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            Click Me
          </v-btn>
        </template> -->

        <v-card>
          <v-card-title class="headline grey lighten-2">
            Scan QR Code
          </v-card-title>

          <!-- 2. Use the phone to decode QR code data -->
          <StreamBarcodeReader
            v-if="dialog"
            @decode="onDecode"
            @loaded="onLoaded"
          ></StreamBarcodeReader>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text>
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>

    <v-bottom-navigation>
      <v-btn value="recent">
        <span>Login</span>

        <v-icon>mdi-lock</v-icon>
      </v-btn>

      <v-btn value="favorites" @click="dialog = true">
        <span>Scan</span>

        <v-icon>mdi-qrcode</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import Vue from 'vue'
import { StreamBarcodeReader } from 'vue-barcode-reader'
import VueQrcode from 'vue-qrcode'
import axios from 'axios'
import VueSimpleWebSocket from 'vue-simple-websocket'
const client_id = process.env.VUE_APP_CLIENT_ID_TEST
const socket_url = process.env.VUE_APP_SOCKET_URL
const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  mode: 'cors',
  withCredentials: true
})
export default {
  data: () => ({
    client_id,
    socket_url,
    token: '',
    state: 'login',
    drawer: null,
    dialog: false,
    user_data: {},
    value: null,
    result: ''
  }),
  components: {
    StreamBarcodeReader,
    VueQrcode
  },
  async created () {},
  methods: {
    recconectWebsocket () {
      const wsPath =
        this.socket_url + '/login/stream/?client_id=' + this.client_id
      console.log('Connecting to ' + wsPath)

      try {
        Vue.use(VueSimpleWebSocket, wsPath, {
          reconnectEnabled: false,
          reconnectInterval: 1000 // time to reconnect in milliseconds
        })
      } catch (error) {
        alert(error)
      }

      // Connect socket and reconnect every 5 seconds
      this.$socketClient.onOpen = () => {
        console.log('socket connected')
      }
      this.$socketClient.onMessage = message => {
        // Decode the JSON
        const data = JSON.parse(message.data)
        console.log(data)
        switch (data.action) {
          case 'qrcode':
            this.token = data.qr_data
            break
          case 'authorized':
            this.state = 'home'
            this.user_data = data.user_info
            break
          default:
            break
        }
      }
      this.$socketClient.onClose = error => {
        alert(error)
        console.log('socket closed', error)
      }
      this.$socketClient.onError = error => {
        alert(error)
        console.log('socket error', error)
      }
    },
    /**
     * 3. Handle login in Mobile App
     */
    async handleLogin (token, user_data) {
      this.dialog = false
      console.log(token)
      await service.post('/api/v1/login/qrcode/', {
        user_data,
        token
      })
    },
    onDecode (val) {
      if (val) {
        const token = val.split('https://loginqr.tantan.solutions/')[1]
        console.log(token)
        this.dialog = false
        this.handleLogin(token, { biometrics: [] })
      }
    },
    onLoaded () {
      console.log('loaded')
    }
  }
}
</script>
