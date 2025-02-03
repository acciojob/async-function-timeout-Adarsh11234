
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const submitButton = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Function to introduce a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the form submission
async function displayMessageAfterDelay() {
    // Retrieve the user-provided text and delay values
    const text = textInput.value;
    const delayTime = parseInt(delayInput.value, 10);

    if (isNaN(delayTime) || delayTime < 0) {
        outputDiv.textContent = 'Please enter a valid delay.';
        return;
    }

 
    await delay(delayTime);


    outputDiv.textContent = text;
}

// Add an event listener to the submit button
submitButton.addEventListener('click', displayMessageAfterDelay);