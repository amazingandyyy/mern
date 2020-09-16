import React from "react";
import { connect } from "react-redux";
import useForm from "../../use-form-react";

import { signUserIn } from "../../actions";
import CenterCard363 from "../centerCard363";

const Signin = (props) => {
  const options = {
    initialValues: {
      email: "",
      password: "",
    },
    callback: () => {
      console.log("works!", inputs);
      props.signUserIn(inputs);
    },
    debug: false,
  };
  const { onSubmit, onChange, inputs, dirty, submitting } = useForm(
    "AdvanceForm",
    options
  );
  return (
    <CenterCard363>
      <div className="card">
        <h4 className="card-header">
          <span className="title slimfont">Sign In</span>
        </h4>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Email :
                </span>
              </div>
              <input
                name="email"
                type="email"
                onChange={onChange}
                value={inputs.email}
                required
                className="form-control"
                placeholder="name@email.com"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Password
                </span>
              </div>
              <input
                type="password"
                name="password"
                onChange={onChange}
                value={inputs.password}
                required
                className="form-control"
                placeholder="**********"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </div>

            <div style={{ paddingTop: "30px" }}>
              <button
                type="submit"
                className="btn btn-lg btn-outline-primary btn-block"
                disabled={!dirty || submitting}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </CenterCard363>
  );
};

export default connect(null, { signUserIn })(Signin);
