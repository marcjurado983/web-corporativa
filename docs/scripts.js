document.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".js-cookie-banner");
    var acceptButton = document.querySelector(".cookie-accept");
    var declineButton = document.querySelector(".cookie-decline");
    if (!banner || !acceptButton || !declineButton) {
        return;
    }

    if (!localStorage.getItem("foodlogisticCookieConsent")) {
        banner.classList.add("show");
    }

    acceptButton.addEventListener("click", function () {
        localStorage.setItem("foodlogisticCookieConsent", "accepted");
        banner.classList.remove("show");
    });

    declineButton.addEventListener("click", function () {
        localStorage.setItem("foodlogisticCookieConsent", "rejected");
        banner.classList.remove("show");
    });
});
