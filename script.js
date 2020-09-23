// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbers = "0123456789".split("");
  var specialCharacters = ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~`.split("");
  var chosenCharacters = [];
  var finalPassword = [];

  
  var chooseLower = confirm("Would you like lower case letters?");
  var chooseUpper = confirm("Would you like upper case letters?");
  var chooseNumber = confirm("Would you like numbers?");
  var chooseSpecial = confirm("Would you like special characters?");

  if (!chooseLower && !chooseUpper && !chooseNumber && !chooseSpecial){
    alert("Please reselect your criteria and include at least one character type!");
    return false;
  }

  var chooseLength = prompt("How many characters should be included in your password (between 8 to 128 characters)?");
  while(isNaN(chooseLength) || (chooseLength < 8 || chooseLength > 128)){
    chooseLength = prompt("Please enter a numerical value between 8 to 128 characters!");
    if(typeof chooseLength === 'number' && chooseLength >= 8 && chooseLength <= 128) {
      break;
    }
  }
  
  if(chooseLower){
    for(let i = 0; i < lowerCaseLetters.length; i++){
      chosenCharacters.push(lowerCaseLetters[i]);
    } 
    console.log(chosenCharacters);
  }

  if(chooseUpper){
    for(let i = 0; i < upperCaseLetters.length; i++){
      chosenCharacters.push(upperCaseLetters[i]);
    } 
    console.log(chosenCharacters);
  }

  if(chooseNumber){
    for(let i = 0; i < numbers.length; i++){
      chosenCharacters.push(numbers[i]);
    } 
    console.log(chosenCharacters);
  }

  if(chooseSpecial){
    for(let i = 0; i < specialCharacters.length; i++){
      chosenCharacters.push(specialCharacters[i]);
    } 
    console.log(chosenCharacters);
  }

  for(let i = 0; i < chooseLength; i++){
    var randomIndex = Math.floor(Math.random()*chosenCharacters.length);
    console.log(chosenCharacters[randomIndex]);
    finalPassword.push(chosenCharacters[randomIndex]);
  }
  console.log(finalPassword)
  // console.log(upperCaseLetters);
  return finalPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
