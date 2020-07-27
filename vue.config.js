const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new VuetifyLoaderPlugin()
        ],
    },
    "publicPath": process.env.NODE_ENV === 'production' ? '/dev/' : '/',
    "devServer": {
        "port": 8090,
        "open": true
    },
    "transpileDependencies": [
        "vuetify"
    ]
}