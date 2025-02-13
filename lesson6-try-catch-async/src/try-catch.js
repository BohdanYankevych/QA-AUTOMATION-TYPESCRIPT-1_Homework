class SelfError extends Error {
    constructor(message) {
        super(message);
        this.name = 'SelfError';
    }
}

function throwError() {
    throw new Error('Some test error');
}

function example() {
    console.log('some test');
    throwError();
}

try {
    throwSelfError();
    example();
} catch (e) {
    if (e.message !== 'Some test error'){
        throw e;
    }
    console.log('Error:', e.message);
}
console.log('After try-catch block');


function throwSelfError(){
    throw new SelfError('Self test error');
}

