let sum = 0;
let cont = 0;

while (cont < 5) {
    let inputNumber = Number(prompt("Enter a number bigger than 10: "))

    if (isNaN(inputNumber) || inputNumber <=10) {
        alert("Please enter a valid number!!");
    } else{
        sum = sum + inputNumber;
        cont++;
    }
}

console.log(`The sum is: ${sum}`);