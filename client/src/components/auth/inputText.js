import React from "react";

function InputText(props) {
  const { name, text, onChange, value, placeholder, required, type } = props;
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          {text}
        </span>
      </div>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        required={required}
        className="form-control"
        placeholder={placeholder}
        aria-describedby="basic-addon1"
      />
    </div>
  );
}

export default InputText;
