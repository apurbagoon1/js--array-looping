/**
 * LOOPING Techniques:
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> for array loop
 * 5. for in --> for object loop 
 * 
*/

const friends = ['Elon', 'Bill', 'Mark', 'Warren'];

// for...of loop to print array elements
for (const friend of friends) {
    console.log(friend);  
}

// for loop to iterate over array by index
for (let i = 0; i < friends.length; i++) {
    console.log(i);       // Index of array element
    console.log(friends[i]);  // Array element
}

const numbers = [5, 23, 456, 421, 25, 4512, 54541, 21, 45, 6];

// for loop to iterate through numbers array
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);  
}

// while loop to iterate over friends array
let i = 0;
while(i < friends.length){
    console.log(friends[i]);  
    i++;
}

// while loop to iterate over numbers array
let n = 0;
while(n < numbers.length){
    console.log(numbers[n]);  
    n++;
}
