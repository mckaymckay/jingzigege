<template>
    <div>
        <h1>{{ message }}</h1>
        <h1>{{ aDouble }}</h1>
        <button @click="increment">点击次数：{{ count }}</button>
    </div>
</template>
  
<script>
export default {
    name: 'options_Api',
    data () {
        return {
            message: 'Hello, Options API!',
            count: 0,
        };
    },
    methods: {
        increment () {
            this.count++;
        }
    },
    computed: {
        aDouble () {
            return this.count * 2
        }
    },
    watch: {
        count (val, oldVal) {
            console.log(`new: ${val}, old: ${oldVal}`)
        }
    }
}
</script>