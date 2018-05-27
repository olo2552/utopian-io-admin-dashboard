import React from "react";

import steemLogo from "../assets/steemLogo.svg";

// TODO: Redux integration
class UserThumbnail extends React.Component {
  render() {
    return (
      <div className="ml-auto">
        <img className="" src={steemLogo} height="50px" alt="user thumbnail" />
        Steem
      </div>
    );
  }
}

export default UserThumbnail;
