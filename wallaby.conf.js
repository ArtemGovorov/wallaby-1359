// see https://github.com/ArtemGovorov/wallaby-1359 for simple working example
// after issue https://github.com/wallabyjs/public/issues/1359#issuecomment-338633214
//
module.exports = function (wallaby) {
  // eslint-disable-next-line
  console.log(wallaby);
  return {
    files: [
      { pattern: 'src/containers/SampleView.js', load: false },
      // { pattern: 'src/**/*.+(t|j)s*', load: false },
      { pattern: '!src/__tests__/*.test.ts', load: false },
    ],

    tests: [
      'src/__tests__/*.test.ts',
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    compilers: {
      'src/**/*.+(t|j)s*': wallaby.compilers.typeScript(),
    },

    preprocessors: {
      // eslint-disable-next-line global-require, import/no-extraneous-dependencies
      '**/*.+(js|jsts)': file => file.type === 'ts' ? file.content : require('babel-core').transform(
        file.changeExt('js').content,
        {sourceMap: true, compact: false, filename: file.path, presets: ['react-native']}),
    },

    testFramework: 'jest',

    debug: true,
    // for node.js tests you need to set env property as well
    // https://wallabyjs.com/docs/integration/node.html
  };
};