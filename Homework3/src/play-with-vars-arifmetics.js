function playWithVars() {
    const a = 1;
    let b = 2;
    b = 3;
    let c = 'test string';

    let d;
    d = 4;

    console.log(a, b, c, d);

    const booleanVar = true;
    const undefinedVar = undefined;

    console.log(booleanVar, undefinedVar);

    const obj = {
        key: 'value',
        key1: 'value1'
    };
    console. log(obj);

    return obj;

}

playWithVars();

console.log('\n' + playWithVars());
