
document.getElementById('btn').addEventListener('click', async function(event) {
    event.preventDefault(); // Prevent form submission
	
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value, 10);

    if (isNaN(delay) || delay < 0) {
        document.getElementById('output').innerText = 'Please enter a valid delay in milliseconds.';
        return;
    }

    const delayFunction = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    document.getElementById('output').innerText = 'Loading...';

    await delayFunction(delay);

    document.getElementById('output').innerText = text || 'No text provided.';
});

