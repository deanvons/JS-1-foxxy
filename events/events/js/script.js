// Function expressions
// Function assigned to a variable
const someFunction = function (){
    console.log("hello I am hesh");
}

saySomethingFunction();


// Normal function of JS
function saySomethingFunction (){
    console.log("hello Truls");
}


// Q2

// addEventListener
// select the .btn

const button = document.querySelector(".btn");

console.log(button);

// way 1

button.addEventListener("click", function (){
    console.log("you clicked on me omg!! ");
});

// way 2

button.onclick = function (event){
    console.log(event.target.value);
    console.log(this.value);
}

// way 3

// onKeyDown // the event will trigger when you press on
// onKeyUp // the event will trigger when you release the key
// the onKeyPress

// onKeyDown onKeyUp NO ONE IS USING THEM ANYMORE AND onKeyPress

const myFirstNameInput = document.querySelector("#firstName");

console.log(myFirstNameInput);

const handleKeyPress = function (){
    console.log("a key is pressed ");
    console.log(this.value);
    console.log(event.target.value);
}

myFirstNameInput.addEventListener("keydown", handleKeyPress);

// Q4 hover event (detecting hover)

const theHoverBtn = document.querySelector(".pet-btn");

const handleMouseOver = function (event){
    console.log("event.target.dataset.animal: ", event.target.value);
    event.target.style.backgroundColor = "red";
}

theHoverBtn.addEventListener("mouseover", handleMouseOver);

const berken = function (){
    theHoverBtn.style.backgroundColor = "blue";
    theHoverBtn.style.color = "yellow";
}


theHoverBtn.addEventListener("mouseout", berken);