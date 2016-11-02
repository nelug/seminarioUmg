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
concat = require('gulp-concat'),
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
    return gulp.src('./app/view/**/*.html')
    .pipe(minhtml())
    .pipe(cache({
        prefix: 'view/',
        moduleName: 'templates',
        standalone: true,
        filePath: 'templates.js'
    }))
    .pipe(gulp.dest('./app/js'));
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
            source: "/api/v1/",
            target: "http://127.0.0.1:4000/api/v1/"
        }],
        open: true
    }));
});

gulp.task('produccion', function () {
    return gulp.src("dist/")
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
            source: "/api/v1/",
            target: "http://127.0.0.1:4000/api/v1/"
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


//Tarea para limpiar directorio dist
gulp.task('limpiar', function() {
    return del(['./dist/**/*.*']);
});
//Tarea para comprimmir los archivos js y css, para luego copiarlos a la carpeta dist
gulp.task('comprimir', ['copiar'], function() {
     gulp.src('./app/index.html')
    .pipe(useref.assets())
    .pipe(gulpif('*.js', concat('js/app.min.js')).on('error', gutil.log))
    .pipe(gulpif('*.css', minify()))
    .pipe(gulp.dest('./dist'));

    return gulp.src('dist/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js/app.min.js'));
});

gulp.task('minificar', function() {
    return gulp.src('dist/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js/app.min.js'));
});

//Tarea para copiar index.html a la carpeta dist
gulp.task('copiar', ['limpiar'], function() {
    gulp.src('./app/img/*.svg')
    .pipe(svgo()())
    .pipe(gulp.dest('dist/img'));
    gulp.src('./app/img/*.png')
    .pipe(png({
        optimizationLevel: 3
    })())
    .pipe(gulp.dest('dist/img'));
    gulp.src('./app/img/*.jpg')
    .pipe(jpeg({
        progressive: true
    })())
    .pipe(gulp.dest('dist/img'));
    gulp.src('./app/lib/angular-ui-grid/*.{ttf,woff,eof,svg}')
    .pipe(gulp.dest('./dist/css'));
    return gulp.src('./app/index.html')
    .pipe(useref())
    .pipe(minhtml())
    .pipe(gulp.dest('./dist'));
});
