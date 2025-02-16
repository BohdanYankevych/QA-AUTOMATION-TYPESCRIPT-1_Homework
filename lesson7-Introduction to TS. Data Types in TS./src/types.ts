const num = 1;

let num2: number;
num2 = 2;
num2 = 3;

console.log(num, num2);

let str = 'Hello';
str = 'World';
console.log(str);

const obj1 = {
    a: 1,
    b: 'Hello'
};

obj1.a = 2;
console.log(obj);

const obj2: Record<string, number | string> = {};
obj2.a = 1;
obj2.b = 'some string';
obj2.c = '';
console.log(obj2);

const arr = [1, 2, 3];
console.log(arr.sort((a, b) => a - b));

let union: 'loaded' | 'loading' | 'called';
union = 'loaded';
union = 'loading';
console.log(union);

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right);


const context: Record<string, Direction> = {
    up: Direction.Up
};
console.log(context);
