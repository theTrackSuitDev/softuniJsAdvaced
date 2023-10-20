window.addEventListener("load", solve);

function solve() {
    let modelInputElement = document.querySelector("#car-model");
    let yearInputElement = document.querySelector("#car-year");
    let partNameElement = document.querySelector("#part-name");
    let partNumberElement = document.querySelector("#part-number");
    let conditionElement = document.querySelector("#condition");

    let nextButton = document.querySelector("#next-btn");
    nextButton.addEventListener("click", next);

    function next(event) {
        event.preventDefault();
        if (
            modelInputElement.value === "" ||
            yearInputElement.value === "" ||
            yearInputElement.value < 1980 ||
            yearInputElement.value > 2023 ||
            partNameElement.value === "" ||
            partNumberElement.value === "" ||
            conditionElement.value === ""
        ) {
            return;
        }

        let partInfoUlElement = document.querySelector("#part-info ul");

        let completeImg = document.querySelector("#complete-img");
        completeImg.style.visibility = 'hidden';
        let completeParagraph = document.querySelector("#complete-text");
        completeParagraph.textContent = "";

        let infoLiElement = document.createElement("li");
        infoLiElement.classList.add("part-content");
        partInfoUlElement.appendChild(infoLiElement);

        let infoArticle = document.createElement("article");
        infoLiElement.appendChild(infoArticle);

        let modelParagraph = document.createElement("p");
        modelParagraph.textContent = `Car Model: ${modelInputElement.value}`;
        infoArticle.appendChild(modelParagraph);
         
        let yearParagraph = document.createElement("p");
        yearParagraph.textContent = `Car Year: ${yearInputElement.value}`;
        infoArticle.appendChild(yearParagraph);
         
        let partNameParagraph = document.createElement("p");
        partNameParagraph.textContent = `Part Name: ${partNameElement.value}`;
        infoArticle.appendChild(partNameParagraph);
         
        let partNumberParagraph = document.createElement("p");
        partNumberParagraph.textContent = `Part Number: ${partNumberElement.value}`;
        infoArticle.appendChild(partNumberParagraph);
         
        let conditionParagraph = document.createElement("p");
        conditionParagraph.textContent = `Condition: ${conditionElement.value}`;
        infoArticle.appendChild(conditionParagraph);

        modelInputElement.value = "";
        yearInputElement.value = "";
        partNameElement.value = "";
        partNumberElement.value = "";
        conditionElement.value = "";
        nextButton.disabled = true;

        let editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";
        infoLiElement.appendChild(editButton);

        let continueButton = document.createElement("button");
        continueButton.classList.add("continue-btn");
        continueButton.textContent = "Continue";
        infoLiElement.appendChild(continueButton);

        editButton.addEventListener("click", edit);
        continueButton.addEventListener("click", continueF);
    }

    function edit() {
        let parElements = Array.from(
            document.querySelectorAll("#part-info p")
        );

        modelInputElement.value = parElements[0].textContent.split(": ")[1];
        yearInputElement.value = parElements[1].textContent.split(": ")[1];
        partNameElement.value = parElements[2].textContent.split(": ")[1];
        partNumberElement.value = parElements[3].textContent.split(": ")[1];
        conditionElement.value = parElements[4].textContent.split(": ")[1];
        nextButton.disabled = false;

        document.querySelector("#part-info ul li").remove();
    }

    function continueF() {
        let infoLiElement = document.querySelector("#part-info ul li");

        let buttons = Array.from(infoLiElement.querySelectorAll("button"));
        buttons.forEach((element) => {
            element.remove();
        });

        let confirmButton = document.createElement("button");
        confirmButton.classList.add("confirm-btn");
        confirmButton.textContent = "Confirm";
        infoLiElement.appendChild(confirmButton);

        let cancelButton = document.createElement("button");
        cancelButton.classList.add("cancel-btn");
        cancelButton.textContent = "Cancel";
        infoLiElement.appendChild(cancelButton);

        confirmButton.addEventListener("click", confirmF);
        cancelButton.addEventListener("click", cancel);

        let ulConfirmElement = document.querySelector("#confirm-order ul");
        ulConfirmElement.appendChild(infoLiElement);
    }

    function confirmF() {
        let confirmLiElement = document.querySelector("#confirm-order ul li");
        confirmLiElement.remove();
        nextButton.disabled = false;

        let completeImg = document.querySelector("#complete-img");
        completeImg.style.visibility = 'visible';
        let completeParagraph = document.querySelector("#complete-text");
        completeParagraph.textContent = "Part is Ordered!";
    }

    function cancel() {
        document.querySelector("#confirm-order ul li").remove();
        nextButton.disabled = false;
    }
}