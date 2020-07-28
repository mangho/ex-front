
module.exports = {
    "publicPath": process.env.NODE_ENV === 'production' ? '/localtest/' : '/',
    "devServer": {
        "port": 8090,
        "open": true
    },
    "transpileDependencies": [
        "vuetify"
    ]
}