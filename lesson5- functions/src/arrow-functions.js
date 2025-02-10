const doSomeJob = (name, age, job) => {
    sayName(name);
    sayAge(age);
    sayJob(job);
};

const sayName = (name) => {
    console.log('  Hallo ' + name);
};

const sayAge = (age) =>{
    console.log('  You are ' + age + ' years old');
};

const sayJob = (job) => {
    let jobInternal;
    if (!job){
        jobInternal = {role: 'Unemployed'};
    } else {
        jobInternal = job;
    }
    console.log('  You are a ', jobInternal);
};

doSomeJob('John', 25, {role: 'Developer', seniority: 'Middle'});


console.log('------------------------------------------------');

// Домашнє завдання
const sumArrayArrow = (arr) => arr.reduce((acc, value) => acc + (typeof value === "number" ? value : 0), 0);

const numbersArrow = [5, 15, 25, 35, 45];

const stringsArrow = ["apple", "banana", "cherry"];

console.log("Sum of numbers (arrow function):", sumArrayArrow(numbersArrow));
console.log("Sum of strings (arrow function):", sumArrayArrow(stringsArrow));
