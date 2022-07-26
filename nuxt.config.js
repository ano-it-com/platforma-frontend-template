import {
  version,
} from './package';
import modulesConfig from './modules.config.js';

const IS_DEV = process.env.NODE_ENV !== 'production';

export default {
  ssr: true,
  dev: IS_DEV,
  debug: IS_DEV,
  head: {
    title: 'platforma-skeleton',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css',
      },
    ],
  },

  css: [
    'normalize.css',
    '@fortawesome/fontawesome-free/css/all.css',
  ],

  modulesDir: [
    'node_modules',
    'modules',
  ],

  buildModules: [
    'nuxt-esbuild',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@ergonode/vuems',
    '@nuxtjs/router',
  ],

  router: {
    middleware: [
      'modules-middleware-loader',
    ],
  },

  vuems: {
    vuex: true,
    isDev: process.env.NODE_ENV !== 'production',
    logLoadedModules: process.env.NODE_ENV !== 'production',
    required: modulesConfig.required,
    modules: modulesConfig,
  },

  vue: {
    config: {
      performance: true,
    },
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/component-cache',
      {
        maxAge: 1000 * 60 * 60,
      },
    ],
    'cookie-universal-nuxt',
  ],

  axios: {},

  loading: {
    color: 'white',
    height: '2px',
  },

  googleFonts: {
    download: true,
    prefetch: true,
    families: {
      Rubik: [
        400,
        500,
        700,
      ],
      Ruda: [
        800,
      ],
    },
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {
    extractCSS: true,

    loaders: {
      vue: {
        compiler: require('vue-template-babel-compiler'),
      },
    },
    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
      ],
    },

    extend(config, {
      isDev,
      isClient,
    }) {
      if (isDev) {
        config.devtool = isClient ? 'source-map' : 'inline-source-map';
      }

      config.node = {
        fs: 'empty',
      };
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
        maxSize: 249856,
      },
    },
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_BASE_URL,
    },
    NUXT_ENV: process.env.NUXT_ENV || process.env.NODE_ENV || 'development',
    VUE_APP_VERSION: version,
    MERCURE_HUB: process.env.MERCURE_HUB,
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_BASE_URL_INSIDE || process.env.API_BASE_URL,
    },
  },
};
