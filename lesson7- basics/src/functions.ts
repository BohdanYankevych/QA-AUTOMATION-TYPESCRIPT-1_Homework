
function sumArray1(arr: number[] | string[]): unknown {
    if (arr.every(item => typeof item === 'number')) {

        return (arr as number[]).reduce((sum, num) => sum + num, 0);
    } else if (arr.every(item => typeof item === 'string')) {

        return (arr as string[]).join('');
    }
}

const numbersArray1: number[] = [1, 2, 3, 4, 5];
const stringsArray1: string[] = ['Type', 'Script', ' ', 'is', ' ', 'cool!'];

console.log('Sum of numbers:', sumArray1(numbersArray1));
console.log('Concatenation of strings:', sumArray1(stringsArray1));
