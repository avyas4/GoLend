import * as React from "react";
import "./Properties-style.scss";
import carImage from "../../assets/images/car.jpg";

interface PropsFromParent {
  data: any | undefined;
  year: string | undefined;
}

type OwnProps = PropsFromParent;

/**
 *  Render Properties component to display vehicles properties
 */
export class Properties extends React.Component<OwnProps> {
  public render() {
    const { data, year } = this.props;
    return (
      <section className="Properties">
        <div className="Properties__row">
          <div className="Properties__columnImage">
            <img src={carImage} alt="car"></img>
          </div>
          <div className="Properties__column">
            <article>
              <h4>{`${year} ${data.model} ${data.series}`}</h4>
              <p>{data.variant}</p>
              <span className="Properties__price">
                NEW <span>{data.new_price}</span> RRP*
              </span>
              <span className="Properties__price Properties__priceFrom">
                FROM <span>{data.from}</span> PER MONTH*
              </span>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default Properties;
