const routes = [
  {
    path: '/',
    component: '@/layout/index',
    routes: [{
      path: '/',
      redirect: '/home',
    },
    {
      path: 'home',
      component: '@/pages/home',
    },
    {
      path: 'jingzige',
      component: '@/pages/components/jingzige',
    },
    {
      path: 'fruitGame',
      component: '@/pages/components/vegeAndFruits'
    },
    {
      path: 'react-demo',
      component: '@/pages/components/reactDemo/sharingState'
    },
    {
      path: 'upgrade-antd',
      component: '@/pages/components/upgradeAntd'
    }
    ]
  },
]
export default routes