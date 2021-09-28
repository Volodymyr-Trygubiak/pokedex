import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes } from '../routes';


const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map(({ path, exact, component }) =>
        <Route
          path={path}
          exact={exact}
          component={component}
          key={path}
        />
      )}

      <Redirect to='/error' />
    </Switch>
  )
}

export default AppRouter

