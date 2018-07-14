import { toast } from "react-toastify";

export default {
  //Generate default state props for HOC to handle
  defaultState: {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    confirmEmail: ""
  },

  //Generate validation on props for HOC to handle 
  validateRegisterState: obj => {
    const { username, password, confirmPassword, email, confirmEmail } = obj;

    if (!username || username.length < 3) {
      return toast.error(
        "Username is required and should be atleast 3 symbols long",
        {
          position: toast.POSITION.TOP_RIGHT
        }
      );
    }

    if (!password || password.length < 3) {
      return toast.error(
        "Password is required and should be atleast 3 symbols long",
        {
          position: toast.POSITION.TOP_RIGHT
        }
      );
    }

    if (password !== confirmPassword) {
      return toast.error("Password and Confirm password dont match", {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if (!email || email.length < 3 || !email.includes("@")) {
      return toast.error("Invalid email", {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if (
      !confirmEmail ||
      confirmEmail.length < 3 ||
      !confirmEmail.includes("@")
    ) {
      return toast.error("Invalid confirm email", {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if (email !== confirmEmail) {
      return toast.error("Email and Confirm email dont match", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }
};
