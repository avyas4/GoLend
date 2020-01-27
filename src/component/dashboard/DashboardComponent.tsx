import * as React from "react";
import "./Dashboard-style.scss";
import data from "../../__mocks__/years.data.json";
import { LABELS } from "../../constants/AppConstants";
import { Link } from "react-router-dom";
import { routes } from "../../Routes";
import Avatar from "../../component/avatar/Avatar";

interface StateProps {
  dataObject: any;
}

/**
 *  Render Dashboard component to show list of years
 */
export class DashboardComponent extends React.Component<{}, StateProps> {
  public constructor(props: any) {
    super(props);
    this.state = {
      dataObject: data,
    };
  }

  public render() {
    const { dataObject } = this.state;
    return (
      <div className="dashboardComponent">
        <Avatar />
        <h1>{LABELS.DASHBOARD_HEADER_TEXT}</h1>
        <div className="dashboardComponent__row">
          {dataObject.map((p: any, i: number) => (
            <div className="dashboardComponent__column" key={i}>
              <Link to={routes.vehiclesInfo.view(p)}>
                <input type="button" value={p} name={p}></input>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DashboardComponent;
