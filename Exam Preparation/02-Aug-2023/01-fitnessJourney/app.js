window.addEventListener("load", solve);

function solve() {
    let nameInputElement = document.querySelector("#name");
    let emailInputElement = document.querySelector("#email");
    let contactNumInputElement = document.querySelector("#contact-number");
    let preferredClassElement = document.querySelector("#class-type");
    let preferredTimeElement = document.querySelector("#class-time");

    let nextButtonElement = document.querySelector("#next-btn");
    nextButtonElement.addEventListener("click", next);

    function next(event) {
        event.preventDefault();
        if (
            nameInputElement.value === "" ||
            emailInputElement.value === "" ||
            contactNumInputElement.value === "" ||
            preferredClassElement.value === "" ||
            preferredTimeElement.value === ""
        ) {
            return;
        }

        let ulPreviewElement = document.querySelector("#preview-section ul");

        let infoLiElement = document.createElement("li");
        infoLiElement.classList.add("info-item");
        ulPreviewElement.appendChild(infoLiElement);

        let infoArticle = document.createElement("article");
        infoArticle.classList.add("personal-info");
        infoLiElement.appendChild(infoArticle);

        let namePar = document.createElement("p");
        namePar.textContent = nameInputElement.value;
        infoArticle.appendChild(namePar);

        let emailPar = document.createElement("p");
        emailPar.textContent = emailInputElement.value;
        infoArticle.appendChild(emailPar);

        let numberPar = document.createElement("p");
        numberPar.textContent = contactNumInputElement.value;
        infoArticle.appendChild(numberPar);

        let classPar = document.createElement("p");
        classPar.textContent = preferredClassElement.value;
        infoArticle.appendChild(classPar);

        let timePar = document.createElement("p");
        timePar.textContent = preferredTimeElement.value;
        infoArticle.appendChild(timePar);

        let editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";
        infoLiElement.appendChild(editButton);

        let continueButton = document.createElement("button");
        continueButton.classList.add("continue-btn");
        continueButton.textContent = "Continue";
        infoLiElement.appendChild(continueButton);

        nameInputElement.value = "";
        emailInputElement.value = "";
        contactNumInputElement.value = "";
        preferredClassElement.value = "";
        preferredTimeElement.value = "";
        nextButtonElement.disabled = true;

        editButton.addEventListener("click", edit);
        continueButton.addEventListener("click", continueF);
    }

    function edit() {
        let parElements = Array.from(
            document.querySelectorAll("#preview-section p")
        );

        nameInputElement.value = parElements[0].textContent;
        emailInputElement.value = parElements[1].textContent;
        contactNumInputElement.value = parElements[2].textContent;
        preferredClassElement.value = parElements[3].textContent;
        preferredTimeElement.value = parElements[4].textContent;
        nextButtonElement.disabled = false;

        document.querySelector("#preview-section ul li").remove();
    }

    function continueF() {
        let infoLiElement = document.querySelector("#preview-section ul li");
        infoLiElement.classList.remove("info-item");
        infoLiElement.classList.add("continue-info");

        let buttons = Array.from(infoLiElement.querySelectorAll("button"));
        buttons.forEach((element) => {
            element.remove();
        });

        let cancelButton = document.createElement("button");
        cancelButton.classList.add("cancel-btn");
        cancelButton.textContent = "Cancel";
        infoLiElement.appendChild(cancelButton);

        let confirmButton = document.createElement("button");
        confirmButton.classList.add("confirm-btn");
        confirmButton.textContent = "Confirm";
        infoLiElement.appendChild(confirmButton);

        cancelButton.addEventListener("click", cancel);
        confirmButton.addEventListener("click", confirmF);

        let ulConfirmElement = document.querySelector("#confirm-section ul");
        ulConfirmElement.appendChild(infoLiElement);
    }

    function cancel() {
        document.querySelector("#confirm-section ul li").remove();
        nextButtonElement.disabled = false;
    }

    function confirmF() {
        let mainDiv = document.querySelector("#main");
        mainDiv.remove();

        let finalH1 = document.createElement("h1");
        finalH1.setAttribute("id", "thank-you");
        finalH1.textContent =
            "Thank you for scheduling your appointment, we look forward to seeing you!";

        let doneButton = document.createElement("button");
        doneButton.setAttribute("id", "done-btn");
        doneButton.textContent = "Done";

        doneButton.addEventListener("click", done);

        let bodyElement = document.querySelector("#body");
        bodyElement.appendChild(finalH1);
        bodyElement.appendChild(doneButton);
    }

    function done() {
        location.reload();
    }
}