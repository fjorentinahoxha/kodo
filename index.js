function login (){
    var x = document.getElementById("email").value;
    document.getElementById("email-display").innerHTML = "You entered the email: " + x;
    var y = document.getElementById("password").value;
    document.getElementById("password-display").innerHTML = "You entered the password: " + y;
}
function signup (){
    var x = document.getElementById("email").value;
    document.getElementById("email-display").innerHTML = "You entered the email: " + x;
    var y = document.getElementById("password").value;
    document.getElementById("password-display").innerHTML = "You entered the password: " + y;
    var z = document.getElementById("confirmPassword").value;
    document.getElementById("confirmPassword-display").innerHTML = "You entered the password confirmation: " + z;

}

function singupLg() {
    location.replace("signup.html")
  }

  function loginSg() {
    location.replace("login.html")
  }