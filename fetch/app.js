// you will be working on arrays and objects mostly

// data
let todos = []

let todo = fetch('https://jsonplaceholder.typicode.com/todos')
.then(function (httpResponse) {
    console.log(httpResponse);
    //console.log(httpResponse)
    // extract the data (using the json function)
    return httpResponse.json()
})
.then(function(todoResult) {
    // do something with the data (store it in the todos variable)
    todos = todoResult;
});

// Show it to the user

//post request. Still gonna use fetch. 
// delete request. Asks the api to delete the data thats not in use.

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/todos")
.then(function (httpResponse){
})

// go fetch I promise to forward to. then

// await going to fetch
// forward to the next line


fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (httpResponse){
        console.log(httpResponse)
        return httpResponse.json();
    })
    .then((data) => console.log(data));

    async function getTodos(){
        let httpResponse = await fetch("https://jsonplaceholder.typicode.com/todos")
        let data = await httpResponse.json()
        console.log(data);
    }