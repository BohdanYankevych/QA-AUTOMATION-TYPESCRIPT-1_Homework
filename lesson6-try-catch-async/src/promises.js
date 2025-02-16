const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function fetchDataWithPromises(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log('Data received:', data);
            processJsonData(data);
        })
        .catch((error) => {
            console.error('Error occurred:', error);
        });
}

function processJsonData(data) {
    console.log('Processing data...');
    data.forEach((item) => {
        console.log(`Post ID: ${item.id}, Title: ${item.title}`);
    });
}


fetchDataWithPromises(apiUrl);
