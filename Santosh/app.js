console.log("application started..!");

function submitLogin() {
  // event.preventDefault();
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
  return false;
}

function submitRegister() {
  // event.preventDefault();
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
  return false;
}

function submitProfile() {

  var con = new ActiveXObject("ADODB.Connection");
  var rs = new ActiveXObject("ADODB.Recordset");

  con.Open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='\db05.mdb'; Persist Security Info=False");
  rs.Open("Select * From profile", con, 1, 3);

  rs.AddNew;
  rs.Fields("p_name").value = document.forms["profileForm"]["pName"].value;
  rs.Fields("email").value = document.forms["profileForm"]["pEmail"].value;
  rs.Fields("phone").value = document.forms["profileForm"]["pPhone"].value;
  rs.Fields("address").value = document.forms["profileForm"]["pAddress"].value;
  rs.Fields("s_sname").value = document.forms["profileForm"]["pSSName"].value;
  rs.Fields("s_spercentage").value = document.forms["profileForm"]["pSSPercentage"].value;
  rs.Fields("h_sname").value = document.forms["profileForm"]["pHSName"].value;
  rs.Fields("h_spercentage").value = document.forms["profileForm"]["pHSPercentage"].value;
  rs.Fields("u_name").value = document.forms["profileForm"]["pUName"].value;
  rs.Fields("u_course").value = document.forms["profileForm"]["pUCourse"].value;
  rs.Fields("u_percentage").value = document.forms["profileForm"]["pUPercentage"].value;

  rs.Update;

  if(!rs.eof){
    alert("Profile Created Successfully.!");
    rs.Close();
    con.Close();
    location.href="home.html";
  }else {
    alert("Profile Creation Failed.!");
    rs.Close();
    con.Close();
  }
  return false;
}

function loadProfiles() {
  console.log("Loading Profiles..");

  var con = new ActiveXObject("ADODB.Connection");
  var rs = new ActiveXObject("ADODB.Recordset");

  con.Open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='\db05.mdb'; Persist Security Info=False");
  rs.Open("Select * From profile", con, 1, 3);
  document.write("<h1 align='center'>LinkDin Profiles</h1>");
  document.write("<table align='center' border=3>");
  document.write("<tr width=100>");
  document.write("<th width=100>Name</th>");
  document.write("<th width=100>Email</th>");
  document.write("<th width=100>Phone</th>");
  document.write("<th width=100>Address</th>");
  document.write("<th width=100>SSLC School name</th>");
  document.write("<th width=100>SSLC Percentage</th>");
  document.write("<th width=100>HSC School name</th>");
  document.write("<th width=100>HSC Percentage</th>");
  document.write("<th width=100>College Name</th>");
  document.write("<th width=100>Course</th>");
  document.write("<th width=100>college Percentage</th>");
  document.write("</tr>");
  document.write("</table>");
  rs.moveFirst();
  while(!rs.eof){
    document.write("<table align='center' border=3>");
    document.write("<tr width=100>");
    document.write("<td width=100>" + rs(1).value + "</td>");
    document.write("<td width=100>" + rs(2).value + "</td>");
    document.write("<td width=100>" + rs(3).value + "</td>");
    document.write("<td width=100>" + rs(4).value + "</td>");
    document.write("<td width=100>" + rs(5).value + "</td>");
    document.write("<td width=100>" + rs(6).value + "</td>");
    document.write("<td width=100>" + rs(7).value + "</td>");
    document.write("<td width=100>" + rs(8).value + "</td>");
    document.write("<td width=100>" + rs(8).value + "</td>");
    document.write("<td width=100>" + rs(9).value + "</td>");
    document.write("<td width=100>" + rs(10).value + "</td>");
    document.write("</tr>");
    document.write("</table>");
    rs.moveNext();
  }
}
