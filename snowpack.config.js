// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {
      url: '/',
      static: true
    },
    src: "/dist"
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
    [
      '@snowpack/plugin-webpack',
      {
        htmlMinifierOptions: false
      }
    ]
  ],
  // experiments: {
  //   optimize: {
  //     bundle: true,
  //     minify: true,
  //     target: 'es2018'
  //   }
  // }
  // installOptions: {},
  // devOptions: {},
  // buildOptions: {},
};
