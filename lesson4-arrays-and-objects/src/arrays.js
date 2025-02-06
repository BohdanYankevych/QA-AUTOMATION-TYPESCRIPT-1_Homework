const arr = [1, '2', 3, 100];

console.log(arr);

arr.push(4);
console.log(arr);

const filteredArray = arr.filter((el) => typeof el === 'number');
console.log(filteredArray);

const foundElement = arr.find((el) => typeof el === 'number');
console.log(foundElement);

function isString(el){
    return typeof el === 'string';
}
const filterString = arr.filter((el) => isString(el));
console.log(filterString);


const sortedArray = arr.sort();
console.log(sortedArray);

const sortedNumberArray = arr.sort((a, b) => a - b);
console.log(sortedNumberArray);

const sortedNumberArray2 = arr.sort((a, b) => b - a);
console.log(sortedNumberArray2);

console.log('_________________________________\n');

// Масиви різних типів
const stringArray = ['apple', 'banana', 'cherry'];
const numberArray = [10, 20, 30, 40];
const booleanArray = [true, false, true, false];
const mixedArray = [1, 'hello', true, null];

// Використання forEach()
stringArray.forEach(item => console.log(`Fruit: ${item}`));
numberArray.forEach(num => console.log(`Number: ${num}`));

// Використання map()
const upperCaseFruits = stringArray.map(item => item.toUpperCase());
console.log('Uppercase Fruits:', upperCaseFruits);

const doubledNumbers = numberArray.map(num => num * 2);
console.log('Doubled Numbers:', doubledNumbers);
