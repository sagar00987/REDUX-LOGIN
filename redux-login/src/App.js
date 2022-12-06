
import React, { /*useEffect ,*/  useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import userLoginRequest from "./loginAction";

function App() {
  const [formInputs, setFormInputs] = useState({});

  const SubmitHandler =() => {
    console.log(formInputs.email);
    console.log(formInputs.password);
    userLoginRequest.loginUser(dispatch);
  }

  const ChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInputs((values) => ({ ...values, [name]: value }));
  };

  const dispatch = useDispatch();

  /* useEffect(() => {
    userLoginRequest.loginUser(dispatch);
  }, [dispatch]); */

  const LoginInfo = useSelector((state) => state.data.token);
  console.log(LoginInfo);


  {LoginInfo !== '' && localStorage.setItem('token',LoginInfo)}

  return (
    <div className="App">
      <form onSubmit={SubmitHandler}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formInputs.email || ""}
            onChange={ChangeHandler}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formInputs.password || ''}
            onChange={ChangeHandler}
          />
        </label>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
