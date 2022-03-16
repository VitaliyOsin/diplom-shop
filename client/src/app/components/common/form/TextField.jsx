import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../../assets/css/authPlace.css";

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const getInputClasses = () => {
    return "auth-input" + (error ? " failed" : "");
  };
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <>
      <input
        type={showPassword ? "text" : type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className={getInputClasses()}
        placeholder={label}
      />
      {type === "password" && (
        <button
          className="show-password"
          type="button"
          onClick={toggleShowPassword}
        >
          <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
        </button>
      )}
      {error && <div className="red-text ">{error}</div>}
    </>
  );
};
TextField.defaultProps = {
  type: "text",
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextField;
