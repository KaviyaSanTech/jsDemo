console.log("application started..!");

function submitLogin() {
  var userEmail = document.forms["loginForm"]["uEmail"].value;
  var userPassword = document.forms["loginForm"]["uPassword"].value;
  console.log(userEmail, userPassword);
  alert("Login Success.!");
  return false;
}
