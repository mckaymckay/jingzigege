<template>
    <div>
        <h2>HomePage</h2>
        <router-link to="/toy">toy 系列</router-link>
        <router-link to="/test">测试系列</router-link>
    </div>
</template>
<!-- <template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="toy_header">
                    <span>Toy Element</span>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-scrollbar>
                        <el-menu :default-openeds="['1', '3']">
                            <el-sub-menu index="1">
                                <template #title>
                                    <el-icon>
                                        <Sunny />
                                    </el-icon> toy 系列
                                </template>
                                <el-menu-item-group>
                                    <template #title>Group 1</template>
                                    <el-menu-item index="1-1">Option 1</el-menu-item>
                                    <el-menu-item index="1-2">Option 2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group 2">
                                    <el-menu-item index="1-3">Option 3</el-menu-item>
                                </el-menu-item-group>
                                <el-sub-menu index="1-4">
                                    <template #title>Option4</template>
                                    <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>
                            <el-sub-menu index="2">
                                <template #title>
                                    <el-icon>
                                        <DishDot />
                                    </el-icon>
                                    测试系列
                                </template>
                                <el-menu-item-group>
                                    <template #title>Group 1</template>
                                    <el-menu-item index="2-1">Option 1</el-menu-item>
                                    <el-menu-item index="2-2">Option 2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group 2">
                                    <el-menu-item index="2-3">Option 3</el-menu-item>
                                </el-menu-item-group>
                                <el-sub-menu index="2-4">
                                    <template #title>Option 4</template>
                                    <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>
                        </el-menu>
                    </el-scrollbar>
                </el-aside>
                <el-main>
                    <el-scrollbar>
                        <el-table :data="tableData">
                            <el-table-column prop="date" label="Date" width="140" />
                            <el-table-column prop="name" label="Name" width="120" />
                            <el-table-column prop="address" label="Address" />
                        </el-table>
                    </el-scrollbar>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template> -->
  
  
<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting, Sunny, DishDot } from '@element-plus/icons-vue'

const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>
  
<style scoped>
.toy_header {
    font-size: 24px;
    color: white;
    line-height: 60px;
}

.el-header {
    position: relative;
    background-color: rgb(64, 158, 255);
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>
  

<!-- <script lang="ts" setup>
import { ref } from 'vue';



</script>

<style lang='less' scoped>
a {
    margin: 10px;
}
</style> -->
