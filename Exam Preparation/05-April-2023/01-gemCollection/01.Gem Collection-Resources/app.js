window.addEventListener("load", solve);

function solve() {
    let nameElement = document.querySelector("#gem-name");
    let colorElement = document.querySelector("#color");
    let caratElement = document.querySelector("#carats");
    let priceElement = document.querySelector("#price");
    let typeElement = document.querySelector("#type");

    let addButton = document.querySelector("#add-btn");
    addButton.addEventListener("click", add);

    function add(event) {
        event.preventDefault();
        if (
            nameElement.value === "" ||
            colorElement.value === "" ||
            caratElement.value === "" ||
            priceElement.value === "" ||
            typeElement.value === ""
        ) {
            return;
        }

        let ulPreviewElement = document.querySelector("#preview-list");

        let previewLiElement = document.createElement("li");
        previewLiElement.classList.add("gem-info");
        ulPreviewElement.appendChild(previewLiElement);

        let previewArticle = document.createElement("article");
        previewLiElement.appendChild(previewArticle);

        let nameHeading = document.createElement("h4");
        nameHeading.textContent = nameElement.value;
        previewArticle.appendChild(nameHeading);

        let colorParagraph = document.createElement("p");
        colorParagraph.textContent = `Color: ${colorElement.value}`;
        previewArticle.appendChild(colorParagraph);

        let caratParagraph = document.createElement("p");
        caratParagraph.textContent = `Carats: ${caratElement.value}`;
        previewArticle.appendChild(caratParagraph);

        let priceParagraph = document.createElement("p");
        priceParagraph.textContent = `Price: ${priceElement.value}$`;
        previewArticle.appendChild(priceParagraph);

        let typeParagraph = document.createElement("p");
        typeParagraph.textContent = `Type: ${typeElement.value}`;
        previewArticle.appendChild(typeParagraph);

        nameElement.value = "";
        colorElement.value = "";
        caratElement.value = "";
        priceElement.value = "";
        typeElement.value = "";
        addButton.disabled = true;

        let saveButton = document.createElement("button");
        saveButton.classList.add("save-btn");
        saveButton.textContent = "Save to Collection";
        previewLiElement.appendChild(saveButton);

        let editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit Information";
        previewLiElement.appendChild(editButton);

        let cancelButton = document.createElement("button");
        cancelButton.classList.add("cancel-btn");
        cancelButton.textContent = "Cancel";
        previewLiElement.appendChild(cancelButton);

        saveButton.addEventListener("click", save);
        editButton.addEventListener("click", edit);
        cancelButton.addEventListener("click", cancel);
    }

    function edit() {
        let headindEl = document.querySelector("#preview-list h4");
        let parElements = Array.from(
            document.querySelectorAll("#preview-list p")
        );
        
        nameElement.value = headindEl.textContent;

        colorElement.value = parElements[0].textContent.split(": ")[1];
        caratElement.value = parElements[1].textContent.split(": ")[1];
        priceElement.value = parElements[2].textContent.split(": ")[1].slice(0, -1);
        typeElement.value = parElements[3].textContent.split(": ")[1];
        addButton.disabled = false;

        document.querySelector("#preview-list li").remove();
    }

    function save() {
        let collectionUl = document.querySelector('#collection');

        let collectionLi = document.createElement('li');
        collectionUl.appendChild(collectionLi);

        let collectionParagraph = document.createElement('p');
        collectionParagraph.classList.add("collection-item");
        collectionLi.appendChild(collectionParagraph);

        let headindEl = document.querySelector("#preview-list h4");
        let parElements = Array.from(
            document.querySelectorAll("#preview-list p")
        );

        let itemText = `${headindEl.textContent} - ${parElements[0].textContent}/ ${parElements[1].textContent}/ ${parElements[2].textContent}/ ${parElements[3].textContent}`;

        collectionParagraph.textContent = itemText;

        document.querySelector("#preview-list li").remove();
        addButton.disabled = false;
    }

    function cancel() {
        document.querySelector("#preview-list li").remove();
        addButton.disabled = false;
    }
}