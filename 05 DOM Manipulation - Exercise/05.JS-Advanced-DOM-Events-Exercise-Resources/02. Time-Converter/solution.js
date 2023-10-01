function attachEventsListeners() {
    let buttonElements = Array.from(document.querySelectorAll('input[type="button"]'));
    buttonElements.forEach(button => {
        button.addEventListener('click', convert);

        function convert(event) {
            let currentInputElement = event.target.parentElement.querySelector('input');
            let currentTimeUnit = currentInputElement.id;
            let currentInputValue = Number(currentInputElement.value);

            let dayInputElement = document.querySelector('#days');
            let hourInputElement = document.querySelector('#hours');
            let minuteInputElement = document.querySelector('#minutes');
            let secondInputElement = document.querySelector('#seconds');

            switch (currentTimeUnit) {
                case 'days':
                    hourInputElement.value = currentInputValue * 24;
                    minuteInputElement.value = currentInputValue * 1440;
                    secondInputElement.value = currentInputValue * 86400;
                    break;
                case 'hours':
                    dayInputElement.value = currentInputValue / 24;
                    minuteInputElement.value = currentInputValue * 60;
                    secondInputElement.value = currentInputValue * 3600;
                    break;
                case 'minutes':
                    dayInputElement.value = currentInputValue / 1440;
                    hourInputElement.value = currentInputValue / 60;
                    secondInputElement.value = currentInputValue * 60;
                    break;
                case 'seconds':
                    dayInputElement.value = currentInputValue / 86400;
                    hourInputElement.value = currentInputValue / 3600;
                    minuteInputElement.value = currentInputValue / 60;
                    break;
            
                default:
                    break;
            }      
        }
    });
}