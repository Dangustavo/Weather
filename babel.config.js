module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  plugins: [
    [
      'module-resolver',
      {
        cws: 'babelrc',
        root: ['./src'],
        extensions:[
          'ios.ts',
          'android.ts',
          '.ts',
          'ios.tsx',
          'android.tsx',
          '.tsx',
          'jsx',
          '.js',
          '.json',
          '.svg',
        ],
        alias:{
          assets: './src/assets',
          components: './src/components',
          screens: './src/screens',
          utils: './src/utils',
          api: './src/api',
        }
      }
    ]
  ]
};
