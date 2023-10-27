

<template>
  <!-- <Home></Home> -->
  <RouterView />
</template>
<script setup>
// 将显示与url对应的组件
import { RouterView } from "vue-router";
import Home from "./views/home/index.vue"
</script>

<style>
body {
  font-family: ”Microsoft YaHei”, Arial, Helvetica, sans-serif, ”宋体”;
  color: rgb(48, 49, 51)
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
