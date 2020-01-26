import * as React from "react";
import { withRouter } from "react-router-dom";
import HeaderComponent from "../../component/header/Header";

/**
 *  Dashboard component
 */
export class Dashboard extends React.Component<{}> {
  public render() {
    return (
      <div className="container">
        <HeaderComponent />
      </div>
    );
  }
}

export default withRouter(Dashboard as any);
