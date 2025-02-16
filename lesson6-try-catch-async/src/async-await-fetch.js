
fetch('https://catfact.ninja/docs/api-docs.json')
    .then(response =>{
        // console.log('response:', response);
        return response.json();
    })
    .then(body => console.log('body:', body))
    .catch(body => console.log('error:', body))
    .finally(() => console.log('finally'));

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log('response:', response);

    const json = await response.json();
    console.log('body:', json);

    return json;

}
// .then((response) => response.json())
// .then((data) => {
//     if (data) {
//         handleData(data);
//     }
// })
// .catch((error) => {
//     console.error('Error fetching data:', error);
// });


async function handleData() {
    const data = await getData();
    console.log('Data:', data);
}
//handleData();
(async () => {
    console.log('before start');

    await handleData();

    console.log('after start');
})();
