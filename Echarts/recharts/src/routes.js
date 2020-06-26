import React, { lazy } from 'react';
const Home = lazy(() => import('./pages/Home/Home'))
const CarouseAll = lazy(() => import('./pages/CarouseAll/CarouseAll'))
const Echarts2 = lazy(() => import('./pages/Echarts2/Echarts'))

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
  {
    path: '/CarouseAll/:id?',
    Component: CarouseAll,
    exact: true
  },
  {
    path: '/echarts2',
    Component: Echarts2,
    exact: true
  },
  {
    path: '*',
    Component: NotFound
  }]

export default routes;