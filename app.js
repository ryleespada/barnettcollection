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
