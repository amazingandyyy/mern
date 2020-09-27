import React, { useState } from "react";
import { connect } from "react-redux";

import { signUserUp } from "../../actions";
import CenterCard363 from "../centerCard363";
import useForm from "../../use-form-react";
import InputText from "./inputText";

const Signup = (props) => {
  const [errMsg, setErrorMsg] = useState("");
  const options = {
    initialValues: {
      firstName: "a",
      lastName: "a",
      email: "aa@mail.com",
      password: "aa",
      password2: "a",
    },
    callback: () => {
      if (inputs.password == inputs.password2) {
        console.log(inputs);
        props.signUserUp(inputs);
      } else {
        setErrorMsg("password does not matched");
      }
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
        <h4 className="card-header">Sign Up</h4>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <InputText
              name="firstName"
              text="First Name "
              value={inputs.firstName}
              placeholder={"your name"}
              onChange={onChange}
              required
              type="text"
            />

            <InputText
              name="lastName"
              text="Last Name "
              value={inputs.lastName}
              placeholder={"your last name"}
              onChange={onChange}
              required
              type="text"
            />
            <InputText
              name="email"
              text="Email "
              value={inputs.email}
              placeholder={"your name"}
              onChange={onChange}
              required
              type="email"
            />

            <InputText
              name="password"
              text="Password "
              value={inputs.password}
              placeholder={"your name"}
              onChange={onChange}
              required
              type="password"
            />

            <InputText
              name="confirmPassword"
              text="Confirm Password "
              value={inputs.password2}
              placeholder={"your name"}
              onChange={onChange}
              required
              type="password"
            />

            {errMsg && (
              <div className="alert alert-warning">
                <strong>Oops!</strong> {errMsg}
              </div>
            )}
            <div style={{ paddingTop: "30px" }}>
              <button
                type="submit"
                className="btn btn-lg btn-light btn-block"
                disabled={!dirty || submitting}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </CenterCard363>
  );
};

export default connect(null, { signUserUp })(Signup);
