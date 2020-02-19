const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    console.log('Listening...');
    resp.json({ "message": req.query["echo"] })
});

app.listen(3000)