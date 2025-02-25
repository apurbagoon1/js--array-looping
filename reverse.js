// Original numbers array [7, 6, 5, 4, 3, 2, 1]
const numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log(numbers);
// const reversed = numbers.reverse();
// console.log(reversed);

// Simple reversal using unshift method
const rev_numbers = [];
for (const num of numbers) {
    rev_numbers.unshift(num);  // Unshift to reverse order
}
console.log(rev_numbers);  // Reversed array output

// Another way to reverse using unshift with a for loop
const reversed_numbers = [];
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    reversed_numbers.unshift(num);  // Reverse by unshifting
}
console.log(reversed_numbers);  // Reversed array output

// Reverse array with decremental loop and push
const rev_rev_numbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    rev_rev_numbers.push(num);  // Push elements in reverse order
}
console.log(rev_rev_numbers);  // Reversed array output with push
