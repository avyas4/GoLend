import * as React from "react";
import "./Header-style.scss";
import imagelogo from "../../assets/images/golend-logo.svg";
import phone from "../../assets/images/phone.svg";
import { Link } from "react-router-dom";
import { routes } from "../../Routes";
import { LABELS } from "../../constants/AppConstants";

/**
 *  Render Header component
 */
export class HeaderComponent extends React.Component<{}> {
  public render() {
    return (
      <header className="headerComponent">
        <ul className="headerComponent__container">
          <li>
            <Link to={routes.dashboard.viewGeneric()}>
              <img src={imagelogo} width="150" height="100" alt="logo"></img>
            </Link>
          </li>
          <li className="headerComponent__right-container">
            <a href="/#">
              <img src={phone} alt="phone"></img>
              <span className="headerComponent__right-text">
                {LABELS.PHONE}
              </span>
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default HeaderComponent;
