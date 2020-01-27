import * as React from "react";
import "./Avatar-style.scss";
import user from "../../assets/images/userImg.jpg";

/**
 *  Render Avatar component
 */
export class Avatar extends React.Component<{}> {
  public render() {
    return (
      <div className="avatar">
        <div className="avatar__imgContainer">
          <img src={user} alt="Avatar" className="avatar__avatar"></img>
        </div>
      </div>
    );
  }
}

export default Avatar;
