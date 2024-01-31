// data
// you will be working on arrays and objects mostly

// data
let todos = []

let todo = fetch('https://jsonplaceholder.typicode.com/users')
.then(function (httpResponse) {
    console.log(httpResponse);
    //console.log(httpResponse)
    // extract the data
    return httpResponse.json()
})
.then(function(todoResult) {
    todos = todoResult;
});

console.log("other stuff");

// Show it to the user