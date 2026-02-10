Metric to Imperial Converter
A simple client-side project that uses HTML, CSS, and JavaScript to convert metric values ​​to imperial units.

Backend Logic Checks
The Purpose of `onclick="add()"`
When a button is clicked, it runs a JavaScript function.
In this project, the button uses `onclick="convert()"` to initiate the calculation.

The Return Value of `document.getElementById().value`
It retrieves the value entered by the user in the input field.
The value is returned as a string.

Why Use the `Number()` Function
The input values ​​are strings. The `Number()` function converts them to real numbers for correct calculations.

Where the result is displayed
JavaScript updates the result <div> using:
result.textContent = ...
This shows the answer instantly on the page.

Conversions Included
    Celsius → Fahrenheit
    Meters → Feet
    Kilograms → Pounds
    Kilometers → Miles
    Liters → Gallons
    Centimeters → Inches
    Grams → Ounces

How to Run
Open index.html in a browser and click Convert.