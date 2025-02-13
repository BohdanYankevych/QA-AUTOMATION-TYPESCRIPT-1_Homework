
fetch('https://catfact.ninja/docs/api-docs.json')
    .then(response =>{
        // console.log('response:', response);
        return response.json();
    })
    .then(body => console.log('body:', body))
    .catch(body => console.log('error:', body))
    .finally(() => console.log('finally'));

function getData() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                handleData(data);
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

function handleData(resp) {
    console.log('Data:', resp);
}
getData();
