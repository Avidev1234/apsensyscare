const { createProxyMiddleware } = require('http-proxy-middleware');
// from signup.js
module.exports = function(app) {
  app.use(
    '/site_user',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  // from userSclice.js

  app.use(
    '/login_user',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
// from bannerSclice.js
  app.use(
    '/fatch_baner',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  // from categorySclice.js
  app.use(
    '/fatch_category',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  // from productSclice.js
  app.use(
    '/products',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  // from productEnterySclice.js
  app.use(
    '/productdetails',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  // from sizeSclice.js
  app.use(
    '/size',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  // from imageMagnifyingSclice.js
  app.use(
    '/magnifying',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  // from usersliceSclice.js
  app.use(
    '/usercart',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  // from addAddressmodel.js
  app.use(
    '/addAddress',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  // from getaddressSclice.js
  app.use(
    '/getAddress',
    createProxyMiddleware({
      target: 'http://localhost:80/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  // from api.js
  app.use(
    '/createOrder',
    createProxyMiddleware({
      target: 'http://localhost:80/updatedApsensyscare/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  app.use(
    '/createSigneture',
    createProxyMiddleware({
      target: 'http://localhost:80/updatedApsensyscare/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
  app.use(
    '/login_push_user',
    createProxyMiddleware({
      target: 'http://localhost:80/updatedApsensyscare/apsensyscare/backendapi',
      changeOrigin: true,
    })
  );
};
