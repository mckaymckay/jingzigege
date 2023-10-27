export const qiankunConfig = [
    {
        // 子应用名字
        name: 'toy-react',
        // 子应用容器id 需要在父应用中创建相关元素
        container: '#qk-toy-react',
        // 子应用进入地址
        entry: '//localhost:3011',
        // 激活子应用的路由
        activeRule: '/qk-toy-react',
    },
    {
        name: 'toy-vue',
        container: '#qk-toy-vue',
        entry: '//localhost:3012/',
        activeRule: '/qk-toy-vue',
    },

]