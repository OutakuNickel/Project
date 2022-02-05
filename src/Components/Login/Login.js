import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Rectangle from "../../Pictures/Rectangle 190.png";
import styled from "styled-components";
import NavBar from "../NavBar/navBar";

const Inputs = styled.input`
  border: #333740 1.5px solid;
  border-radius: 30px;
  width: 20vw;
  height: 7vh;
  display: flex;
  align: column;

  text-align: center;
}

::-webkit-input-placeholder {
  text-align: center;
}

:-moz-placeholder {
  text-align: center;
}
`;
const Square = styled.img`
  position: absolute;
  width: 34vw;
  height: 90vh;
  margin-top: 0px;
  left: 700px;
`;

const Position = styled.div`
  width: 55vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ButtonPress = styled.button`
  border: #333740 1.5px solid;
  border-radius: 30px;
  background-color: #333740;
  width: 20vw;
  height: 7vh;
  display: flex;
  align: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  return (
    <div className="login">
      <NavBar />
      <Square src={Rectangle} />
      <Position className="login__container">
        <div
          style={{
            color: "#333740",
            fontFamily: "Andale Mono, monospace	",
            fontSize: "27px",
            position: "absolute",
            left:"224px",
            top:"130px",
          }}>
          LOG IN
        </div>
        <Inputs
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          // style = {{marginTop:"19px"}}
        />
        <Inputs
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{ marginTop: "19px" }}
        />
        <ButtonPress
          className="login__btn"
          onClick={() => signInWithEmailAndPassword(email, password)}
          style={{
            fontFamily: "Andale Mono, monospace",
            fontSize: "15px",
            marginTop: "19px",
          }}
        >
          Sign in
        </ButtonPress>
        {/* <div className="link">
          <Link to="/reset">Forgot Password</Link>
        </div> */}
        <div
          className="link"
          style={{ marginTop: "19px", color: "#333740", fontSize: "14px" }}
        >
          Already have an account?
          <Link id="register" to="/register" style={{ color: "#333740" }}>
            SIGN UP
          </Link>
        </div>
        <div
          style={{ marginTop: "19px", color: "light gray", fontSize: "14px" }}
        >
          ____________ or ____________
        </div>
        <ButtonPress
          className="login__btn login__google"
          onClick={signInWithGoogle}
          style={{
            fontFamily: "Andale Mono, monospace",
            fontSize: "15px",
            marginTop: "19px",
          }}
        >
          Sign in with Google
        </ButtonPress>
      </Position>
    </div>
  );
}

export default Login;
