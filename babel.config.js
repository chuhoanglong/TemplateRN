module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
    // development: {
    //   plugins: ['transform-remove-console'],
    // },
  },
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@hook': './src/hook',
          '@provider': './src/provider',
          '@tools': './src/tools',
          '@i18n': './src/i18n',
          '@redux': './src/redux',
          '@routes': './src/routes',
          '@scenes': './src/scenes',
          '@services': './src/services',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@env': './src/env.js',
        },
      },
    ],
  ],
};
