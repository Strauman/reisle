let proxyURL = '/proxy';

        
let correctAnswer = '';

const loading = document.getElementById('loading');

// Show loading animation
loading.style.display = 'block';

fetch(proxyURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(response => response.json())
.then(data => {
    const iframe = document.getElementById('content');
    const iframeDoc = iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(data.html);
    iframeDoc.close();

    // Store the correct answer
    correctAnswer = data.removedWord;
    loading.style.display = 'none';
})
.catch(error => {
    console.error('Error:', error);
    loading.innerHTML = 'En feil oppstod.';
});

// Function to handle guess
function handleGuess() {
    const guess = document.getElementById('guess-input').value;
    const result = document.getElementById('result');

    // Check the guess against the correct answer
    if (guess.toLowerCase() === correctAnswer) {
        result.textContent = 'Korrekt!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Feil. Prøv igjen.';
        result.style.color = 'red';
    }

    // Clear guess input
    document.getElementById('guess-input').value = '';

    // Hide result after 3 seconds
    setTimeout(() => {
        result.style.opacity = '0';
    }, 3000);

    // Show result when a new guess is submitted
    result.style.opacity = '1';
}

// Add event listener to the submit button
document.getElementById('submit-button').addEventListener('click', handleGuess);

// Add event listener for 'Enter' key
document.getElementById('guess-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        handleGuess();
    }
});