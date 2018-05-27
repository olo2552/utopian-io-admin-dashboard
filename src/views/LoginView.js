import React from "react";

import SteemConnectButton from "../components/LoginWithSC2";

class LoginView extends React.Component {
  render() {
    return (
      <div>
        Welcome to Utopian internal helper tool!
        <SteemConnectButton />
      </div>
    );
  }
}

export default LoginView;
