module.exports = {
  publicPath: '/loginqr-tantan/',
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js'
    }
  },
  transpileDependencies: ['vuetify']
}
