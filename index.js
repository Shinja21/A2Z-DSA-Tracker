const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});