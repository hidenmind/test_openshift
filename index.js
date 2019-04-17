const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Ativo')
})

app.listen(8080)