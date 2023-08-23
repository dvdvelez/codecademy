//The "for" loop
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  }
/*
The initialization is let counter = 5, so the loop will start counting at 5.
The stopping condition is counter < 11, meaning the loop will run as long as the iterator variable, counter, is less than (or equal to) 11.
The iteration statement is counter++. This means after each loop, the value of counter will increase by 1.
For the first iteration counter will equal 5, for the second iteration counter will equal 6, and so on.
The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false.
The condition will be false when counter is greater than or equal to 11.
The point that the condition becomes false is sometimes called the "stop condition".
*/




//The "for" loop in reverse
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }




  //Looping through arrays
  const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

/*
In the loop above, we’ve named our iterator variable i. This is a variable naming convention you’ll see in a lot of loops.
When we use i to iterate through arrays we can think of it as being short-hand for the word "index".
Notice how our stopping condition checks that i is less than animals.length.
Remember that arrays are zero-indexed, the index of the last element of an array is equivalent to the length of that array minus 1.
So essentially what is happening here you are having i equal to the index numbers of the elements in the array.
You begin at index-0 and the loop will console.log the phrase within it and append the array with index-0.
As a 1 is added to i, i's new value will be 1. So when the loop runs again, it will console.log the phrase with the index-1 element appended to it this time around.
This process continues until i's VALUE is no longer less than the number (.length) of elements in the array...in this case 3 elements.
So this loop is comparing i's VALUE with the .length of the array and NOT the highest index#. Very important to understand this difference!
*/




//Nesting loops
// Write your code below
const bobsFollowers = ['James', 'Sal', 'Joe', 'Brian'];
const tinasFollowers = ['James', 'Sal', 'Mike'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if(bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

console.log(mutualFollowers);
//What is happening here is you are comparing bobsFollowers to tinasFollowers and if they have the same elements, those elements will be pushed to the new list mutualFollowers.




