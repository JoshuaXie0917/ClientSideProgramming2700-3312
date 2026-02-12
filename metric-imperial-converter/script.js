const valueInput = document.getElementById("valueInput");
const convertBtn = document.getElementById("convertBtn");
const typeSelect = document.getElementById("typeSelect");
const result = document.getElementById("result");
const message = document.getElementById("message");

function convert() {
    const inputValue = Number(valueInput.value);
    const type = typeSelect.value;

    if (isNaN(inputValue)) {
        message.textContent = "";
        message.textContent = "Please enter a valid number.";
        return;
    }


    let outputValue;

    switch (type) {
        case "cToF":
            outputValue = (inputValue * 9 / 5) + 32;
            break;
        case "mToF":
            outputValue = inputValue * 3.28084;
            break;
        case "kgToLbs":
            outputValue = inputValue * 2.20462;
            break;
        case "kmToMiles":
            outputValue = inputValue * 0.621371;
            break;
        case "lToGal":
            outputValue = inputValue * 0.264172;
            break;
        case "cmToInch":
            outputValue = inputValue * 0.393701;
            break;
        case "gToOz":
            outputValue = inputValue * 0.035274;
            break;
        default:
            message.textContent = "Invalid conversion type";
            return;
    }


    result.textContent = `${inputValue} ${type.split("To")[0]} equals ${outputValue.toFixed(2)} ${type.split("To")[1]}`;

}