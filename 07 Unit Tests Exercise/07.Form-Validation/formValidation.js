function validate() {
    let companyFieldEl = document.querySelector("#companyInfo");
    let companyNumberField = document.querySelector("#companyNumber");
    let companyCheckBox = document.querySelector("#company");
    companyCheckBox.checked = false;
    companyCheckBox.addEventListener("change", showField);
    function showField() {
        if (companyCheckBox.checked) {
            companyFieldEl.style.display = "block";
        } else {
            companyNumberField.value = null;
            companyFieldEl.style.display = "none";
        }
    }

    let submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", checkFields);
    function checkFields(event) {
        event.preventDefault();
        let allIsValid = true;

        let userNameInputEl = document.querySelector("#username");
        let userNamePattern = /^[a-zA-Z0-9]{3,20}$/g;
        if (
            userNamePattern.exec(userNameInputEl.value) === null ||
            userNameInputEl.value.length == 0
        ) {
            allIsValid = false;
            userNameInputEl.style.borderColor = "red";
        } else {
            userNameInputEl.style.borderColor = "";
        }

        let passInputEl = document.querySelector("#password");
        let confirmPassInputEl = document.querySelector("#confirm-password");
        let passPattern = /^[\w]{5,15}$/g;

        if (!passPattern.exec(passInputEl.value) || confirmPassInputEl.value != passInputEl.value) {
            allIsValid = false;
            passInputEl.style.borderColor = 'red';
            confirmPassInputEl.style.borderColor = 'red';
        } else {
            passInputEl.style.borderColor = '';
            confirmPassInputEl.style.borderColor = '';
        }

        let emailInputField = document.querySelector("#email");
        let emailPattern = /^.*@.*\..*$/g;
        if (
            emailPattern.exec(emailInputField.value) === null ||
            emailInputField.value.length == 0
        ) {
            allIsValid = false;
            emailInputField.style.borderColor = "red";
        } else {
            emailInputField.style.borderColor = "";
        }

        if (companyCheckBox.checked) {
            if (
                companyNumberField.value < 1000 ||
                companyNumberField.value > 9999
            ) {
                allIsValid = false;
                companyNumberField.style.borderColor = "red";
            } else {
                companyNumberField.style.borderColor = "";
            }
        }

        let validDivEl = document.querySelector("#valid");
        if (allIsValid) {
            validDivEl.style.display = "block";
        } else {
            validDivEl.style.display = "none";
        }
    }
}