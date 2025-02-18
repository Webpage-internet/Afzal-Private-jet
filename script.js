window.onload = function() {
    let jetImage = document.getElementById("jetImage");

    // Jet lands when the website loads
    setTimeout(() => {
        jetImage.classList.add("landing");
    }, 500);
};

function takeoff() {
    let jetImage = document.getElementById("jetImage");
    let message = document.getElementById("welcomeMessage");

    // Make the jet take off
    setTimeout(() => {
        jetImage.classList.add("takeoff");
    }, 1000);

    // Show welcome message after takeoff
    setTimeout(() => {
        message.style.display = "block";
    }, 3000);
}