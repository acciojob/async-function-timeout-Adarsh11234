let textInput = document.getElementById('text');
let delayInput = document.getElementById('delay');
let outputDiv = document.getElementById('output');
let btn = document.getElementById('btn');

btn.addEventListener('click', async function() {
    const text = textInput.value;
    const delay = parseInt(delayInput.value, 10);

    if (!text || isNaN(delay) || delay < 0) {
        outputDiv.textContent = "Please enter valid text and a positive delay value.";
        return;
    }

    outputDiv.textContent = "Processing...";
    await delayFunction(delay);
    outputDiv.textContent = text;
});

async function delayFunction(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}