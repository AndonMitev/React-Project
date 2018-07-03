const validateInput = (username, password, cofirmPassword, email, confirmEmail) => {

  const validUsername = (() => {
    if(!username) {
      return false
    } else if (username.length < 3) {
      return false;
    }
    return true;
  })();

  const validPassword = (() => {
    if(!password) {
      return false
    } else if (password.length < 6) {
      return false;
    }
    return true;
  });

  const validConfirmPassword = (() => {

  })();
}