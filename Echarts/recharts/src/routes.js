import React, { lazy } from 'react';
const Home = lazy(() => import('./pages/Home/Home'))
// const CarouseAll = lazy(() => import('./pages/CarouseAll/CarouseAll'))
// webpack只要打包，就会对引入的依赖关系进行检测
const Echarts2 = lazy(() => import('./pages/Echarts2/Echarts'))
const Echarts1 = lazy(() => import('./pages/Echarts1/Echarts1'))
const Echarts3 = lazy(() => import('./pages/Echarts3/Echarts3'))
const TTest = lazy(() => import('./pages/TTest/index'))

const NotFound = ({ location }) => {
  console.log('location', location)
  return (
    <div>
      <h3>找不到ha</h3>
    </div>
  )
}


const routes = [
  {
    path: '/',
    Component: Home,
    exact: true
  },
  // {
  //   path: '/CarouseAll/:id?',
  //   Component: CarouseAll,
  //   exact: true
  // },
  {
    path: '/Echarts1',
    Component: Echarts1,
    exact: true
  },
  {
    path: '/echarts2',
    Component: Echarts2,
    exact: true
  },
  {
    path: '/echarts3',
    Component: Echarts3,
    exact: true
  },
  {
    path: '/TTest',
    Component: TTest,
    exact: true
  },
  {
    path: '*',
    Component: NotFound
  }]

export default routes;