// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    let passLenght =  +prompt('How many characters do you want in your password:');
  
    if(typeof passLenght === 'number' && passLenght >= 8 & passLenght <= 128){

      alert('Password will be: ' + passLenght + ' characters long.');

      let specialChar = confirm('Do you want to use special characters in your password?');

      let lowerCased = confirm('Do you want to use lower cased characters in your password?');

      let upperCased = confirm('Do you want to use upper cases characters in your password?');

      let numeric = confirm('Do you want to use numeric characters in your password?');

      let userChoices = [passLenght, specialChar, lowerCased, upperCased, numeric];

    if (userChoices[1]=== false && userChoices[2]=== false && userChoices[3]=== false && userChoices[4]=== false){
      alert('Choose at least one kind of characters.');
      return false;
    }
      return  userChoices;
  }
    else {
      alert('Please use number between 8 and 128.');
      return false;
    }

  }

// Function for getting a random element from an array
function getRandom(arr) {
  
  let randomChar= Math.floor(Math.random() * (arr.length));
  
  return arr[randomChar];
  
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
