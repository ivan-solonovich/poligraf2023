const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    sitemap: {
      pretty: true,

      urls: [ 'https://www.polygraf2023.com/',
              'https://www.polygraf2023.com/price',
              'https://www.polygraf2023.com/treason',
              'https://www.polygraf2023.com/court',
              'https://www.polygraf2023.com/teens',
              'https://www.polygraf2023.com/prev',
              'https://www.polygraf2023.com/about',
              'https://www.polygraf2023.com/history'
      ]

    }
  }
})
