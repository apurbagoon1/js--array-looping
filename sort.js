const persons = ['rakib', 'nokib', 'sakib', 'akib', 'Pakib', 'anis', 'Anis'];

// Sort array alphabetically (case-sensitive)
const sortedPersons = persons.sort();
console.log(sortedPersons); 

// sort --> 
// const numbers = [4, 7, 2, 8, 3, 6];
/* 
Ascending ----> smaller to larger: [2, 3, 4, 6, 7, 8]
Descending --> larger to smaller:  [8, 7, 6, 4, 3, 2]
*/

// Sorting numbers in ascending and descending order
const numbers = [4, 7, 12, 8, 43, 6, 1];

// Ascending order sort: smaller to larger
const numbers_asc = [...numbers].sort(function (a, b) { return a - b });
console.log(numbers_asc);  // Sorted numbers in ascending order

// Descending order sort: larger to smaller
const numbers_dsc = [...numbers].sort(function (a, b) { return b - a });
console.log(numbers_dsc);  // Sorted numbers in descending order
