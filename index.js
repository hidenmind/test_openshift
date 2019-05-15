const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Ativo')
})
//sonic_tst__
app.listen(8080)