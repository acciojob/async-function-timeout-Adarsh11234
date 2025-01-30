document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text");
  const delayInput = document.getElementById("delay");
  const button = document.getElementById("btn");
  const outputDiv = document.getElementById("output");

  async function displayMessage() {
    const text = textInput.value.trim();
    const delay = parseInt(delayInput.value);

    if (!text || isNaN(delay) || delay < 0) {
      alert("Please enter valid text and delay.");
      return;
    }

    outputDiv.textContent = "Waiting...";

    await new Promise((resolve) => setTimeout(resolve, delay));

    outputDiv.textContent = text;
  }

  button.addEventListener("click", displayMessage);
});
