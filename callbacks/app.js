// Four types of functions
// 1st type
function doSomething(someParam){
    console.log("I do something")
    console.log("I do something")
    console.log("I do something")
    console.log("I do something")
    console.log("I do something")
    console.log("I do something")
    console.log("I do something")
    console.log("I do something")

    someParam()

    console.log("I do something")
    console.log("I do something")
}

doSomething(function(){console.log("I am a callback")}) 

// void
doSomething()

//Second type

function doSomethingWithData(someData){
    console.log("I just do something with someData here it is" + someData)
}
// void with some parameters
doSomethingWithData("Some sweet string")

function doSomethingThatReturnsAString(){

    return "This is easy"
}

let result = doSomethingThatReturnsAString() + doSomethingThatReturnsAString()

console.log(result);


function doSomethingThatReturnsSomething(someData){

    return "This is easy" + someData
}

let result2 = doSomethingThatReturnsSomething("ikke sant?" )

console.log(result2);


fetch('https://catfact.ninja/facts', function (response){
    console.log(response);
})