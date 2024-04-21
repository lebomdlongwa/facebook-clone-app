import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logos">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt=""
          className="facebook__logo"
        />
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg"
          alt=""
          className="facebook__word"
        />
      </div>
      <div className="sign__in">
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
