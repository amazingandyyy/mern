import React from "react";
import { connect } from "react-redux";
import useForm from "../../use-form-react";

import { signUserIn } from "../../actions";
import CenterCard363 from "../centerCard363";
import InputText from "./inputText";

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
          <span className="title">Sign In</span>
        </h4>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <InputText
              name="email"
              text="Email "
              value={inputs.email}
              placeholder={"your@email.com"}
              onChange={onChange}
              required
              type="email"
            />
            <InputText
              name="password"
              text="Password "
              value={inputs.password}
              placeholder={"**********"}
              onChange={onChange}
              required
              type="password"
            />
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
