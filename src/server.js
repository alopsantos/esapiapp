const express = require('express');

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
    return response.json({ message: 'Ola Anderson' });
});

app.listen(3333);