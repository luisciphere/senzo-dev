// Uses the Gulp build system
var gulp = require('gulp')
// Transforms .styl files into .css
var styl = require('gulp-stylus')
// Transforms .pug files into .html
var pug = require('gulp-pug')
// Creates browser-sync server with the name of the directory
var bs = require('browser-sync').create(__dirname.split('/').pop())
// Bundles node.js requires for use in the browser
var browserify = require('browserify')
// Allows us to use browserify in Gulp
var source = require('vinyl-source-stream')

var src = {
  html: './src/**/*.html',
  pug: './src/**/*.pug',
  styl: './src/styl/**/*.styl',
  js: './src/js/**/!(main)*.js',
  mainjs: './src/js/main.js',
  assets: './src/assets/**/*',
  server: './src'
}

var app = {
  html: './app/**/*.html',
  htmlDir: './app/',
  cssDir: './app/css/',
  js: './app/js/**/!(main)*.js',
  mainjs: './src/js/main.js',
  jsDir: './app/js/',
  assetsDir: './app/assets/',
  server: './app'
}

var handleError = function (e) {
  console.error(e.stack)
  this.emit('end')
}

gulp.task('default', ['styl', 'pug', 'browserify', 'js', 'assets'], () => {
  bs.init({
    server: app.server,
    https: true
  })
  gulp.watch(src.styl, ['styl'])
  gulp.watch(src.pug, ['pug'])
  gulp.watch(src.mainjs, ['browserify', () => { bs.reload() }])
  gulp.watch(src.js, ['js', () => { bs.reload() }])
  gulp.watch(src.assets, ['assets'])
  bs.watch(app.html).on('change', bs.reload)
})

gulp.task('styl', () => {
  return gulp.src(src.styl)
    .pipe(styl({outputStyle: 'expanded'}))
    .on('error', handleError)
    .pipe(gulp.dest(app.cssDir))
    .pipe(bs.stream())
})

gulp.task('pug', () => {
  return gulp.src(src.pug)
    .pipe(pug({pretty: true}))
    .on('error', handleError)
    .pipe(gulp.dest(app.htmlDir))
})

gulp.task('browserify', () => {
  return browserify(src.mainjs)
    .bundle()
    .on('error', handleError)
    .pipe(source('main.js'))
    .pipe(gulp.dest(app.jsDir))
})

gulp.task('js', () => {
  return gulp.src(src.js)
    .pipe(gulp.dest(app.jsDir))
})

gulp.task('assets', () => {
  return gulp.src(src.assets)
    .pipe(gulp.dest(app.assetsDir))
})
