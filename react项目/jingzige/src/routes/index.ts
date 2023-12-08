const routes = [
  // 这样useLayoutEffect就不会带有layout/index里的组件
  {
    path: 'useLayoutEffect',
    component: '@/pages/components/useLayoutEffect'
  },
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
    },
    {
      path: 'react-preview-img',
      component: '@/pages/components/reactViewImg'
    },
    {
      path: 'antdAutoComplete',
      component: '@/pages/components/antdAutoComplete'
    },
    {
      path: 'form-OnChange',
      component: '@/pages/components/formOnChange'
    },
    {
      path: 'cloneElementDemo',
      component: '@/pages/components/cloneElementDemo'
    },
    {
      path: 'contextAndReducerOriginal',
      component: '@/pages/components/contextAndReducerOriginal'
    },
    {
      path: 'contextAndReducer',
      component: '@/pages/components/contextAndReducer'
    },
    {
      path: 'reducerTest',
      component: '@/pages/components/reducerExercise'
    }, {
      path: 'context',
      component: '@/pages/components/context'
    }, {
      path: 'contextExercise',
      component: '@/pages/components/contextExercise'
    },
    {
      path: 'useLayoutEffect',
      component: '@/pages/components/useLayoutEffect'
    },
    {
      path: 'testFetch',
      component: '@/pages/components/fetchTest'
    }
    ]
  },
]
export default routes