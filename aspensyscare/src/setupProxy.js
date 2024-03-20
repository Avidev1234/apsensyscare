const { createProxyMiddleware } = require('http-proxy-middleware');
// from signup.js
module.exports = function(app) {
  app.use(
    '/site_user',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  // from userSclice.js

  app.use(
    '/login_user',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
// from bannerSclice.js
  app.use(
    '/fatch_baner',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  // from categorySclice.js
  app.use(
    '/fatch_category',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  // from productSclice.js
  app.use(
    '/products',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  // from productEnterySclice.js
  app.use(
    '/productdetails',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  // from sizeSclice.js
  app.use(
    '/size',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  // from imageMagnifyingSclice.js
  app.use(
    '/magnifying',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  // from usersliceSclice.js
  app.use(
    '/usercart',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  // from addAddressmodel.js
  app.use(
    '/addAddress',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  // from contactus.js
  app.use(
    '/addContact',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  // from getaddressSclice.js
  app.use(
    '/getAddress',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  // from api.js
  app.use(
    '/createOrder',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  app.use(
    '/createSigneture',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  app.use(
    '/featuredbrand',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  app.use(
    '/addwishlist',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  app.use(
    '/removewishlist',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  app.use(
    '/getuserwishlist',
    createProxyMiddleware({
      
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  app.use(
    '/cartdetails',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  app.use(
    '/unsubscribe',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  app.use(
    '/currentorder',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
  app.use(
    '/currentuser',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PROXY_API_URL}`,
      changeOrigin: true,
    })
  );
};
