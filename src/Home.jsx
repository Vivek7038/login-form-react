import React from "react";
import "./SignInSignUp.css";
function Home() {
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <h1 className="brand-title">Home Page </h1>
      <p className="welcome">Wellcome {localStorage.getItem("name")}</p>
      <button onClick={logout} id="l-out" className="logout">
        LogOut
      </button>
      <button onClick={deleteAccount} id="delete"className="delete">
        Delete
      </button>
    </div>
  );
}
export default Home;
