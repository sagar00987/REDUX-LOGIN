import axios from "axios";

const userLoginRequest = {
  loginUser(dispatch) {
    axios
      .post("https://reqres.in/api/login", {
        email: formInputs.email,
        password: formInputs.password,
      })
      .then((userdata) =>
        dispatch({
          type: "USER_LOGIN",
          payload: userdata,
        })
      )
      .catch((error) => {
        dispatch({
            type: "ERROR_LOGIN",
            payload: null,
          });
        console.log(error);
      });
  },
};

export default userLoginRequest;
