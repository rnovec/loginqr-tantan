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
            v-if="value"
            :color="{ dark: '#F38027' }"
            :value="value"
          />
        </v-card-text>

        <v-card-text class="text--primary d-flex justify-center">
          <v-btn color="blue" outlined>
            <v-icon>mdi-facebook</v-icon> Continuar con Facebook
          </v-btn>
        </v-card-text>

        <v-card-text class="text--primary d-flex justify-center">
          <v-btn color="red" outlined>
            <v-icon>mdi-google</v-icon> Continuar con Google
          </v-btn>
        </v-card-text>
      </v-card>
      <br />
      <v-card v-if="state === 'home'" class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              welcome
            </div>
            <v-list-item-title class="headline mb-1">
              {{ user_data.username }}
            </v-list-item-title>
            <v-list-item-subtitle
              >Greyhound divisely hello coldly
              fonwderfully</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="red"></v-list-item-avatar>
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
import { StreamBarcodeReader } from 'vue-barcode-reader'
import VueQrcode from 'vue-qrcode'
import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  mode: 'cors',
  withCredentials: true
})
export default {
  data: () => ({
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
  async created () {
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
          this.value = data.qr_data
          console.log(this.value)
          break
        case 'authorized':
          this.state = 'home'
          this.user_data = data.user_info
          break
        default:
          break
      }
    }
    this.$socketClient.onClose = () => {
      console.log('socket closed')
    }
    this.$socketClient.onError = () => {
      console.log('socket error')
    }
  },
  methods: {
    /**
     * 3. Handle login in Mobile App
     */
    async handleLogin (token, user_id) {
      this.dialog = false
      console.log(token)
      await service.post('/api/v1/login/qrcode/', {
        user_id,
        token
      })
    },
    onDecode (val) {
      if (val) {
        const token = val.split('https://loginqr.tantan.solutions/')[1]
        console.log(token)
        this.dialog = false
        this.handleLogin(token, 1)
      }
    },
    onLoaded () {
      console.log('loaded')
    }
  }
}
</script>
