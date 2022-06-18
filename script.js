var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var validate = document.getElementById("p");
var btn = document.getElementById("btn");

pass1.onkeyup = function () {
  // Validate lowercase letters
  var validations = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

  if (pass1.value.length >= 8) {
    if (pass1.value.match(validations)) {
      validate.innerHTML = "strong password";
    } else {
      var alphabet = /\s?[^a-z0-9\_][^a-z0-9\_]/i / g;
      if (myInput.value.match(alphabet)) {
        validate.innerHTML = "add atleast one number";
      } else {
        if (pass1.value == pass2.value) {
          validate.innerHTML = "password matches";
        } else {
          validate.innerHTML = "password is not same";
        }
      }
    }
  } else {
    validate.innerHTML = "this must be of length of 8 ";
  }

};
