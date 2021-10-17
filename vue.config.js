module.exports={
    configureWebpack:{
        resolve:{
            extensions:[],
            alias:{
              '@':'src',
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/component',
                'network':'@/network',
                'views':'@/views',

            }
        }
    }
}
