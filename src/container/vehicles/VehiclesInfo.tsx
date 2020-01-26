import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import HeaderComponent from "../../component/header/Header";

/**
 *  Props from Route
 */
interface DashboardPropsFromRoute {
  readonly year: string | undefined;
}

type PropsFromRoute = RouteComponentProps<DashboardPropsFromRoute>;

type OwnProps = PropsFromRoute;

/**
 *  Render Vehicles Info component
 */
export class VehiclesInfo extends React.Component<OwnProps, {}> {
  public render() {
    return (
      <div className="container">
        <HeaderComponent />
      </div>
    );
  }
}

export default withRouter(VehiclesInfo as any);
