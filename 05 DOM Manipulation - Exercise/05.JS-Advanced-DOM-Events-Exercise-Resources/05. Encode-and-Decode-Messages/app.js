function encodeAndDecodeMessages() {
    let buttonElements = Array.from(document.querySelectorAll('button'));
    let encodeButton = buttonElements[0];
    let decodeButton = buttonElements[1];
    
    let messageInputElement = document.querySelector('textarea[placeholder="Write your message here..."]');
    let messageOutputElement = document.querySelector('textarea[placeholder="No messages..."]');

    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    function encode() {
        let newMessage = messageInputElement.value;
        if (newMessage.length < 1) {
            return;
        }

        let encodedMessage = '';
        for (let i = 0; i < newMessage.length; i++) {
            let ascii = newMessage.charCodeAt(i);
            let newChar = String.fromCharCode(ascii + 1);
            encodedMessage += newChar;            
        }
        
        messageOutputElement.value = encodedMessage;
        messageInputElement.value = null;
    }

    function decode() {
        let encodedMessage = messageOutputElement.value;
        let decodedMessage = '';
        for (let i = 0; i < encodedMessage.length; i++) {
            let ascii = encodedMessage.charCodeAt(i);
            let newChar = String.fromCharCode(ascii - 1);
            decodedMessage += newChar;            
        }

        messageOutputElement.value = decodedMessage;
    }
}