console.log("application started..!");

function submitLogin() {
  event.preventDefault();
  var userEmail = document.forms["loginForm"]["uEmail"].value;
  var userPassword = document.forms["loginForm"]["uPassword"].value;
  console.log(userEmail, userPassword);

  var con = new ActiveXObject("ADODB.Connection");
  var rs = new ActiveXObject("ADODB.Recordset");

  con.Open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='\db05.mdb'; Persist Security Info=False");
  rs.Open("Select password From userdata where email = '" + userEmail + "'", con, 1, 3);
  if(!rs.eof){
    if(rs.fields(0).value == userPassword) {
      alert("Login Success.!");
      rs.Close();
      con.Close();
      location.href="home.html";
    }else {
      alert("Login failed.!");
      rs.Close();
      con.Close();
    }
  }
}

function submitRegister() {
  event.preventDefault();
  var userName = document.forms["registerForm"]["uName"].value;
  var userEmail = document.forms["registerForm"]["uEmail"].value;
  var userPhone = document.forms["registerForm"]["uPhone"].value;
  var userPassword = document.forms["registerForm"]["uPassword"].value;
  console.log(userEmail, userPassword, userPhone, userPassword);

  var con = new ActiveXObject("ADODB.Connection");
  var rs = new ActiveXObject("ADODB.Recordset");

  con.Open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='\db05.mdb'; Persist Security Info=False");
  rs.Open("Select * From userdata", con, 1, 3);

  rs.AddNew;
  rs.Fields("user_name").value = userName;
  rs.Fields("email").value = userEmail;
  rs.Fields("phone").value = userPhone;
  rs.Fields("password").value = userPassword;
  rs.Update;

  if(!rs.eof){
    alert("Registration Success.!");
    rs.Close();
    con.Close();
    location.href="home.html";
  }else {
    alert("Registration Failed.!");
    rs.Close();
    con.Close();
  }
}
