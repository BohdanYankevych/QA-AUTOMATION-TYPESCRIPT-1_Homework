export type Person = {
    firstName: string;
    lastName: string;
    yearsOfBirdth: number;
};
const person: Partial<Person> = {};

person.firstName = 'John';
person.lastName = 'Doe';
person.yearsOfBirdth = 1990;

console.log(person);

type State = 'loaded' | 'loading' | 'error';
let state: State;
state = 'loading';
state = 'loaded';

const state2 = 'error' as State;

console.log(state, state2);

type inputArrays = string[] | number[];
type inputArray = (string | number)[];

const input1: inputArrays = ['a', 'b', 'c'];
const input2: inputArray = ['a', 'b', 'c', 5];

console.log(input1, input2);