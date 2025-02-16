console.log('before start');


function synchronousFunction() {
    console.log('synchronous function start');
    for (let i = 0; i < 5000; i++) {
        //Simulate a time-consuming task
        let sum = 0;
        for (let j = 0; j < 5000; j++) {
            sum += j;
        }
    }
    console.log('synchronous function and');
}

//synchronousFunction();
const promise = new Promise((resolve) => {
    synchronousFunction();
    resolve();
});
promise.then(() => {
    console.log('promise completed');
});

console.log('after start');
