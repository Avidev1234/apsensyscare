const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/site_user',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  app.use(
    '/login_user',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  app.use(
    '/fatch_baner',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  app.use(
    '/fatch_category',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  app.use(
    '/products',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  app.use(
    '/productdetails',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  app.use(
    '/size',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  app.use(
    '/magnifying',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
};
