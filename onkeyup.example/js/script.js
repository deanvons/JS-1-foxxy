const firstNameInput = document.querySelector("#first-name");
const formSignupBtn = document.querySelector("#sign-up-BTN");
const firstNameErrorMessage = document.querySelector("first-name-error-message");



firstNameInput.onkeyup = function (event) {
    let firstNameInputValue = event.target.value; 

    if (firstNameInputValue.length >= 5){     
        formSignupBtn.disabled = false;
        firstNameErrorMessage.innerHTML = "Great you have done it";
        firstNameErrorMessage.classList = "success";}
    else {
        formSignupBtn.disabled = true;
        firstNameErrorMessage.innerHTML = 'The chosen name is too short';
        firstNameErrorMessage.classList = "suck"
        }
    }


