let even = 0;
let odd = 0;
let sumEven = 0;
let sumOdd = 0;

while (even < 5 && sumOdd <= 30) {
    let inputNumber = Number(prompt("Enter a integer number: "));
    if (isNaN(inputNumber) || inputNumber < 0) {
        alert("Please enter a valid number!!");
    } else if (inputNumber %2 === 0) {
        even++;
        sumEven += inputNumber;
        alert(`The number ${inputNumber} is even!`)
    } else {
        odd++;
        sumOdd += inputNumber;
        alert(`The number ${inputNumber} is odd!`)

    }
}

console.log(`The total even numbers: ${even}`);
console.log(`The total odd number: ${odd} `);
console.log(`The sum of even numbers is: ${sumEven}`);
console.log(`The sum of odd numbers is: ${sumOdd}`);

console.log("Hellooo")