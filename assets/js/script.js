// Assignment Code
var generateBtn = document.querySelector("#generate");
    generateBtn.addEventListener("click", writePassword) 
// defining var
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specChar = ['@', '%', '+', '', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var possibleChar =[];
var guarantedChar =[];
var password =[];

// prompt user for password criteria

//function for randomizing elements from an array


function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  var length = parseInt(prompt("How many characters would you like your password to be?"));
  console.log(length);

  if (Number.isNaN(length)) {
    alert("Password length must be defined by a numeric number between >= 8, and <= 128");
    return null;
  }
  //conditional to check greater than 8
  if (length < 8) {
    alert("Pass length has to be 8 or more characters");
    return null;
  }
  //conditional to check less that 128
  if (length > 128) {
    alert("Password length has to be less than 128 characters");
    return null;
  }
  //conditional to check whether a user wants lower upper numbers or special
  var hasLowerCase = confirm(
    "Do you want your password to include lower case letters?"
    );
    if (hasLowerCase === true) {
      possibleChar = possibleChar.concat(lowerCase);
      console.log(possibleChar)
    }


  var hasUpperCase = confirm(
    "Do you want your password to include upper case letters?"
    );
    if (hasUpperCase === true) {
      possibleChar = possibleChar.concat(upperCase);
      console.log(possibleChar)
  
  
    }


  var hasSpecChar = confirm(
    "Do you want your password to include special characters?"
    );
    if (hasSpecChar === true) {
      possibleChar = possibleChar.concat(specChar);
      console.log(possibleChar)

    }


  var hasNumbers = confirm(
    "Do you want your password to include numbers?"
    );
    if (hasNumbers === true) {
      possibleChar = possibleChar.concat(numbers);
      console.log(possibleChar)
    }


  // create conditional to make sure at least one character type is selected
  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasSpecChar === false &&
    hasNumbers === false
  ) {
    alert("Must chose one char type");
    writePassword();
  } else {
      //objest to store user inputs
    var passwordOptions = {
      length: length,
      hasLowerCase: hasLowerCase,
      hasUpperCase: hasUpperCase,
      hasSpecChar: hasSpecChar,
      hasNumbers: hasNumbers,

  }
  console.log(passwordOptions);
}

  function randomizeArray() {
    var eric = possibleChar [Math.floor(Math.random() * possibleChar.length)];
    // //create a varaible to store the random arr.length
    // var randomI = Math.floor(Math.random() * arr.length);
    // //create a variable to store the random array
    // var randomChar = arr[randomI]
    // //return the random array
    //  return randomChar
    // }

  for (var i = 0; i <= length; i++) {
     guarantedChar.push(eric)
    } 

  console.log(eric[i]);
  } 
  
  randomizeArray();



  






// length of password has to be AT LEAST 8 char and NOMORE than 128 char

//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// // }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)
  }