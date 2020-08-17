import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

function Signout({ signUserOut }) {
  useEffect(() => {
    signUserOut();
  }, []);
  return (
    <div>
      <h1>Hope to see you soon!</h1>
    </div>
  );
}

export default connect(null, actions)(Signout);
