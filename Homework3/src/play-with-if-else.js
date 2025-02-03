const b1 = true;
const b2 = false;

if(b1 && b2){
    console.log('if worked');
} else {
    console.log('else worked');
}
console.log('___________________________');
if(b1 && b2){
    console.log('if worked');
} else if (b1 || b2) {
    console.log('else if worked');
} else {
    console.log('else worked');
}
console.log('___________________________');

console.log(b1 && b2 ? 'if worked' : 'else worked');

console.log('___________________________');

const a = -1;
const b = a > 0 ? 'positive' : 'negative';
console.log(b);
