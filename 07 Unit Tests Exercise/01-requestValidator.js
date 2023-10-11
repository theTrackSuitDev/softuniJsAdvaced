function requestValidator(object) {
    let inputObj = { ...object };

    let objMethod = inputObj.method;
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    if (
        !validMethods.includes(objMethod) ||
        !inputObj.hasOwnProperty("method")
    ) {
        throw new Error("Invalid request header: Invalid Method");
    }

    let objUri = inputObj.uri;
    let uriPattern = /^[a-z0-9.]+$|^[\*]{1}$/g;
    if (!uriPattern.exec(objUri) || !inputObj.hasOwnProperty("uri")) {
        throw new Error("Invalid request header: Invalid URI");
    }

    let objVersion = inputObj.version;
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    if (
        !validVersions.includes(objVersion) ||
        !inputObj.hasOwnProperty("version")
    ) {
        throw new Error("Invalid request header: Invalid Version");
    }

    let objMessage = inputObj.message;
    let messagePattern = /^[^\<\>\\\&\'\"]*$/g;
    if (
        !messagePattern.exec(objMessage) ||
        !inputObj.hasOwnProperty("message")
    ) {
        console.log(messagePattern.exec(objMessage));
        throw new Error("Invalid request header: Invalid Message");
    }

    return inputObj;
}

console.log(
    requestValidator({
        method: "POST",
        uri: "home.bash",
        message: "rm -rf /*",
    })
);