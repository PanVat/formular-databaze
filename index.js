const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
const DATABASE = "databaze.json"

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    const data = req.body;

    // Načtení aktuálního obsahu souboru nebo vytvoření nového
    let surveys = [];
    if (fs.existsSync(DATABASE)) {
        surveys = JSON.parse(fs.readFileSync(DATABASE, 'utf8'));
    }

    // Přidání nových dat
    surveys.push(data);

    // Uložení dat do souboru
    fs.writeFileSync(DATABASE, JSON.stringify(surveys, null, 2));

    res.json({ message: 'Data se uložila!' });
});

app.listen(PORT, () => {
    console.log("Server běží na portu " + PORT + ".");
});
