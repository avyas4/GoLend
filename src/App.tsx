import React from "react";
import { Route, Switch } from "react-router-dom";

import { routes } from "./Routes";
import Dashboard from "./container/dashboard/Dashboard";
import VehiclesInfo from "./container/vehicles/VehiclesInfo";

class App extends React.Component<any> {
  public render(): JSX.Element {
    return (
      <Route
        path="*"
        render={({ location }) => (
          <React.Fragment>
            <Switch location={location}>
              {/* Years Dashboard */}
              <Route path="/" exact component={Dashboard} />
              <Route
                path={routes.dashboard.viewGeneric()}
                exact
                component={Dashboard}
              />
              {/* vehicles */}
              <Route path="/" exact component={Dashboard} />
              <Route
                path={routes.vehiclesInfo.view(":year")}
                exact
                component={VehiclesInfo}
              />
            </Switch>
          </React.Fragment>
        )}
      />
    );
  }
}

export default App;
