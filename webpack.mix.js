let fs = require('fs');
let mix = require('laravel-mix');
mix.config.fileLoaderDirs.fonts = 'app/fonts';

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('./')
    .js('resources/app.js', 'app/js')
    .sass('resources/app.scss', 'app/css')
    .options({
        processCssUrls: false
    })
    .then(stats => {
        fs.readFile('app/css/app.css', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            let result = data.replace(/(\.(?:woff2?|ttf|eot))\?.+?("?\))/g, '$1$2');

            fs.writeFile('app/css/app.css', result, 'utf8', function (err) {
                if (err) return console.log(err);
            });
        });
    });