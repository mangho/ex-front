module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'?'/testv/':'/',
    devServer: {
        port:8090,
        open:true
    }
}