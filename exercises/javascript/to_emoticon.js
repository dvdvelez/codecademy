// Write your function here:
const toEmoticon = emotion => {
    switch(emotion) {
      case 'shrug':
        return '|_{"}_|';
      case 'smiley face':
        return ':)';
      case 'frowny face':
        return ':(';
      case 'winky face':
        return ';)';
      case 'heart':
        return '<3';
      default :
        return '|_(* ~ *)_|  You need to specify the following emotions: shrug, smiley face, frowny face, winky face, or heart.';
    } 
  };
  
  // Uncomment the line below when you're ready to try out your function
  console.log(toEmoticon('whatever'));
  console.log(toEmoticon('shrug'));
  console.log(toEmoticon('heart'));
  console.log(toEmoticon('frowny face'));
  console.log(toEmoticon('winky face'));
  console.log(toEmoticon('smiley face'));
  
  
/*
// As a function declaration: 
function toEmoticon(meaning) {
    switch (meaning) {
        case 'shrug':
            return '|_{"}_|'
        case 'smiley face':
            return ':)';
        case 'frowny face':
            return ':(';
        case 'winky face':
            return ';)';
        case 'heart':
            return '<3';
        default:
            return '|_(* ~ *)_|';
    }
}

console.log(toEmoticon('whatever'))
*/