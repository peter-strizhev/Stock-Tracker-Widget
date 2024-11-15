const express = require('express');
const app = express();
const port = 3000;

app.get('/widget-data', (req, res) => {
    res.json({ data: "Hello from Node.js!" });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
