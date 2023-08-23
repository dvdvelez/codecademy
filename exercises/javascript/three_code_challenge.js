// This is Data Type challenge
const colorMessage = (favoriteColor, shirtColor) => {
    if(favoriteColor === shirtColor) {
      return 'The shirt is your favorite color!';
    }
    else {
      return 'That is a nice color.';
    }
  };
  
  console.log(colorMessage('blue', 'blue'));



// This is Conditional challenge
const isEven = number => {
    if(number % 2 === 0) {
      //if you divide even number by two, then the remainder will always be zero thereby making the number even!
      return true;
    }
    else {
      return false;
    }
  };
  
  console.log(isEven(99));


  
// This is Function and ranges challenge
const numberDigits = x => {
    if(x >= 0 && x <= 9) {
      return `One digit: ${x}`;
    }
    else if(x >= 10 && x <= 99) {
      return `Two digits: ${x}`;
    }
    else {
      return `The number is: ${x}`;
    }
  };
  
  console.log(numberDigits(-1));