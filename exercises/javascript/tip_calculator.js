// Write your function here:
//CodeCademy's solution is below
const tipCalculator = (quality, total) => {
    switch (quality) {
        case 'bad':
            return total * .05;
        case 'ok':
            return total * .15;
        case 'good':
            return total * .20;
        case 'excellent':
            return total * .30;
        default:
            return total * .18;

    }
}
/*
// As a function declaration:
function tipCalculator(quality, total) {
    switch (quality) {
        case 'bad':
            return total * .05;
        case 'ok':
            return total * .15;
        case 'good':
            return total * .20;
        case 'excellent':
            return total * .30;
        default:
            return total * .18;

    }
}
*/
console.log(tipCalculator('good', 100))


/*
//MY solution to the exercise is below
// Write your function here:
const tipCalculator = (quality, total) => {
  let tipAmount;
  let qualityOfService = quality;

  if(quality === 'bad') {
    tipAmount = (total * 0.05);
    return `Your tip for your ${qualityOfService} service is $${tipAmount.toFixed(2)}.`;
    //.toFixed is to record up to two decimal point. If you change it to three then you will see three decimal points...it'd be 2.500.
  }
  else if(quality === 'ok') {
    tipAmount = (total * 0.15);
    return `Your tip for your ${qualityOfService} service is $${tipAmount.toFixed(2)}.`;
  }
  else if(quality === 'good') {
    tipAmount = (total * 0.18);
    return `Your tip for your ${qualityOfService} service is $${tipAmount.toFixed(2)}.`;
  }
  else if(quality === 'excellent') {
    tipAmount = (total * 0.20);
    return `Your tip for your ${qualityOfService} service is $${tipAmount.toFixed(2)}.`;
  }
  else if(quality === 'superb') {
    tipAmount = (total * 0.30);
    return `Your tip for your ${qualityOfService} service is $${tipAmount.toFixed(2)}.`;
  }
  else {
    return 'Error! Please indicate if the service was either: bad, ok, good, excellent, or superb.';
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('bad', 100));
console.log(tipCalculator('ok', 100));
console.log(tipCalculator('good', 100));
console.log(tipCalculator('excellent', 100));
console.log(tipCalculator('superb', 100));
console.log(tipCalculator('dunno', 100));
*/