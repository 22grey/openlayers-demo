import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 项目整体框架
import Layout from "@/views/dasboard/index"
// 项目左侧菜单框架
import LeftLayout from "@/views/leftMenuDashboard/index"
const router = new Router({
    routes: [              //配置路由，这里是个数组
        {
            path: '/',
            redirect: '/login',
            hidden: true
        },
        {
            path: '/login',
            component: () => import("@/views/mianviews/login/index"),
            hidden: true
        },
        {
            path: '/dasboard',
            meta: {
                title: '首页',
                icon: 'nested'
            },
            component: Layout,
            // hidden: false
            children: [
                {
                    path: '/',
                    meta: { title: '首页', icon: 'link' },
                    component: () => import('@/views/mianviews/map/index'),
                    hidden: true
                },

            ]
        },

        {
            path: '/ol',
            meta: { title: '二维地图', icon: 'link' },
            component: Layout,
            left: true,
            children: [
                {
                    path: '/ol',
                    meta: { title: '地图控件', icon: 'link' },
                    component: LeftLayout,
                    children: [
                        {
                            path: '/ol',
                            meta: { title: '鼠标位置', icon: 'link' },
                            component: () => import('@/views/mianviews/ol/mapControl/mousePosition'),
                            children: []
                        },
                        {
                            path: '/ol/overviewMap',
                            meta: { title: '鹰眼图', icon: 'link' },
                            component: () => import('@/views/mianviews/ol/mapControl/overviewMap'),
                            children: []
                        },
                        {
                            path: '/ol/layers',
                            meta: { title: '图层控制', icon: 'link' },
                            component: () => import('@/views/mianviews/ol/mapControl/layers'),
                            children: []
                        }
                    ]
                },
                {
                    path: '/mapOperate',
                    meta: { title: '地图操作', icon: 'link' },
                    component: LeftLayout,
                    children: [{
                        path: '/mapOperate/operate',
                        meta: { title: '地图操作', icon: 'link' },
                        component: () => import('@/views/mianviews/ol/mapOperate/operate'),
                        children: []
                    }, {
                        path: '/mapOperate/zIndex',
                        meta: { title: '地图层级控制', icon: 'link' },
                        component: () => import('@/views/mianviews/ol/mapOperate/zIndex'),
                    }, {
                        path: '/mapOperate/mapclick',
                        meta: { title: '地图事件', icon: 'link' },
                        component: () => import('@/views/mianviews/ol/mapOperate/mapclick'),
                    }]
                },
            ]
        },
        {
            path: '/cesium/hellow',
            meta: { title: '三维地图', icon: 'link' },
            component: Layout,
            left: true,
            children: [
                {
                    path: '/cesium/hellow',
                    meta: { title: '地图控件', icon: 'link' },
                    component: LeftLayout,
                    children: [
                        {
                            path: '/cesium/hellow',
                            meta: { title: '鼠标位置', icon: 'link' },
                            component: () => import('@/views/mianviews/cesium/hello-cesium'),
                            children: []
                        },
                        {
                            path: '/cesium/entities',
                            meta: { title: '实体', icon: 'link' },
                            component: () => import('@/views/mianviews/cesium/entities'),
                            children: []
                        }
                    ]
                }
            ]
        }, {
            path: '/user',
            meta: { title: '用户管理', icon: 'link' },
            component: Layout,
            // hidden: false
            children: [
                {
                    path: '/user',
                    meta: { title: '人员信息', icon: 'link' },
                    component: () => import('@/views/mianviews/user/index'),
                },
                {
                    path: '/user/role',
                    meta: { title: '角色管理', icon: 'link' },
                    component: () => import('@/views/mianviews/user/roles'),
                },
                {
                    path: '/user/role',
                    meta: { title: '权限管理', icon: 'link' },
                    component: () => import('@/views/mianviews/user/roles'),
                },

            ]
        },
    ]
})

export default router
