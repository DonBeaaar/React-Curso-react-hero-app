import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLoginClick = () => {
    // history.push('/')
    history.replace("/");
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
