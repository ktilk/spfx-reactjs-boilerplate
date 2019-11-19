'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

// const eslint = require('gulp-eslint');
// gulp.src(['**/*.js','!node_modules/**'])
//         // eslint() attaches the lint output to the "eslint" property
//         // of the file object so it can be used by other modules.
//         .pipe(eslint())
//         // eslint.format() outputs the lint results to the console.
//         // Alternatively use eslint.formatEach() (see Docs).
//         .pipe(eslint.format())
//         // To have the process exit with an error code (1) on
//         // lint error, return the stream and pipe to failAfterError last.
//         .pipe(eslint.failAfterError());

build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
      generatedConfiguration.module.rules.push(
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      });
      return generatedConfiguration;
    }});

build.initialize(gulp);
