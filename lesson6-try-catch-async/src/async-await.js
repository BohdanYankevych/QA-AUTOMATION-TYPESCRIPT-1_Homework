const apiUrlAsync = 'https://jsonplaceholder.typicode.com/users';

async function fetchDataWithAsyncAwait(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data received:', data);
        processJsonDataAsync(data);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

function processJsonDataAsync(data) {
    console.log('Processing data...');
    data.forEach((item) => {
        console.log(`User ID: ${item.id}, Name: ${item.name}`);
    });
}


//fetchDataWithAsyncAwait(apiUrlAsync);
(async () => {
    await fetchDataWithAsyncAwait(apiUrlAsync);
})();
