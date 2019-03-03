const path = require('path');
var prod = process.env.NODE_ENV === 'production';

function resolve(_path) {
    return path.join(__dirname, './', _path);
}

module.exports = {
    wpyExt: '.wpy',
    eslint: false,
    cliLogs: !prod,
    build: {
        web: {
            htmlTemplate: path.join('src', 'index.template.html'),
            htmlOutput: path.join('web', 'index.html'),
            jsOutput: path.join('web', 'index.js')
        }
    },
    resolve: {
        alias: {
            '@': resolve('src')
        },
        aliasFields: ['wepy', 'weapp'],
        modules: ['node_modules']
    },
    compilers: {
        less: {
            compress: prod
        },
        sass: {
            data: `
                @import "${resolve('src/styles/variables.scss')}";
                @import "${resolve('src/styles/mixins.scss')}";
                @import "${resolve('src/styles/functions.scss')}";
            `,
            outputStyle: prod ? 'compressed' : ''
        },
        babel: {
            sourceMap: true,
            presets: [
                'env'
            ],
            plugins: [
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-object-rest-spread',
                'transform-export-extensions',
                [
                    'global-define',
                    {
                        '__NODE_ENV__': process.env.NODE_ENV
                    }
                ]
            ]
        }
    },
    plugins: {},
    appConfig: {
        noPromiseAPI: ['createSelectorQuery']
    }
}

if (prod) {

    // 压缩sass
    // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

    // 压缩js
    module.exports.plugins = {
        uglifyjs: {
            filter: /\.js$/,
            config: {}
        },
        imagemin: {
            filter: /\.(jpg|png|jpeg)$/,
            config: {
                jpg: {
                    quality: 80
                },
                png: {
                    quality: 80
                }
            }
        }
    }
}
