import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

export const LoginScreen = ({ history }) => {

  const {dispatch} = useContext(AuthContext);

  const handleLoginClick = () => {
    // history.push('/')
    
    dispatch({
      type: types.login,
      payload: {
        name: 'Donbear'
      }
    })

    history.push("/");
  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLoginClick}>
        Ingresar
      </button>
    </div>
  );
};
