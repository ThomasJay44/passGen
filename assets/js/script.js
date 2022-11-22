// Assignment Code

// defining var
// var upperCase = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'].split(',')
// var lowerCase = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'].split(',')
// var specChar = ['!',] //etc
// var numbers = ['1'] // etc

// prompt user for password criteria

function passEnter() {
  var length = parseInt(prompt("How many char..."));
  console.log(length);

  if (Number.isNaN(length)) {
    alert("Password must be a numeric number");
    return null;
  }
  //conditional to check greater than 8
  if (length < 8) {
    alert("Pass length has to be 8 or more");
    return null;
  }
  //conditional to check less that 128
  if (length > 128) {
    alert("Pass length has to be less than 128");
    return null;
  }
  //conditional to check whether a user wants lower upper numbers or special
  var hasLowerCase = confirm("Would you like to include lower case letters.");
  var hasUpperCase = confirm("Would you like to include upper case letters.");
  var hasSpecChar = confirm("Would you like to include special characters.");
  var hasNumbers = confirm("Would you like to include numbers.");
  // create conditional to make sure at least one character type is selected
  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasSpecChar === false &&
    hasNumber === false
  ) {
    alert("Must chose one char type");
    return null;
  }
  //objest to store user inputs
  var passwordOptions = {
    length: length,
    hasLowercase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasSpecChar: hasSpecChar,
    hasNumbers: hasNumbers,
  };

  console.log(passwordOptions);
  return passwordOptions;
}

function runMYApp() {
  passEnter();
}
runMyApp;
// passEnter();

// length of password has to be AT LEAST 8 char and NOMORE than 128 char

//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
