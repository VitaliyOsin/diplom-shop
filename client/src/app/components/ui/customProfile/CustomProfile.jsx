import React from "react";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getUsersLoadingStatus } from "../../../store/users";
import Loader from "../Loader";
import Logged from "./Logged";
import Unlogged from "./Unlogged";

const CustomProfile = () => {
  const isLogged = useSelector(getIsLoggedIn());
  const isLoading = useSelector(getUsersLoadingStatus());
  console.log(isLogged);
  return <>{!isLoading ? isLogged ? <Logged /> : <Unlogged /> : <Loader />}</>;
};

export default CustomProfile;
