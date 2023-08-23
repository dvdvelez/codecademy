// Write your function here:
const truthyOrFalsy = value => {
    if(value) {
      return true;
    } else {
      return false;
    }
  };
  
  // Uncomment the line below when you're ready to try out your function
  //All of the lines below will return falsy
  console.log(truthyOrFalsy(0)); //The number 0 is falsy
  console.log(truthyOrFalsy(undefined));
  console.log(truthyOrFalsy(false));
  console.log(truthyOrFalsy(NaN)); //Not a Number
  console.log(truthyOrFalsy(-0));
  console.log(truthyOrFalsy('')); //Empty strings will also return falsy
  
  //Any other integer value or string will return truthy
  console.log(truthyOrFalsy(1)); //The number 1 is truthy
  console.log(truthyOrFalsy('Hello'));