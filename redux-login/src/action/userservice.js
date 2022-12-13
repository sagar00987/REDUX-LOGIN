import Communication from "./Communications";
import config from "../config";

const UserService = {
  login(dispatch, data, history) {
    dispatch({
      type: "LOAD_LOGIN",
      payload: null,
    });

    console.log("config", config);
    Communication.postMethod(data)
      .then((response) => {
        if (response) {
          console.log("Login_Responses", response);
          dispatch({
            type: "SUCCESS_LOGIN",
            payload: response,
          });
          console.log("userssss");
        }
      })

      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: "ERROR_LOGIN",
          payload: null,
        });
      })

      .finally(() => {});
  },
};

export default UserService;
