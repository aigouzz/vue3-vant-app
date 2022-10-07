// const { configFunction } = require('@vue/cli-service')

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    chainWebpack: config => {
        console.log(process.env.NODE_ENV)
    }
};