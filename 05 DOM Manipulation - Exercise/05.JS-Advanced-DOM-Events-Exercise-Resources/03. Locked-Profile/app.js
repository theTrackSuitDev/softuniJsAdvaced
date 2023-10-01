function lockedProfile() {

    let showMoreButtons = Array.from(document.querySelectorAll('button'));
    showMoreButtons.forEach(button => {
        button.addEventListener('click', toggleProfileInfo);  
    });

    function toggleProfileInfo(event) {
        let hiddenInfoDiv = event.target.parentElement.querySelector('div');
        let checkedRadio = event.target.parentElement.querySelector('input:checked');
        
        let isUnlocked;
        if (checkedRadio.value === 'lock') {
            isUnlocked = false;
        } else {
            isUnlocked = true;
        }

        // let hiddenInfoStyles = window.getComputedStyle(hiddenInfoDiv);

        if (isUnlocked) {
            if (event.target.textContent === 'Show more') {
            // if (hiddenInfoStyles.getPropertyValue('display') === 'none') { 
            // ^ Not passing Judge tests
                hiddenInfoDiv.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                hiddenInfoDiv.style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }
    }
}