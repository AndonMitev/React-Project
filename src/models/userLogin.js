import { toast } from "react-toastify";

export default {
  //Generate default state props for HOC to handle
  defaultState: { username: "", password: "" },

  //Generate validation on props for HOC to handle 
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
