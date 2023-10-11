function notify(message) {
    let notificationDiv = document.querySelector("#notification");
    notificationDiv.textContent = message;
    notificationDiv.style.display = "block";

    notificationDiv.addEventListener('click', hide);

    function hide() {
        notificationDiv.style.display = "none";
    }
}
