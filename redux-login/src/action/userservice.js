import Communication from "./Communications";
import config from "../config";

const UserService = {
  login(dispatch, path, data, navigate) {
    dispatch({
      type: "LOAD_LOGIN",
      payload: null,
    });

    console.log('config', config);
    Communication.postMethod(path, data)
      .then((response) => {
        console.log('Login_Response', response);
        localStorage.setItem('login', response.token)
        dispatch({
          type: "Success_Login",
          payload: response,
        });
        navigate('/users')
      })

      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: "ERROR_LOGIN",
          payload: null,
        });
      })

      .finally(() => { });
  },


  loadUsers(dispatch, path) {
    dispatch({
      type: "LOAD_USERS",
      payload: null,
    });

    Communication.getMethod(path)
      .then((result) => {
        dispatch({
          type: "GET_USERS",
          payload: result,
        });
      })

      .catch(() => {
        dispatch({
          type: "ERROR_USERS",
          payload: null,
        });
      })

      .finally(() => {});
  },

  deleteUser(dispatch, path, _data) {
    dispatch({
      type: "LOAD_USERS",
      payload: null,
    });

    Communication.deleteMethod(path, _data)
      .then((response) => {
        dispatch({
          type: "DELETE_USER",
          payload: response,
        });
      })

      .catch(() => {
        dispatch({
          type: "ERROR_USERS",
          payload: null,
        });
      })

      .finally(() => {});
  },

  updateUser(dispatch, path, _data) {
    dispatch({
      type: "LOAD_USERS",
      payload: null,
    });

    Communication.putMethod(path, _data)
      .then((response) => {
        dispatch({
          type: "UPDATE_USER",
          payload: response,
        });
      })

      .catch(() => {
        dispatch({
          type: "ERROR_USERS",
          payload: null,
        });
      })

      .finally(() => {});
  },
};

export default UserService;
