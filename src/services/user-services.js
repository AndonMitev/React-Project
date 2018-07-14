import crud from "./crud";

const auth = (() => {
  const adminRoleId = "4b414071-1dc4-40b4-9fa4-61bc0f0aa969";

  const createUser = ({ username, password, email }) => {
    return crud.post("user", "basic", "", {
      username,
      password,
      email
    });
  };

  const loginUser = ({ username, password }) => {
    return crud.post("user", "basic", "login", { username, password });
  };

  const isAdmin = () => localStorage.getItem("roleId") !== null;

  const saveUserData = userData => {
    localStorage.setItem("authtoken", userData._kmd.authtoken);
    localStorage.setItem("username", userData.username);
    localStorage.setItem("userId", userData._id);

    if (userData._kmd.roles) {
      if (userData._kmd.roles[0].roleId === adminRoleId) {
        localStorage.setItem("roleId", adminRoleId);
      }
    }
  };

  const myProfile = userId => crud.get("user", "kinvey", userId);

  const updateUser = (userId, data) =>
    crud.update("user", isAdmin() ? "master" : "kinvey", userId, data);

  return {
    createUser,
    loginUser,
    isAdmin,
    saveUserData,
    myProfile,
    updateUser
  };
})();

export default auth;
