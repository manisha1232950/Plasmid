// script.js

// Display element to show current input and result
const display = document.getElementById("display");

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to append values or operators to the display
function append(value) {
    display.value += value;
}

// Function to evaluate the expression
function calculate() {
    try {
        // Use JavaScript eval to calculate result
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
