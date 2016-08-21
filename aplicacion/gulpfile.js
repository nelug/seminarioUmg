'use strict';

var gulp = require('gulp'),
   jshint = require('gulp-jshint'),
   inject = require('gulp-inject'),
   wiredep = require('wiredep').stream,
   gulpif = require('gulp-if'),
   minify = require('gulp-minify-css'),
   minhtml = require('gulp-minify-html'),
   useref = require('gulp-useref'),
   uglify = require('gulp-uglify'),
   uncss = require('gulp-uncss'),
   del = require('del'),
   cache = require('gulp-ng-template'),
   imgmin = require('gulp-imagemin'),
   svgo = require('imagemin-svgo'),
   png = require('imagemin-optipng'),
   jpeg = require('imagemin-jpegtran'),
   gutil = require('gulp-util'),
   webServer = require('gulp-webserver'),
   plumber = require('gulp-plumber'),
   jshintfileoutput = require('gulp-jshint-html-reporter');

//Tarea para buscar estilos y javascript en los archivos del proyecto para inyectarlos en pagina principal
gulp.task('inyeccion', function() {
   var sources = gulp.src(['./app/js/**/*.js', './app/css/**/*.css', '!./app/css/creador*.css']);
   return gulp.src('index.html', {
         cwd: './app'
      })
      .pipe(inject(sources, {
         read: false,
         ignorePath: '/app'
      }))
      .pipe(gulp.dest('./app'));
});

//Tarea para inyectar las librerias de terceros instaladas mediante bower
gulp.task('dependencia', function() {
   return gulp.src('./app/index.html')
      .pipe(wiredep({
         directory: 'app/lib'
      }))
      .pipe(gulp.dest('./app'));
});

//Tarea para busqueda de errores y mostrarlos en pantalla
gulp.task('analizar', function() {
   return gulp.src(['./app/js/**/*.js'])
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('gulp-jshint-html-reporter', {
         filename: 'analisis/resultado-analisis.html',
         createMissingFolders : true
      }));
});

//Task para convertir las plantillas en templates
gulp.task('template', function() {
   return gulp.src('./app/html/**/*.html')
      .pipe(minhtml())
      .pipe(cache({
         prefix: 'html/',
         moduleName: 'templates',
         standalone: true,
         filePath: 'templates.js'
      }))
      .pipe(gulp.dest('./app/js'));
});

//Tarea para comprimmir los archivos js y css, para luego copiarlos a la carpeta dist
gulp.task('comprimir', ['copiar'], function() {
   return gulp.src('./app/index.html')
      .pipe(useref.assets())
      .pipe(gulpif('*.js', uglify({
         mangle: true
      })).on('error', gutil.log))
      .pipe(gulpif('*.css', minify()))
      .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['inyeccion', 'dependencia', 'analizar']);

gulp.task('server', function () {
    return gulp.src("app/")
        .pipe(plumber())
        .pipe(webServer({
            host: "127.0.0.1",
            port: "3590",
            livereload: {
                enable: true,
                filter: filtrar
            },
            fallback: 'index.html',
            proxies: [{
                source: "/api/v0.1/",
                target: "http://127.0.0.1:3000/"
            }],
            open: true
        }));
});


var filtrar = function (archivo) {
    if (!archivo.match(/index.html$/) && archivo.match(/.html$/)) {
        return false;
    }

    return true;
};
