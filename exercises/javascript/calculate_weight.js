  //CodeCademy's solution is below

  const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
        case 'Mercury':
            return earthWeight * .378;
        case 'Venus':
            return earthWeight * .907;
        case 'Mars':
            return earthWeight * .377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * .916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}

/*
// As a function declaration: 
function calculateWeight(earthWeight, planet) {
    switch (planet) {
        case 'Mercury':
            return earthWeight * .378;
        case 'Venus':
            return earthWeight * .907;
        case 'Mars':
            return earthWeight * .377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * .916;
	 default:
		return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}
*/
console.log(calculateWeight(100, 'Jupiter'))

/*
//This is MY solution to the exercise
const calculateWeight = (earthWeight, planet) => {
    const mercuryWeight = earthWeight * 0.378;
    const venusWeight = earthWeight * 0.907;
    const marsWeight = earthWeight * 0.377;
    const jupiterWeight = earthWeight * 2.36;
    const saturnWeight = earthWeight * 0.916;
  
    if(planet === 'Mercury') {
      console.log(`Your weight on ${planet} is ${mercuryWeight} lbs.`);
    } else if(planet === 'Venus') {
      console.log(`Your weight on ${planet} is ${venusWeight} lbs.`);
    } else if(planet === 'Mars') {
      console.log(`Your weight on ${planet} is ${marsWeight} lbs.`);
    } else if(planet === 'Jupiter') {
      console.log(`Your weight on ${planet} is ${jupiterWeight} lbs.`);
    } else if(planet === 'Saturn') {
      console.log(`Your weight on ${planet} is ${saturnWeight} lbs.`);
    } else {
      console.log('Invalid planet entry. Try either of the following: Mercury, Venus, Mars, Jupiter, or Saturn.');
    }
  };
  
  calculateWeight(175, 'Saturn');
  */