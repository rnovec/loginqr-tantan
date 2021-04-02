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
      <v-card class="mx-auto" v-if="state === 'login'">
        <v-card-text class="text--primary d-flex justify-center">
          <!-- 1. Render a QR Code with TanTan Server (Blockchain) -->
          <vue-qrcode
            :color="{ dark: '#F38027' }"
            :value="Math.random(0, 1000).toString()"
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
            <v-btn color="primary" text @click="handleLogin">
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

export default {
  data: () => ({
    state: 'login',
    drawer: null,
    dialog: false,
    socket: null,
    result: ''
  }),
  components: {
    StreamBarcodeReader,
    VueQrcode
  },
  created () {
    // Connect socket and reconnect every 5 seconds
    this.$socketClient.onOpen = () => {
      console.log('socket connected')
    }
    this.$socketClient.onMessage = message => {
      // Decode the JSON
      console.log('Got websocket message ' + message.data)
      const data = JSON.parse(message.data)
      // Handle errors
      if (data.error) {
        alert(data.error)
        return
      }
      // Handle joining
      // TODO: wait por message with the user data to success login
      if (data.join) {
        console.log('Joining room ' + data.join)
        // Handle leaving
      } else if (data.leave) {
        console.log('Leaving room ' + data.leave)
        // Handle getting a message
      } else if (data.message || data.msg_type !== 0) {
        console.log('Leaving room ' + data.message)
      } else {
        console.log('Cannot handle message!')
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
    handleLogin () {
      this.dialog = false
      // TODO: replace for API /login
      this.$socketClient.instance.send(
        JSON.stringify({ data: {}, command: 'decode_qr' })
      )
    },
    onDecode (val) {
      if (val) {
        this.result = val
        this.dialog = false
        this.handleLogin()
      }
    },
    onLoaded () {
      console.log('loaded')
    }
  }
}
</script>
