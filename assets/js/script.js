
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
  var confirmLength = parseInt(prompt("How many characters would you like your password to be? "));
  while (confirmLength <= 7 || confirmLength >= 25 || isNaN(confirmLength)) {
    alert("Password length must be a number between 7 and 25 characters. Try again!");
    confirmLength = parseInt(prompt("How many characters would you like your password to be? "));
  }
  alert(`Your password will have ${confirmLength} characters`);

  var confirmSpecialCharacter = parseInt(prompt("How many special characters would you like to include?"));
  while (confirmSpecialCharacter < 1 || isNaN(confirmSpecialCharacter)) {
    alert("You must choose at least one special character and it must be a number!");
    confirmSpecialCharacter = parseInt(prompt("How many special characters would you like to include?"));
  }
  alert(`Your password will have ${confirmSpecialCharacter} special characters`);


  var passwordCharacters = []; 

  var confirmNumericCharacter = confirm ("Click ok to confirm if you would like to include numeric characters");
  var confirmLowercase = confirm ("Click ok to confirm if you would like to include lowercase characters");
  var confirmUppercase = confirm ("Click ok to confirm if you would like to include uppercase characters");

  while (confirmLowercase === false && confirmUppercase === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmNumericCharacter = confirm ("Click ok to confirm if you would like to include numeric characters");
    var confirmLowercase = confirm ("Click ok to confirm if you would like to include lowercase characters");
    var confirmUppercase = confirm ("Click ok to confirm if you would like to include uppercase characters");
  } 

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number);
  }

  if (confirmLowercase) {
    passwordCharacters = passwordCharacters.concat(alphaLower);
  }

  if (confirmUppercase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper);
  }

  passwordCharacters = passwordCharacters.concat(specialChar);

   var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)]
  }
  return randomPassword;
}
  function writePassword(){
    var password = generatePassword();
   var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  }
  

 
