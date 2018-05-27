import React from "react";

import { withRouter } from "react-router-dom";
import SC2SDK from "../utils/sc2sdk";
import qs from "query-string";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchSC2UserData } from "../actionCreators";

class RedirectCallback extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  componentDidMount = () => {
    const parsed = qs.parse(this.props.location.search);
    SC2SDK.setAccessToken(parsed.access_token);
    this.props.fetchSC2UserData(parsed.access_token);
    // TODO: redirection to dashboard
  };

  render() {
    return null;
  }
}

export default connect(null, { fetchSC2UserData })(
  withRouter(RedirectCallback)
);
