// Get the button element
let btn = document.getElementById('btn');

// Add an event listener for the 'click' event
btn.addEventListener('click', async function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Get the user input values
    let text = document.getElementById('text').value;
    let delay = parseInt(document.getElementById('delay').value, 10);

    // Check if the delay is a valid number
    if (isNaN(delay) || delay < 0) {
        document.getElementById('output').innerText = 'Please enter a valid delay in milliseconds.';
        return;
    }

    // Define a function that returns a Promise that resolves after a certain amount of time
    const delayFunction = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Display a loading message
    document.getElementById('output').innerText = 'Loading...';

    // Wait for the promise to resolve
    await delayFunction(delay);

    // Display the entered text (or a default message if no text was entered)
    document.getElementById('output').innerText = text || 'No text provided.';
});