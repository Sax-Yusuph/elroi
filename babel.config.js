const moduleResolverConfig = {
  root: [resolve('./src')],
  extensions: [
    '.ios.ts',
    '.android.ts',
    '.ts',
    '.ios.tsx',
    '.android.tsx',
    '.tsx',
    '.jsx',
    '.js',
    '.json',
  ],
  alias: {
    '@assets': resolve(__dirname, './assets'),
    '@model': resolve(__dirname, './src/model'),
    '@screens': resolve(__dirname, './src/screens'),
    '@navigation': resolve(__dirname, './src/navigation'),
    '@layouts': resolve(__dirname, './src/scenes/layouts'),
    '@hooks': resolve(__dirname, './src/hooks'),
    '@elements': resolve(__dirname, './src/components/elements'),
    '@forms': resolve(__dirname, './src/components/forms'),
    '@lib': resolve(__dirname, './src/components/lib'),
    '@components': resolve(__dirname, './src/components'),
    '@types': ['./src/@types'],
  },
};

module.exports = function (api) {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];

  const plugins = [
    ['module-resolver', moduleResolverConfig],
    'react-native-reanimated/plugin',
  ];

  return {presets, plugins};
};

// = {
//  presets: ['module:metro-react-native-babel-preset'],
//};
