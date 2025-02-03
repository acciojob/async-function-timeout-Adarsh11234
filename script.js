document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("text");
    const delayInput = document.getElementById("delay");
    const button = document.getElementById("btn");
    const outputDiv = document.getElementById("output");

    button.addEventListener("click", async () => {
        const text = textInput.value.trim();
        const delay = parseInt(delayInput.value, 10);

        // Clear output initially for Cypress test expectations
        outputDiv.textContent = "";
        
        if (!text || isNaN(delay) || delay < 0) {
            outputDiv.textContent = "Please enter valid text and a positive delay value.";
            return;
        }

        outputDiv.textContent = "Processing...";
        outputDiv.offsetHeight; // Force a reflow for Cypress detection

        await delayFunction(delay);

        // Ensure the output div is still present before updating
        if (document.body.contains(outputDiv)) {
            outputDiv.textContent = text;
        }
    });
});

async function delayFunction(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
