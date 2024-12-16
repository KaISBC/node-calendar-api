const express = require('express');
const app = express();
const port = 3000;

// Calendari supportati
const calendars = [
    { id: 1, name: "Gregorio" },
    { id: 2, name: "Islamico" },
    { id: 3, name: "Thailandese" },
    { id: 4, name: "Ebraico" },
];

// Endpoint API
app.get('/api/calendars', (req, res) => {
    res.json(calendars);
});

// Avvia il server
app.listen(port, () => {
    console.log(`Server in esecuzione su http://localhost:${port}`);
});
