let minInner;
let maxInner;
let minNumber;
let maxNumber;
let count = 0;
do {
    minInner = Math.floor(prompt("Введіть мінімальне число (N)"));
    minNumber = minInner;
    if (Number.isFinite(minNumber) === false || minNumber === 0) {
        alert("ВВЕДІТЬ ЧИСЛО!!!");
    }
} while (Number.isFinite(minNumber) === false || minNumber === 0);

do {
    maxInner = Math.floor(prompt("Введіть максимальне число (M)"));
    maxNumber = maxInner;
    if (Number.isFinite(maxNumber) === false || maxNumber === 0) {
        alert("ВВЕДІТЬ ЧИСЛО!!!");
    }
} while (Number.isFinite(maxNumber) === false || maxNumber === 0);

let evenOdd = confirm("Пропускати Парні Числа ?");

for (minNumber; minNumber <= maxNumber; minNumber++) {
    let remainder = minNumber % 2;
    if (remainder === 1 && evenOdd === true) {
        count += minNumber;
        console.log(minNumber);
    } else if (evenOdd === false) {
        count += minNumber;
        console.log(minNumber);
    }
}
console.log(count);
let text = document.getElementById("box");
text.innerHTML = `<p>Число N - <span>${minInner}</span></p>
            <p>Число M - <span>${maxInner}</span></p>
            <p>Булеве значення - <span>${evenOdd}</span></p>
            <p>Відповідь - <span>${count}</span></p>`;
