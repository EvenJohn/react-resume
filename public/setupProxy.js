/**
 * 配置代理文件
 */
const proxy = require('http-proxy-middleware')

module.export = function(app){
    app.use(
        proxy('/api1',{
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite:{'^/api1':''}
        })
    )
}