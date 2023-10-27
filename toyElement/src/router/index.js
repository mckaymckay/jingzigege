import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home/index.vue'
import ToyDialog from '../views/toys/toy-dialog/index.vue'
import CompositionApi from '../views/testPage/testApi/CompositionApi.vue'
import OptionsApi from '../views/testPage/testApi/OptionsApi.vue'

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "/",
            redirect: '/home',
            children: []
        },
        {
            // HomePage
            path: "/home",
            name: "homepage",
            component: Home
        },
        {
            // toy系列
            path: "/toy",
            name: "toy",
            children: [
                {
                    path: "/toy/dialog",
                    name: "toy_dialog",
                    component: ToyDialog
                }
            ]
        }, {
            // 测试系列
            path: "/test",
            name: "test",
            children: [
                {
                    path: "/test/compositionApi",
                    name: "test_compositionApi",
                    component: CompositionApi
                },
                {
                    path: "/test/optionsApi",
                    name: "test_optionsApi",
                    component: OptionsApi
                }
            ]
        }

    ]
})
export default router