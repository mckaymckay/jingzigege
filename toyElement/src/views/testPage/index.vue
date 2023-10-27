<template>
    <div>
        <h1>{{ message }}</h1>
        <button @click="increment">点击次数：{{ count }}</button>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, computed } from 'vue';


// setup () {
const message = ref('Hello Vue 3!');
const count = ref(0);

function increment() {
    count.value++;
}

        // return {
        //     message,
        //     count,
        //     increment,
        // };
    // },

</script>