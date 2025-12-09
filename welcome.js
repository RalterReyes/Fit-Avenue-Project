window.addEventListener("DOMContentLoaded", function () {
    const welcomeContainer = document.createElement("div");
    welcomeContainer.id = "welcome-banner";

    welcomeContainer.innerHTML = `
        <h1>Welcome to Fit Avenue!</h1>
        <h2>Where you build a stronger you!</h2>
    `;

    document.body.prepend(welcomeContainer);
});
