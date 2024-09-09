/* Funkce, která ukáže hodnotu posuvníku */
function hodnotaPosuvniku(hodnota) {
    document.getElementById('hodnotaVeku').textContent = hodnota;
}

document.getElementById('form-box').addEventListener('submit', function (event) {
    event.preventDefault(); // Zabrání odeslání formuláře klasickým způsobem

    // Získání hodnot z formuláře
    const formData = {
        jmeno: document.getElementById('jmeno').value,
        prijmeni: document.getElementById('prijmeni').value,
        vek: document.getElementById('vek').value
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
            document.getElementById('responseMessage').textContent = "Díky za vyplnění!";
        })
        .catch(error => {
            console.error('Chyba:', error);
            document.getElementById('responseMessage').textContent = "Něco se pokazilo.";
        });
});