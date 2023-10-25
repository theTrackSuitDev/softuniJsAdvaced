window.addEventListener("load", solution);

function solution() {
    let employeeElement = document.querySelector("#employee");
    let categoryElement = document.querySelector("#category");
    let urgencyElement = document.querySelector("#urgency");
    let teamElement = document.querySelector("#team");
    let descriptionElement = document.querySelector("#description");

    let addButton = document.querySelector("#add-btn");
    addButton.addEventListener("click", add);

    function add(event) {
        event.preventDefault();
        if (
            employeeElement.value === "" ||
            categoryElement.value === "" ||
            urgencyElement.value === "" ||
            teamElement.value === "" ||
            descriptionElement.value === ""
        ) {
            return;
        }

        let ulPreviewElement = document.querySelector("#preview ul");

        let previewLiElement = document.createElement("li");
        previewLiElement.classList.add("problem-content");
        ulPreviewElement.appendChild(previewLiElement);

        let previewArticle = document.createElement("article");
        previewLiElement.appendChild(previewArticle);

        let employeeParagraph = document.createElement("p");
        employeeParagraph.textContent = `From: ${employeeElement.value}`;
        previewArticle.appendChild(employeeParagraph);

        let categoryParagraph = document.createElement("p");
        categoryParagraph.textContent = `Category: ${categoryElement.value}`;
        previewArticle.appendChild(categoryParagraph);

        let urgencyParagraph = document.createElement("p");
        urgencyParagraph.textContent = `Urgency: ${urgencyElement.value}`;
        previewArticle.appendChild(urgencyParagraph);

        let teamParagraph = document.createElement("p");
        teamParagraph.textContent = `Assigned to: ${teamElement.value}`;
        previewArticle.appendChild(teamParagraph);

        let descriptionParagraph = document.createElement("p");
        descriptionParagraph.textContent = `Description: ${descriptionElement.value}`;
        previewArticle.appendChild(descriptionParagraph);

        employeeElement.value = "";
        categoryElement.value = "";
        urgencyElement.value = "";
        teamElement.value = "";
        descriptionElement.value = "";
        addButton.disabled = true;

        let editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";
        previewLiElement.appendChild(editButton);

        let continueButton = document.createElement("button");
        continueButton.classList.add("continue-btn");
        continueButton.textContent = "Continue";
        previewLiElement.appendChild(continueButton);

        editButton.addEventListener("click", edit);
        continueButton.addEventListener("click", continueF);
    }

    function edit() {
        let parElements = Array.from(document.querySelectorAll("#preview p"));

        employeeElement.value = parElements[0].textContent.split(": ")[1];
        categoryElement.value = parElements[1].textContent.split(": ")[1];
        urgencyElement.value = parElements[2].textContent.split(": ")[1];
        teamElement.value = parElements[3].textContent.split(": ")[1];
        descriptionElement.value = parElements[4].textContent.split(": ")[1];
        addButton.disabled = false;

        document.querySelector("#preview li").remove();
    }

    function continueF() {
        let pendingUl = document.querySelector("#pending ul");
        let pendingLi = document.querySelector("#preview li");
        pendingUl.appendChild(pendingLi);

        let buttons = Array.from(pendingLi.querySelectorAll("button"));
        buttons.forEach((element) => {
            element.remove();
        });

        let resolveButton = document.createElement("button");
        resolveButton.classList.add("resolve-btn");
        resolveButton.textContent = "Resolved";
        pendingLi.appendChild(resolveButton);

        resolveButton.addEventListener("click", resolve);

        addButton.disabled = false;
    }

    function resolve() {
        let resolveUl = document.querySelector("#resolved ul");
        let resolvedLi = document.querySelector("#pending li");
        resolveUl.appendChild(resolvedLi);

        let resolveButton = resolvedLi.querySelector("button");
        resolveButton.remove();

        let clearButton = document.createElement("button");
        clearButton.classList.add("clear-btn");
        clearButton.textContent = "Clear";
        resolvedLi.appendChild(clearButton);

        clearButton.addEventListener("click", clear);
    }

    function clear() {
        let resolvedLi = document.querySelector("#resolved li");
        resolvedLi.remove();
    }
}
