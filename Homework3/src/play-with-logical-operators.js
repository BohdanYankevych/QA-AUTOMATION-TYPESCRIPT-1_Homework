const a = true;
const b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

const c = null;
const d = 2;
const e = c ?? d ?? 4;

console.log(e);

const c1 = null;
const d1 = null;
const e1 = c1 ?? d1 ?? 4;

console.log(e1);
