import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserService from "./userservice";
import config from '../config';

export default function Login(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const loginHandle = () => {
      console.log('email:', email, 'password:', password);
      let data = {
          email: email,
          password: password
      }
      UserService.login(dispatch, config.login, data, navigate);
  }

  return (
    <div>
      <div className="flex flex-column align-items-center">
        <h3>Login</h3>
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <button onClick={loginHandle} className="mt-3">
          Login
        </button>
      </div>
      <p>"eve.holt@reqres.in"</p>
    </div>
  );
}
