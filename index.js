const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const exp = require('constants');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/save-survey', (req, res) => {
    const data = req.body;

    // Načtení aktuálního obsahu souboru nebo vytvoření nového
    let surveys = [];
    if (fs.existsSync('surveys.json')) {
        surveys = JSON.parse(fs.readFileSync('surveys.json', 'utf8'));
    }

    // Přidání nových dat
    surveys.push(data);

    // Uložení dat do souboru
    fs.writeFileSync('surveys.json', JSON.stringify(surveys, null, 2));

    res.json({ message: 'Data saved!' });
});

app.listen(PORT, () => {
    console.log("Server běží na portu " + PORT + ".");
});
