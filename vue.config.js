module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/global.scss";',
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  configureWebpack: {
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\/assets\/svg\/.*\.svg$/,
          loader: 'vue-svg-loader',
        },
      ],
    },
  },
};
