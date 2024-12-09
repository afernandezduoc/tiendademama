module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-firefox-launcher'),
        require('karma-coverage'),
        require('karma-jasmine-html-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        jasmine: {},
        clearContext: false 
      },
      jasmineHtmlReporter: {
        suppressAll: true 
      },
      coverageReporter: {
        dir: require('path').join(__dirname, './coverage/tiendademama'),
        subdir: '.',
        reporters: [
          { type: 'html' },
          { type: 'text-summary' },
          { type: 'lcov' } 
        ]
      },      
      files: [
        { pattern: 'src/test.ts', watched: true }, 
      ],
      preprocessors: {
        'src/test.ts': ['@angular-devkit/build-angular']
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome', 'Firefox'],
      singleRun: false,
      restartOnFileChange: true
    });
  };
  