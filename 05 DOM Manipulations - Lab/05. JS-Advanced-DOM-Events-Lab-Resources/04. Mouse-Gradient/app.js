function attachGradientEvents() {
    let resultElement = document.querySelector('#result');
    let gradientElement = document.querySelector('#gradient');
    gradientElement.addEventListener('mousemove', (event) => {
        let fullWidth = event.target.clientWidth;
        let percentage = Math.floor(event.offsetX / fullWidth * 100);
        resultElement.textContent = `${percentage}%`;
    });    
}