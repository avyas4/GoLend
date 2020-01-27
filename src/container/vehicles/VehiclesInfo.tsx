import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import HeaderComponent from "../../component/header/Header";
import VehiclesComponent from "../../component/vehicles/VehiclesComponent";

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
    const { year } = this.props.match.params;
    return (
      <div className="container">
        <HeaderComponent />
        <VehiclesComponent year={year} />
      </div>
    );
  }
}

export default withRouter(VehiclesInfo as any);
