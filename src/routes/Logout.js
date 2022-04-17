import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../store/actions/auth";

export default function Logout() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signOut());
  };
  React.useEffect(() => {
    handleLogout();
  }, []);
  return <div />;
}
