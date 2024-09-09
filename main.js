/* Funkce, která ukáže hodnotu posuvníku */
function hodnotaPosuvniku(hodnota) {
    document.getElementById('hodnotaVeku').textContent = hodnota;
}

document.getElementById('form-box').addEventListener('submit', function (event) {
    event.preventDefault(); // Zabrání odeslání formuláře klasickým způsobem

    // Získání hodnot z formuláře
    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        feedback: document.getElementById('feedback').value
    };

    // Odeslání dat na server
    fetch('/save-survey', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('responseMessage').textContent = "Thank you for your feedback!";
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('responseMessage').textContent = "An error occurred.";
        });
});