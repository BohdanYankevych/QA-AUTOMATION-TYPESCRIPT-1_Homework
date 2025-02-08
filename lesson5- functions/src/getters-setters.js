export class SameClass {
    #privateName;
    constructor(name){
        this.#privateName = name;
        this.fullName = this.#privateName + ' Doe';
    }

    get name(){
        return this.#privateName;
    }

    set name(name){
        if(!name){
            throw new Error('Name is required');
        } else {
            this.#privateName = name;
        }

    }

    get fullNameGetter() {
        return this.#privateName + ' Doe';
    }
}

const sameClass = new SameClass('John');
console.log(sameClass.name);
console.log(sameClass.fullName);

sameClass.name = 'Curt';
console.log(sameClass.name);
console.log(sameClass.fullNameGetter);

console.log('_----------------------------------')

// Домашнє завдання

const person = {
    _firstName: "John",
    _lastName: "Doe",
    _age: 25,

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },

    set fullName(name) {
        const parts = name.split(" ");
        if (parts.length === 2) {
            this._firstName = parts[0];
            this._lastName = parts[1];
        } else {
            console.log("Invalid full name format");
        }
    },

    get age() {
        return this._age;
    },

    set age(value) {
        if (value > 0) {
            this._age = value;
        } else {
            console.log("Age must be a positive number");
        }
    },

    isAdult() {
        return this._age >= 18 ? "Adult" : "Minor";
    }
};

console.log("Full Name:", person.fullName);
person.fullName = "Jane Smith";
console.log("Updated Full Name:", person.fullName);

console.log("Age:", person.age);
person.age = 30;
console.log("Updated Age:", person.age);
console.log("Is Adult?", person.isAdult());
