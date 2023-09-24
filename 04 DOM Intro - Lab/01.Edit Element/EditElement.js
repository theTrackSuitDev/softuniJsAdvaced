function editElement(reference, match, replace) {
    let text = reference.textContent;

    while (text.includes(match)) {
        text = text.replace(match, replace);
    }

    reference.textContent = text;
}