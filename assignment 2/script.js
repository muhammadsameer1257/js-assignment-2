// Prompt the user to enter a number
let number = prompt("Enter a number:");

// Convert the input to a number
number = Number(number);

// Check if the number is odd or even
if (number % 2 === 0) {
    alert(`The number ${number} is even.`);
} else {
    alert(`The number ${number} is odd.`);
}

// Increment the number by 1
number++;

// Display the new value
alert(`The new value after incrementing is ${number}.`);