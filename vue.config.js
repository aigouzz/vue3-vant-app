// const { configFunction } = require('@vue/cli-service')

module.exports = {
    base: 'shop',
    publicPath: './',
    outputDir: '../aigouzz.github.io/shop',
    chainWebpack: config => {
        console.log(process.env.NODE_ENV);
    },

};