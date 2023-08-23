// Write your function here:
/* 
Our solution is written as a function expression and uses string interpolation, but it would be equally acceptable to use a function declaration and/or string concatenation
*/

const howOld = (age, year) => {
    // The following two lines make it so that our function always knows the current year.
        let dateToday = new Date();
        let thisYear = dateToday.getFullYear();
    // It is totally ok if your function used the current year directly!
      
        const yearDifference = year - thisYear;
        const newAge = age + yearDifference;
        if (newAge > age) {
            return `You will be ${newAge} in the year ${year}`;
        } else if (newAge < 0) {
            return `The year ${year} was ${-newAge} years before you were born`;
        } else {
            return `You were ${newAge} in the year ${year}`;
        }
    };
    
    //To actually log the return values to the console it is not sufficient to just call the function.
    //You MUST console.log the function (as below) to see the function in action.
    //ORrrrrr...you can console.log the results WITHIN the IF statements and THEN proceed to call the function without console.logging it.
    //Compare with your solution to see the difference.
    console.log(howOld(40, 2024));


/*
//MY solution to the exercise
const howOld = (currentAge, whatYear) => {
    const currentYear = 2023;
    let calculateAge;
    if(currentAge < 0) {
      console.log("You are negative years old? This can't be. Check your current age please!");
    }
    else if(currentYear < whatYear && currentAge + (whatYear - currentYear) >= 2) {
      calculateAge = currentAge + (whatYear - currentYear);
      console.log(`You will be ${calculateAge} years old in ${whatYear}.`);
    }
    else if(currentYear < whatYear && currentAge - (currentYear - whatYear) === 1) {
      calculateAge = currentAge - (currentYear - whatYear);
      console.log(`You will be ${calculateAge} year old in ${whatYear}.`);
    }
    else if(currentYear > whatYear && currentAge - (currentYear - whatYear) >= 2) {
      calculateAge = currentAge - (currentYear - whatYear);
      console.log(`You were ${calculateAge} years old in ${whatYear}.`);
    }
    else if(currentYear > whatYear && currentAge - (currentYear - whatYear) === 1) {
      calculateAge = currentAge - (currentYear - whatYear);
      console.log(`You were ${calculateAge} year old in ${whatYear}.`);
    }
    else if(currentYear === whatYear && currentAge - (currentYear - whatYear) >= 2) {
      console.log(`You are currently ${currentAge} years old in ${currentYear}.`);
    }
    else if(currentYear === whatYear && currentAge - (currentYear - whatYear) === 1) {
      console.log(`You are currently ${currentAge} year old in ${whatYear}.`);
    }
    else if(currentAge - (currentYear - whatYear) === 0) {
    console.log(`You are going to be/have been/or were born in ${whatYear}. Welcome to the world!`);
    }
    else if(currentAge - (currentYear - whatYear) < 0) {
    console.log(`You are negative years old? This can't be. Check your current age and year input.`);
    }
  };
  
  howOld(40, 2024);
  howOld(40, 2023);
  howOld(40, 2022);
  howOld(40, 1983);
  howOld(40, 1982);
  howOld(1, 2024);
  howOld(1, 2023);
  howOld(1, 2022);
  howOld(1, 2021);
  howOld(0, 2030);
  howOld(0, 2024);
  howOld(0, 2023);
  howOld(0, 2022);
  howOld(0, 2000);
  howOld(0, -2000);
  howOld(0, 0);
  howOld(-1, 2050);
  howOld(-1, 2024);
  howOld(-1, 2023);
  howOld(-1, 2022);
  howOld(-1, 0);
  */

