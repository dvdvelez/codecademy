let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
let age = 18;

if(registerEarly && age > 18){
  raceNumber += 1000;
  //You are adding 1000 because early-registered adults recieve a race number at or ABOVE 1000
}

if(registerEarly && age > 18){
  console.log(`Your race time is at 9:30 a.m. Your race number is ${raceNumber}.`);
} else if(!registerEarly && age > 18) {
  console.log(`Your race time is at 11:00 a.m. Your race number is ${raceNumber -= 1}.`)
  //The negation operator (!) essentially reverses or negates a boolean, truthy, or falsy statements
} else if (age < 18){
  console.log(`Your race time is at 12:30 p.m. Your race number is ${raceNumber -= 1}.`)
} else if (age = 18){
  console.log('Please see registration desk for further race time and information.');
}
