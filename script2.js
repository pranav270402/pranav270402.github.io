const display = document.getElementById("display");
let lastInputWasOperator = false;
let lastInputWasResult = false;

function appendToDisplay(input) {
    // Check if the last input was a result
    if (lastInputWasResult) {
        clearDisplay(); // Clear the display before appending new input
        lastInputWasResult = false; // Reset the flag
    }

    // Check if the input is an operator
    if (isOperator(input)) {
        if (!lastInputWasOperator) {
            display.value += input;
            lastInputWasOperator = true;
        } else {
            // Replace the last operator with the new one
            display.value = display.value.slice(0, -1) + input;
        }
    } else {
        display.value += input;
        lastInputWasOperator = false;
    }
}

function clearDisplay() {
    display.value = "";
    lastInputWasOperator = false;  // Reset last input flag
}

function calculate() {
    try {
        display.value = eval(display.value);
        lastInputWasResult = true; // Set flag indicating last input was a result
    } catch (error) {
        display.value = 'Error';
    }
    lastInputWasOperator = false;  // Reset last input flag
}

// Function to check if a character is an operator
function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

// Example event listeners for number and operator buttons
document.getElementById('btn1').addEventListener('click', () => appendToDisplay('1'));
document.getElementById('btnPlus').addEventListener('click', () => appendToDisplay('+'));
// Repeat similar listeners for other numbers and operators
