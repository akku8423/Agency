function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function showMessage() {
    document.getElementById("message").innerText =
        "Thank you! We will contact you soon.";
}