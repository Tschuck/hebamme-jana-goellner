const translations = require('./i18n/index.js');

module.exports = {
  buildModules: ['@nuxtjs/tailwindcss', 'nuxt-i18n'],
  // Defaults options
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    vueI18n: {
      fallbackLocale: 'de',
      messages: translations,
    }
  },
  components: true
};