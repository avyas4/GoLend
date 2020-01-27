import * as React from "react";
import "./Vehicles-style.scss";
import data from "../../__mocks__/vehicle.data.json";
import Properties from "../../component/properties/Properties";
import Avatar from "../../component/avatar/Avatar";
import { LABELS } from "../../constants/AppConstants";

interface StateProps {
  dataObject: any;
}

interface PropsFromParent {
  year: string | undefined;
}

type OwnProps = PropsFromParent;

/**
 *  Render Vehicles Component
 */
export class VehiclesComponent extends React.Component<OwnProps, StateProps> {
  public constructor(props: OwnProps) {
    super(props);
    this.state = {
      dataObject: data,
    };
  }

  public render() {
    const { dataObject } = this.state;
    const { year } = this.props;
    return (
      <div className="vehiclesComponent">
        <Avatar />
        <h1>{LABELS.VEHICLES_HEADER_TEXT}</h1>
        {Object.keys(dataObject).map((key: any, i: number) => (
          <div key={key} className="vehiclesComponent__properties">
            <Properties data={dataObject[key]} year={year} />
          </div>
        ))}
        <p className="vehiclesComponent__footer">
          *Excludes on road and government costs
        </p>
      </div>
    );
  }
}

export default VehiclesComponent;
