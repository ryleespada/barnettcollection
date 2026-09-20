const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");
const findMatchButton = document.getElementById("findMatchButton");

photoInput.addEventListener("change", function () {
    const photo = photoInput.files[0];

    if (!photo) {
        return;
    }

    const photoURL = URL.createObjectURL(photo);

    photoPreview.src = photoURL;
    photoPreview.style.display = "block";

    findMatchButton.disabled = false;
});

findMatchButton.addEventListener("click", async function () {
    const detectedLocation = document.getElementById("detectedLocation");

    detectedLocation.textContent = "Contacting backend...";

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbw4Bjtw9X2W2av06pTdpkuSWhd3EVdxGG-gFpm4-jJgpMxaIC2NRAbDAYnKzcl8-rXntg/exec");

        const message = await response.text();

        detectedLocation.textContent = message;
    } catch (error) {
        detectedLocation.textContent = "Could not contact backend.";
        console.error(error);
    }
});
