const sumArray = (arr: number[] | string[]): number | string => {
    if (arr.every(item => typeof item === 'number')) {
        return (arr as number[]).reduce((sum, num) => sum + num, 0);
    } else if (arr.every(item => typeof item === 'string')) {
        return (arr as string[]).join('');
    } else {
        throw new Error('Array must contain either only numbers or only strings.');
    }
};

const numbersArray: number[] = [10, 20, 30, 40, 50];
const stringsArray: string[] = ['I', ' ', 'love', ' ', 'TypeScript', '!'];

console.log('Sum of numbers:', sumArray(numbersArray));
console.log('Concatenation of strings:', sumArray(stringsArray));
