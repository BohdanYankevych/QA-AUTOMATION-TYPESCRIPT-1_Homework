// class SelfError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'SelfError';
//     }
// }

// function throwError() {
//     throw new Error('Some test error');
// }

// function example() {
//     console.log('some test');
//     throwError();
// }

// try {
//     throwSelfError();
//     example();
// } catch (e) {
//     if (e.message !== 'Some test error'){
//         throw e;
//     }
//     console.log('Error:', e.message);
// }
// console.log('After try-catch block');


// function throwSelfError(){
//     throw new SelfError('Self test error');
// }

//Д/З

const invalidUrl = 'https://jsonplaceholder.typicode.com/non-existent';
const backupUrl = 'https://jsonplaceholder.typicode.com/todos';

async function fetchDataWithFallback() {
    try {
        const response = await fetch(invalidUrl);

        if (!response.ok) {
            throw new Error(`Primary resource failed with status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data from primary resource:', data);

    } catch (primaryError) {
        console.warn('Primary request failed, trying backup...');
        console.error('Primary error:', primaryError); // Логування помилки

        try {
            const backupResponse = await fetch(backupUrl);

            if (!backupResponse.ok) {
                throw new Error(`Backup resource failed with status: ${backupResponse.status}`);
            }

            const backupData = await backupResponse.json();
            console.log('Data from backup resource:', backupData);

        } catch (secondaryError) {
            console.error('Backup error:', secondaryError); // Логування помилки
            throw new Error('Both primary and backup requests failed. Please try again later.');
        }
    }
}

fetchDataWithFallback();
