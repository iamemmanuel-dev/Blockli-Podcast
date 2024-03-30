module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            src: './src',
            '@fonts': './assets/fonts',
            '@images': './assets/images',
            '@appIcons': './assets/appIcons',
            '@navigation/*': './src/Navigation/*',
            '@theme': './src/Theme',
            '@hooks/*': './src/Hooks',
            '@constants': './src/Constants',
            '@UILibrary': './src/UILibrary',
            '@metrics': './src/Metrics',
            '@Utilities/*': './src/Utilities',
            '@data/*': './src/Data/*',
            '@globalStyles': './src/Globals/styles',
            '@dashboardScreens/*': './src/Screens/Dashboard/*',
          },
        },
      ],
    ],
  }
}
