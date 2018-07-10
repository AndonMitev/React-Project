import crud from "./crud";

const auth = (() => {
  const loginUser = ({ username, password }) => {
    crud.post("user", "POST", "basic", "login", { username, password })
    .then(res => {
      console.log(res);
      if(res.error) {
        message: res.responseJSON.description 
      }
      saveUserData(res);
      return 'User logged successful'
    })
    .catch(err => {
      console.log(err);
    });
  };


  const saveUserData = userData => {
    localStorage.setItem("authtoken", userData._kmd.authtoken);
    localStorage.setItem("username", userData.username);
    localStorage.setItem("userId", userData._id);
  };

  return {
    loginUser
  }
})();

export default auth;

/*const auth = (() => {
  const createUser = ({ username, password, email }) => {
    return crud.post("user", "POST", "basic", "", {
      username,
      password,
      email
    });
  };

  const loginUser = ({ username, password }) => {
    return crud.post("user", "POST", "basic", "login", { username, password });
  };

  

  return {
    createUser,
    loginUser,
    saveUserData
  };
})(); */


