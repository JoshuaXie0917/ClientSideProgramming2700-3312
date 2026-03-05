Store Code Review
Project Overview

This project is a simple grocery store web page.
Users enter quantities for items.
JavaScript calculates the total price and prints a receipt.

The project uses:

HTML for page structure

CSS for layout and style

JavaScript for calculations and interaction

Professional Improvement
Problem

The original HTML uses inline JavaScript events like onclick, oninput, and onload.

Example:

<button onclick="calculateTotal()">Calculate Total</button>

This mixes HTML and JavaScript in the same place.

Why It Matters

HTML should handle structure.
JavaScript should handle behavior.

Separating them makes the code cleaner and easier to maintain.

Improved Code

HTML:

<button id="btnCalc">Calculate Total</button>

JavaScript:

document.getElementById("btnCalc").addEventListener("click", calculateTotal);

Now JavaScript controls the events, not the HTML.

What I Learned

I learned how to read and understand existing code.
I learned how HTML, CSS, and JavaScript work together.
I also learned how to review code and suggest improvements.