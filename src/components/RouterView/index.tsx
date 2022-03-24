import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import routes from '@/routes'
import Loading from '@/components/Loading'

const RouterView = () => {
  return (
    <HashRouter>
      <Switch>
        {routes.map(({ path, component: ComponentsName, exact = true, routes = [] }, key) => {
          return (
            <Route
              exact={routes.length === 0 && exact}
              key={key}
              path={path}
              render={(props: any) => {
                return (
                  ComponentsName && (
                    <ComponentsName {...props} routes={routes} fallback={<Loading />} />
                  )
                )
              }}
            />
          )
        })}
      </Switch>
    </HashRouter>
  )
}

export default RouterView
