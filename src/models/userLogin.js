import { toast } from "react-toastify";

export default {
  defaultState: { username: "", password: "" },

  validateLoginState: obj => {
    const { username, password } = obj;

    if (!username) {
      return toast.error("Username is required", {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if (!password) {
      return toast.error("Password is required", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }
};
