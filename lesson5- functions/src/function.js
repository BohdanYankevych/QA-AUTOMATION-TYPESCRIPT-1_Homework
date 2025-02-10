// Домашнє завдання

function sumArray(arr) {
    return arr.reduce((acc, value) => acc + (typeof value === "number" ? value : 0), 0);
}

const numbers = [10, 20, 30, 40, 50];

// Масив рядків (ігноруватиметься при додаванні)
const strings = ["hello", "world", "test"];

console.log("Sum of numbers:", sumArray(numbers));
console.log("Sum of strings:", sumArray(strings));
