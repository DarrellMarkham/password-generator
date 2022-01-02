// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numericalChar = "0123456789"
  var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var password ="";
  var passwordChar = "";

  // Query password length and validate answer
  var passwordLength = prompt("Enter a passowrd length between 8 and 125 characters");
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8) {
    alert("Passwords must contain a minimum of 8 characters");
    generatePassword();
  }

  if (passwordLength > 125) {
    alert("Passwords must not contain more than 125 characters");
    generatePassword();
  }

  // Query use of lowercase characters 
  var lowercaseConfirm = confirm("Click 'OK' if you want to add lowercase characters");

  if (lowercaseConfirm) {
    passwordChar += lowercaseChar;
  }

  // Query use of uppercase characters 
  var uppercaseConfirm = confirm("Click 'OK' if you want to add uppercase characters?");

  if (uppercaseConfirm) {
    passwordChar += uppercaseChar;
  }

  // Query use of numericl characters 
  var numericalConfirm = confirm("Click 'OK' if you want to add numerical characters?");

  if (numericalConfirm) {
    passwordChar += numericalChar;
  }

  // Query use of special characters 
  var specialConfirm = confirm("Click 'OK' if you want to add special characters?");

  if (specialConfirm) {
    passwordChar += specialChar;
  }

  if (!lowercaseConfirm && !uppercaseConfirm && !numericalConfirm && !specialConfirm) {
    alert("You must include at least one characters type");
    generatePassword();
  }

  for (var i = 0; i <= passwordLength; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);