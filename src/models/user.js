export default {
  defaultState: { username: "", password: "" },

  validateLogin: obj => {
    const { username, password } = obj;

    if (!username) {
      return "Username is required";
    }

    if (!password) {
      return "Password is required";
    }
  }
};
