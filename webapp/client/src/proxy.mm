const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://192.168.42.156:4000',
      changeOrigin: true,
    }),
  )
}
