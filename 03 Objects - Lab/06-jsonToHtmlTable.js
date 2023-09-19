function jsonToHtml(input) {
    let inputArrayOfObjects = JSON.parse(input);
    let resultArray = [];

    resultArray.push("<table>");

    let headings = Object.keys(inputArrayOfObjects[0]);
    let headingsArray = [];
    headings.forEach((element) => {
        let currentHeading = `<th>${element}</th>`;
        headingsArray.push(currentHeading);
    });

    resultArray.push(`    <tr>${headingsArray.join("")}</tr>`);

    for (const obj of inputArrayOfObjects) {
        let entriesArray = [];
        let values = Object.values(obj);
        values.forEach((element) => {
            let entry = `<td>${escapeHtml(element)}</td>`;
            entriesArray.push(entry);
        });
        resultArray.push(`    <tr>${entriesArray.join("")}</tr>`);
    }

    resultArray.push("</table>");
    console.log(resultArray.join("\n"));

    function escapeHtml(value) {
        if (typeof value === "string") {
            return value
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/ /g, "&nbsp;");
        }
        
        return value;
    }
}

jsonToHtml(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);
