import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/authPlace.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import LogBtn from "../ui/LogBtn";
import TextField from "../common/form/TextField";
import { validator } from "../../utils/ validator";
import { getAuthErrors, login } from "../../store/users";
import { useDispatch, useSelector } from "react-redux";
import history from "../../utils/history";

const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginError = useSelector(getAuthErrors());
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfog = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателкн для заполнения",
      },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfog);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const redirect = history.location.state
      ? history.location.state.from.pathname
      : "/";

    dispatch(login({ payload: data, redirect }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="authCard">
          <h2>Login</h2>

          <TextField
            label="Ваш email..."
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />

          <TextField
            label="Ваш пароль..."
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            error={errors.password}
          />
          <LogBtn
            style={{ backgroundColor: "#397610" }}
            linkFn={null}
            text="Войти"
          />
          <p style={{ textAlign: "right" }}>
            или <Link to="/signup">зарегистрируйтесь</Link>
          </p>
          {loginError && <p className="red-text">{loginError}</p>}
        </div>
      </form>
    </>
  );
};

export default Login;
