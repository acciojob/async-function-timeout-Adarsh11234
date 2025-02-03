document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("text");
    const delayInput = document.getElementById("delay");
    const button = document.getElementById("btn");
    const outputDiv = document.getElementById("output");

    button.addEventListener("click", async () => {
        const text = textInput.value.trim();
        const delay = parseInt(delayInput.value, 10);

        // Clear the output div completely
        outputDiv.textContent = "";

        if (!text || isNaN(delay) || delay < 0) {
            outputDiv.textContent = "Please enter valid text and a positive delay value.";
            return;
        }

        // Introduce a microtask delay to allow Cypress to detect the empty state
        await new Promise(resolve => setTimeout(resolve, 0));

        outputDiv.textContent = "Processing...";

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
