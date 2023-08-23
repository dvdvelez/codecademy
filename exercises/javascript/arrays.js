//Creating arrays
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
const hobbies = ['string 1', 'string 2', 'string 3'];

console.log(newYearsResolutions);
console.log(hobbies);



//Accessing elements in arrays
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);
console.log(listItem[2]);
console.log(listItem[25]);



//Updating elements
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';

console.log(groceryList);



//Reassigning let and const variables
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);



//.length property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);



//.push method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
console.log(chores);

chores.push('walk the dog', 'relax');
console.log(chores);



//.pop method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);

let newChore = chores[3];
console.log(newChore);



//Additional array methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);




//Mutating arrays
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);


function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept);




//Nesting arrays
const numberClusters = [['one', 'two'], ['three', 'four'], ['five', 'six']];
const target = numberClusters[2][1];
//The target variable is made to equal the index-2 array (['five', 'six']), and specifically index-1 element 'six')
//Notice that when specifying element 'six', there is no comma in between [2][1]. This is called 'chaining indices'.

console.log(target);




//Secret Message project
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//console.log(secretMessage.length);

secretMessage.pop();
//console.log(secretMessage);
//console.log(secretMessage.length);

secretMessage.push('to', 'program');
//console.log(secretMessage);

secretMessage[7] = 'right';
//console.log(secretMessage);

secretMessage.shift();
//console.log(secretMessage);

secretMessage.unshift('Programming');
//console.log(secretMessage);

secretMessage.splice(6, 5, 'know');
//'6' is the index# you want to begin at where you will either add or remove a string.
//'5' is the # of indices that you will remove. This is optional. You can put 0 and no indices will be removed or you can omit and ALL indices starting at index# 6 (in this case) will be removed.
//last entry is the string you want to add.
//console.log(secretMessage);

console.log(secretMessage.join(' '));
//Passing an empty string ('' or "") will join all the elements without any characters between them.
//If a separator is NOT provided, the array elements will be separated with a comma.
//Therefore, to separate the string elements you add a space (' ' or " ") in between the quotes.