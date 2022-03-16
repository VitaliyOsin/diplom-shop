import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LogBtn from "../ui/LogBtn";
import { Link } from "react-router-dom";
import { signUp } from "../../store/users";
import { validator } from "../../utils/ validator";
import "../../../assets/css/authPlace.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TextField from "../common/form/TextField";
import history from "../../utils/history";

const Registration = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const validatorConfog = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен некорректно",
      },
    },
    name: {
      isRequired: {
        message: "Имя обязательно для заполнения",
      },
      min: {
        message: "Имя должено состаять миниму из 3 символов",
        value: 3,
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязательна для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одно число",
      },
      min: {
        message: "Пароль должен состаять миниму из 8 символов",
        value: 8,
      },
    },
  };
  const handleChange = (target) => {
    console.log(target);
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const regHandler = () => {};
  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errorSet = validator(data, validatorConfog);
    console.log(errorSet);
    setErrors(errorSet);
    return Object.keys(errorSet).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    const isValid = validate();
    console.log(isValid);
    if (!isValid) return;
    const newData = {
      ...data,
    };
    dispatch(signUp(newData));
    history.push("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="authCard">
          <h2>Регистрация</h2>

          <TextField
            label="Ваше имя..."
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            error={errors.name}
          />

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
            linkFn={regHandler}
            text="Зарегистрироваться"
          />
          <p style={{ textAlign: "right" }}>
            или <Link to="/login">войдите</Link>
          </p>
          <p>{errors.message}</p>
        </div>
      </form>
    </>
  );
};

export default Registration;
