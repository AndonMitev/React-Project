import crud from "./crud";

const auth = (() => {
  const createUser = async ({ username, password, email }) => {
    try {
      const success = await crud.post("user", "POST", "basic", "", {
        username,
        password,
        email
      });
      saveUserData(success);
    } catch (err) {
      console.log(err);
    }
  };

  const loginUser = async ({ username, password }) => {
    try {
      const success = await crud.post("user", "POST", "basic", "login", {
        username,
        password
      });
      saveUserData(success);
    } catch (err) {
      console.log("Error", err);
    }
  };

  const saveUserData = userData => {
    localStorage.setItem("authtoken", userData._kmd.authtoken);
    localStorage.setItem("username", userData.username);
    localStorage.setItem("userId", userData._id);
  };

  return {
    createUser,
    loginUser
  };
})();

export default auth;