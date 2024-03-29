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
            '@appIcons': './assets/appIcons',
            '@navigation/*': './src/Navigation/*',
            '@theme': './src/Theme',
            '@UILibrary': './src/UILibrary',
            '@dashboardScreens/*': './src/Screens/Dashboard/*',
          },
        },
      ],
    ],
  }
}
