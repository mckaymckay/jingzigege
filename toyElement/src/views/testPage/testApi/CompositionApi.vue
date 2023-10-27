<template>
    <div>
        <h1>{{ message }}</h1>
        <h1>{{ aDouble }}</h1>
        <button @click="increment">点击次数：{{ count }}</button>
        <input v-model="userInput" @input="handleInput" />
        <p>计算结果：{{ result }}</p>

        <select v-model="user">
            <option>A</option>
            <option>B</option>
        </select>
        <button @click="handleClick">Follow</button>

    </div>
</template>
  
<script lang="ts" setup>
import { ref, computed, watch } from 'vue';

const user = ref('A')
const showMessage = () => alert(`Followed ${user.value}`)
const handleClick = () => setTimeout(showMessage, 3000)


const message = ref('Hello, Composition API!');
const count = ref(0);

function increment() {
    count.value++;
}
const aDouble = computed(() => {
    return count.value * 2
})

// 逻辑关注点 1: 用户输入处理
const userInput = ref('');
const handleInput = (e) => {
    // 处理用户输入
    console.log('input value', e?.target?.value)
}

// 逻辑关注点 2: 结果计算
const result = computed(() => {
    // 计算结果
    return userInput.value.length;
});

// 逻辑关注点 3: 页面显示
// 在模板中已经处理
watch(count, (nval, oval) => {
    console.log(nval, oval)
})
</script>