module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/css-grid-generator/' : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/main.scss";`
      }
    }
  }
};
