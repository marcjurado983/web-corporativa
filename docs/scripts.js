document.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".js-cookie-banner");
    var acceptButton = document.querySelector(".cookie-accept");
    var declineButton = document.querySelector(".cookie-decline");
    if (!banner || !acceptButton) {
        return;
    }

    banner.style.display = "block";
    banner.classList.add("show");

    acceptButton.addEventListener("click", function () {
        banner.classList.remove("show");
    });

    if (declineButton) {
        declineButton.addEventListener("click", function () {
            banner.classList.remove("show");
        });
    }
});
