
function sumArray1(arr: number[] | string[]): number | string {
    if (arr.every(item => typeof item === 'number')) {

        return (arr as number[]).reduce((sum, num) => sum + num, 0);
    } else if (arr.every(item => typeof item === 'string')) {

        return (arr as string[]).join('');
    } else {
        throw new Error('Array must contain either only numbers or only strings.');
    }
}

const numbersArray1: number[] = [1, 2, 3, 4, 5];
const stringsArray1: string[] = ['Type', 'Script', ' ', 'is', ' ', 'cool!'];

console.log('Sum of numbers:', sumArray1(numbersArray1));
console.log('Concatenation of strings:', sumArray(stringsArray1));
