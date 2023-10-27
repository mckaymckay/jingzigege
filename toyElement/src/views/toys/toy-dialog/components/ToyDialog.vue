<template>
    <div class="dialog-container" @click="closeDialogContainer">
        <div class="dialog">
            <header class="dialog-header">
                <span class="header-content">{{ state.header }}</span>
                <span class="close-icon" @click="cancelPop">X</span>
            </header>
            <div class="dialog-content">
                content
            </div>
            <footer class="dialog-footer">
                <el-button @click="cancelPop">取消</el-button>
                <el-button type="primary">确定</el-button>
            </footer>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, } from 'vue';

interface DialogPropsType {
    rewidth: string,
    header: string,
}

const props = withDefaults(defineProps<DialogPropsType>(), {
    rewidth: "50%",
    header: "tips"
})
const state = reactive({
    headerWidth: (props?.rewidth),
    header: (props?.header)
})
// 打开弹框
const openPop = () => {
    const container = document.querySelector(".dialog-container")
    container?.classList.remove("dialog-hide")
}

// 关闭弹框
const cancelPop = () => {
    const container = document.querySelector(".dialog-container")
    container?.classList.add("dialog-hide")
    console.log(38, container?.classList)
}
const closeDialogContainer = (event) => {
    console.log(222)
    event.stopPropagation();
    // cancelPop()
}
// 暴露给调用组件
defineExpose({
    openPop
})

</script>

<style lang='less' scoped>
.dialog-container {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(101, 108, 133, .8);

    .dialog {
        background: white;
        width: v-bind('state.headerWidth');
        margin: 200px auto;
        padding: 10px;
    }

    .dialog-header {
        position: relative;
        height: 50px;
        display: flex;
        align-items: center;

        .header-content {
            font-size: 20px;
        }

        .close-icon {
            padding: 0 10px;
            color: #a7a3a3;
            cursor: pointer;
            position: absolute;
            right: 0;
        }
    }

    .dialog-footer {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;

    }
}

.dialog-hide {
    display: none;
}
</style>
