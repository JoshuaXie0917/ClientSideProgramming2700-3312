// Select the canvas element from the HTML page
const canvas = document.getElementById("canvas");
//Get the 2D drawing context from the canvas
// This is the tool JavaScript uses to draw on the shapes and text on the canvas
const ctx = canvas.getContext("2d");

// Set the canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// These are the possible characters used in the rain effect
const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// This sets the size of the character
// It also helps control the spacing between columns
const fontSize = 18;

// The number of columns depends on the screen width
// Example; if the width is 1800 and the font size is 18, then there are about 100 columns
const columns = Math.floor(canvas.width / fontSize);

// This array stores the current vertical position of each falling character column
let drops = [];

// Give each column a random starting height
// This makes the rain effect look more natural, at the beginning
for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height / fontSize;
}

// This function draws one frame of the animation
function animate() {
    // Draw a transparent black rectangle over the entire canvas 
    // This does not fully erase the old frame
    // It creates the fading trail effect as the characters fall
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text color and font for the characters
    ctx.fillStyle = "lime";
    ctx.font = fontSize + "px monospace";

    // Go through each column one by one
    for (let i = 0; i < drops.length; i++) {
        // Choose a random character from the letters string
        const text = letters.charAt(Math.floor(Math.random() * letters.length));

        // x position  = column index * font size
        // y position  = current drop height * font size
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        // Move the drop down one row
        drops[i]++;

        // The random check stops all columns from resetting at the same time
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
            drops[i] = 0;
        }
    }
    // Ask the browser to run the animate again on the next frame
    requestAnimationFrame(animate);
}
// Start the animation
animate();
// When the browser window changes size, update the canvas size
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
