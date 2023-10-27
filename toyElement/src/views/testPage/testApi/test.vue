<template>
    <div>
        <h1>{{ message }}</h1>
        <button @click="increment">点击次数：{{ count }}</button>
    </div>
</template>
  
<script>
export default {
    // 用于声明组件初始响应式状态的函数
    data () {
        return {
            a: 1
        };
    },
    // 用于声明要混入到组件实例中的方法
    methods: {
        plus () {
            this.a++
        }
    },
    // 用于声明要在组件实例上暴露的计算属性
    computed: {
        aDouble () {
            return this.a * 2
        }
    },
    // 用于声明在数据更改时调用的侦听回调
    watch: {
        a (val, oldVal) {
            console.log(`new: ${val}, old: ${oldVal}`)
        }
    }
}
</script>