function extract(content) {
    let pattern = /\((?<text>[^)]+)[)]/g;

    let textToCheck = document.getElementById(content).textContent;

    let matches = textToCheck.matchAll(pattern);

    let result = [];

    for (const match of matches) {
        result.push(match.groups.text);
    }

    return(result.join('; '));
}