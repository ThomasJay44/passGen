// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// defining var
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specChar = [
  "@",
  "%",
  "+",
  "",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var possibleChar = [];
var guaranteedChar = [];
var finalPassword = [];
var choices = 0;

// prompt user for password criteria

//function for randomizing elements from an array

function generatePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  var length = parseInt(
    prompt("How many characters would you like your password to be?")
  );
  console.log(length);

  if (Number.isNaN(length)) {
    alert(
      "Password length must be defined by a numeric number between >= 8, and <= 128"
    );
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
    guaranteedChar.push(
      lowerCase[Math.floor(Math.random() * lowerCase.length)]
    );
    choices++;
  }

  var hasUpperCase = confirm(
    "Do you want your password to include upper case letters?"
  );
  if (hasUpperCase === true) {
    possibleChar = possibleChar.concat(upperCase);
    guaranteedChar.push(
      upperCase[Math.floor(Math.random() * upperCase.length)]
    );
    choices++;
  }

  var hasSpecChar = confirm(
    "Do you want your password to include special characters?"
  );
  if (hasSpecChar === true) {
    possibleChar = possibleChar.concat(specChar);
    guaranteedChar.push(specChar[Math.floor(Math.random() * specChar.length)]);
    choices++;
  }

  var hasNumbers = confirm("Do you want your password to include numbers?");
  if (hasNumbers === true) {
    possibleChar = possibleChar.concat(numbers);
    guaranteedChar.push(numbers[Math.floor(Math.random() * numbers.length)]);
    choices++;
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
  }
  //objest to store user inputs
  // var passwordOptions = {
  //   length: length,
  //   hasLowerCase: hasLowerCase,
  //   hasUpperCase: hasUpperCase,
  //   hasSpecChar: hasSpecChar,
  //   hasNumbers: hasNumbers,
  // };

  for (var i = 0; i < length - choices; i++) {
    guaranteedChar.push(
      possibleChar[Math.floor(Math.random() * possibleChar.length)]
    );
  }

  console.log(guaranteedChar);

  function shuffleArray(guaranteedChar) {
    var current = guaranteedChar.length;
    while (current != 0) {
      var random = Math.floor(Math.random() * current);
      current -= 1;
      var temp = guaranteedChar[current];
      guaranteedChar[current] = guaranteedChar[random];
      guaranteedChar[random] = temp;
    }
    return guaranteedChar;

    // choices = 0;
  }
  finalPassword = shuffleArray(guaranteedChar).join("");
  return finalPassword;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
