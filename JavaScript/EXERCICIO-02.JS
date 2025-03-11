let sum = 0;
let cont = 0;
let inputGrade;

while (cont < 10) {
    inputGrade = Number(prompt("Enter a grade: "));

    if (isNaN(inputGrade) || inputGrade < 0 || inputGrade > 10) {
        alert("Please enter a valid number!!");
    } else {
        sum = sum + inputGrade;
        cont++;
    }
}

const average = sum / cont;
console.log(average);