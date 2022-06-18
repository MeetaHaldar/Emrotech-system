var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var validate = document.getElementById("p");
var btn = document.getElementById("btn");
var form = document.getElementById("form");
btn.disabled = true;
form.style.display = "block";
if (pass1.value || pass2.value == " ") {
  btn.disabled = true;
}
pass1.onkeyup = function () {
  var validations = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

  if (pass1.value.length >= 8) {
    if (pass1.value.match(validations)) {
      validate.innerHTML = "strong password";
      pass1.style.borderColor = "green";
      btn.disabled = false;
    } else {
      var alphabet = /^[A-Z]+$/i;
      var numbers = /^[0-9]/;
      if (pass1.value.match(alphabet)) {
        validate.innerHTML =
          "the password contains characters only from the alphabet add atleast one number";
      } else if (pass1.value.match(numbers)) {
        validate.innerHTML = "add atleast one character";
      } else {
        btn.disabled = false;
      }
    }
  } else {
    pass1.style.borderColor = "red";
    validate.innerHTML = "password length is less than 8 ";
  }
};
btn.addEventListener("click", () => {
  if (pass1.value == pass2.value) {
    validate.innerHTML = "password matches";
    form.style.display = "none";
    final.style.display = "block";
  } else {
    validate.innerHTML = "the 2 passwords do not match";
  }
});
