'use strict';

const NODE_ENV =  process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    entry: "./home", //говорит о том какой модуль собирать
    output: {
        filename: "build.js", //выводить в текущую дерикторию
        library: "home" //делаем переменную глобальной
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
       aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ]


};

