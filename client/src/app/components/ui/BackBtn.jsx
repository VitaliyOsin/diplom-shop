import React from "react";
import { useHistory } from "react-router-dom";
import LinkBtn from "./LinkBtn";

const BackBtn = () => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  return <LinkBtn linkFn={handleBack} text="Назад" />;
};

export default BackBtn;
