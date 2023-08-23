//function getSleepHours(day);  This is the default way to declare a function. The line below is in arrow-function notation--it is meant to be more clear and concise and is being more commonly used today. The default way is still perfectly acceptable though.
const getSleepHours = day => {
    if(day === 'monday') {
      return 8;
    } else if(day === 'tuesday') {
      return 5;
    } else if(day === 'wednesday') {
      return 10;
    } else if(day === 'thursday') {
      return 8;
    } else if(day === 'friday') {
      return 7;
    } else if(day === 'saturday') {
      return 8;
    } else if(day === 'sunday') {
      return 8;
    }
    //You can also omit the 'sunday' parameter and change the last else-if statement to just 'else'. Compare with else if statement further below.
  };


  
  const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    //If you have no parameters AND only one line of code, then you don't need the braces. Compare with block code in getIdealSleepHours below.
    //You could have also ommited the entire line and replaced it with this: 8 + 7 + 6 + 6 + 7 + 8 + 8;
    //In which case, you wouldn't have needed to define getSleepHours at all at the beginning of the file above.



  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
    //You could also have rewritten this line of code by passing idealHours as a parameter and then multiplying it by 7 in one single line of code as below:
    
    // const getIdealSleepHours = idealHours => idealHours * 7;

    //Remember...if you have only 1 parameter you DON'T need parenthesis.
    //Then in the calculateSleepDebt code block below, you would pass '8' as an argument in getIdealSleepHours and change you daily ideal sleep hours there instead of in this code block.
  };
  console.log(`Your ideal hours of sleep are: ${getIdealSleepHours()} hours.`);
  console.log(`Your actual hours of sleep are: ${getActualSleepHours()} hours.`);


  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    //Refer back to previous comment for getIdealSleepHours. You could also pass '8' as an argument with the modifications above in the getIdealSleepHours code block. Like so:
    // const IdealSleepHours = getIdealSleepHours(8);

    if(actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if(actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep than you needed.');
      //Compare both console.log statements. Above is using single parenthesis while the bottom one is using backticks. Same result, just different way of logging something to the console.
    } else {
      console.log(`You got ${idealSleepHours - actualSleepHours} less hours of sleep. You need to sleep more.`);
    }
  };

  calculateSleepDebt();