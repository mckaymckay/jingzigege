<template>
    <div>
        <el-button type="primary" @click="openDialog">点击打开Dialog</el-button>
        <ToyDialog ref="ToyDialogRef" :rewidth="`500px`" :header="header"></ToyDialog>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ToyDialog from './components/ToyDialog.vue'
const ToyDialogRef = ref()

const dialogVisible = ref(false)
const header = ref('header')
const openDialog = () => {
    ToyDialogRef.value?.openPop()
}



</script>

<style lang='less' scoped></style>
