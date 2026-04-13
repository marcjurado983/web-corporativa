document.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".js-cookie-banner");
    var acceptButton = document.querySelector(".cookie-accept");
    if (!banner || !acceptButton) {
        return;
    }

    if (!localStorage.getItem("foodlogisticCookieConsent")) {
        banner.classList.add("show");
    }

    acceptButton.addEventListener("click", function () {
        localStorage.setItem("foodlogisticCookieConsent", "accepted");
        banner.classList.remove("show");
    });
});
