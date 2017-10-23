module.exports = function (wallaby) {

  return {
    files: [
      { pattern: 'src/**/*.+(t|j)s*' },
      { pattern: '!src/__tests__/*.test.ts' },
    ],

    tests: [
      'src/__tests__/BluethoothConnector.test.ts',
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    compilers: {
      'src/**/*.+(t|j)s*': wallaby.compilers.typeScript()
    },

    preprocessors: {
      '**/*.js': file => require('babel-core').transform(
        file.content,
        {sourceMap: true, compact: false, presets: ['react-native']})
    },

    testFramework: 'jest',
    debug: true
  };
};