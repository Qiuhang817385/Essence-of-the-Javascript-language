import React, { Suspense } from 'react';
import { Spin } from 'antd';
import SubRoute from './SubRoute'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LayOut from './LayOut'
import routes from './routes';

function RouteAll () {
  return (
    <Router>
      <LayOut>{/* 布局页 */}
        <Suspense fallback={<Spin />}>
          {/* 这样不会影响switch，不论是否匹配，都会执行 */}
          <Route children={() => { console.log(1) }} />
          <Switch>
            {
              routes && routes.map((route, index) => {
                return <SubRoute key={index} {...route} />
              })
            }
          </Switch>
        </Suspense>
      </LayOut>
    </Router>
  )
}

export default RouteAll;