// script.js
document.addEventListener("DOMContentLoaded", function () {
    const musicPlayer = document.getElementById("musicPlayer");
    const movingImage = document.getElementById("movingImage");
    const movingImageContainer = document.getElementById("movingImageContainer");

    // Set initial position
    let x = 0;
    let deltaX = 12210;
    const containerWidth = movingImageContainer.offsetWidth;
    const imageWidth = movingImage.width;

    // Move image horizontally and bounce back
    function moveImage() {
        x += deltaX;

        if (x >= containerWidth - imageWidth || x <= 0) {
            deltaX = -deltaX;
        }

        movingImage.style.transform = `translateX(${x}px)`;

        requestAnimationFrame(moveImage);
    }

    // Event listener for audio play
    musicPlayer.addEventListener("play", function () {
        // Start moving the image when the music starts playing
        moveImage();
    });

    // Set the container size to match the image size
    movingImageContainer.style.width = imageWidth + "px";
});
// script.js
function navigateToPoemPage() {
    console.log("Navigating to poem.html");
    window.location.href = "poem.html";
}

