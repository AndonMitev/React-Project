const validateInput = (username, password, confirmPassword, email, confirmEmail) => {

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
    if(!confirmPassword) {
      return false
    } else if (confirmPassword.length < 6) {
      return false;
    } else if (confirmPassword !== password) {
      return false;
    }
    return true;
  })();

  const validEmail = (() => {

  })();
}
// FINISH VALIDATION!!!!!!!!!