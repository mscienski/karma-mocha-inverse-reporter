const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config');
const extend = require('lodash/extend');

const karmaConfig = {
  browsers: ['HeadlessChrome'],
  customLaunchers: {
    HeadlessChrome: {
      base: 'Chrome',
      flags: [
        '--no-sandbox',
        // Seet https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
        '--headless',
        '--disable-gpu',
        // Without a remote debugging port, Google Chrome exits immediately
        '--remote-debugging-addres=0.0.0.0',
        '--remote-debugging-port=9222'
      ]
    }
  },
  singleRun: true,
  frameworks: ['mocha', 'sinon'],
  files: [
    path.resolve(__dirname, './test/test.js')
  ],
  reporters: ['karma-mocha-inverse'],
  plugins: [
    require('karma-webpack'),
    require('karma-mocha'),
    require('karma-mocha-launcher'),
    require('karma-sourcemap-loader'),
    require('karma-sinon'),
    require('./dist/karma-mocha-inverse-reporter')
  ],
  mochaInverseReporter: {
    showDiff: true
  },
  client: {
    captureConsole: true,
    mocha: {
      fullTrace: true
    }
  }
}

module.exports = function(config) {
  config.set(karmaConfig);
}
