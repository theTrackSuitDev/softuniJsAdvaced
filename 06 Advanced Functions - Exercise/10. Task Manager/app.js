function solve() {
    let taskInputElement = document.querySelector("#task");
    let descriptionInputElement = document.querySelector("#description");
    let dateInputElement = document.querySelector("#date");

    taskInputElement.value = null;
    descriptionInputElement.value = null;
    dateInputElement.value = null;

    let addButtonElement = document.querySelector("#add");
    addButtonElement.addEventListener("click", add);

    function add(event) {
        event.preventDefault();

        if (
            taskInputElement.value.length == 0 ||
            descriptionInputElement.value.length == 0 ||
            dateInputElement.value.length == 0
        ) {
            return;
        }

        let newArticleElement = document.createElement("article");

        let headingElement = document.createElement("h3");
        headingElement.textContent = taskInputElement.value;
        newArticleElement.appendChild(headingElement);

        let descParElement = document.createElement("p");
        descParElement.textContent = `Description: ${descriptionInputElement.value}`;
        newArticleElement.appendChild(descParElement);

        let dateParElement = document.createElement("p");
        dateParElement.textContent = `Due Date: ${dateInputElement.value}`;
        newArticleElement.appendChild(dateParElement);

        let buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("flex");

        let greenButton = document.createElement("button");
        greenButton.classList.add("green");
        greenButton.textContent = "Start";
        greenButton.addEventListener("click", start);

        let redButton = document.createElement("button");
        redButton.classList.add("red");
        redButton.textContent = "Delete";
        redButton.addEventListener("click", deleteFunction);
        
        buttonsDiv.appendChild(greenButton);
        buttonsDiv.appendChild(redButton);
        newArticleElement.appendChild(buttonsDiv);

        let openDivElement = document.querySelector(
            'div[class="wrapper"] section:nth-of-type(2) div:nth-of-type(2)'
        );
        openDivElement.appendChild(newArticleElement);

        taskInputElement.value = null;
        descriptionInputElement.value = null;
        dateInputElement.value = null;
    }

    function start(event) {
        let currentArticle = event.target.parentElement.parentElement;
        let greenButton = currentArticle.querySelector(".green");
        let redButton = currentArticle.querySelector(".red");

        let buttonsDiv = currentArticle.querySelector('div[class="flex"]');
        greenButton.remove();
        redButton.remove();

        let newRedButton = document.createElement("button");
        newRedButton.classList.add("red");
        newRedButton.textContent = "Delete";
        newRedButton.addEventListener("click", deleteFunction);

        let finishButton = document.createElement("button");
        finishButton.classList.add("orange");
        finishButton.textContent = "Finish";
        finishButton.addEventListener("click", finish);

        buttonsDiv.appendChild(newRedButton);
        buttonsDiv.appendChild(finishButton);

        // Altering the buttons instead of deleting them and creating new ones:
        // greenButton.classList.add("red");
        // greenButton.textContent = "Delete";
        // greenButton.removeEventListener("click", start);
        // greenButton.addEventListener("click", deleteFunction);
        // greenButton.classList.remove("green");

        // redButton.classList.add("orange");
        // redButton.textContent = "Finish";
        // redButton.removeEventListener("click", deleteFunction);
        // redButton.addEventListener("click", finish);
        // redButton.classList.remove("red");

        let inProgressDiv = document.querySelector("#in-progress");
        inProgressDiv.appendChild(currentArticle);
    }

    function deleteFunction(event) {
        let currentArticle = event.target.parentElement.parentElement;
        currentArticle.remove();
    }

    function finish(event) {
        let currentArticle = event.target.parentElement.parentElement;
        let buttonsDiv = currentArticle.querySelector('div[class="flex"]');
        buttonsDiv.remove();

        let completeDiv = document.querySelector(
            'div[class="wrapper"] section:last-child div:nth-of-type(2)'
        );
        completeDiv.appendChild(currentArticle);
    }
}