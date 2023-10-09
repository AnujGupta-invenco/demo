const express = require('express');

const app = express();
const port = 3001;

app.use('/', (req, res)=>{
    res.status(200).send("server is running fine.");
})

app.listen(port, ()=>{
    console.log(`serve is listening on http://localhost:${port}`);
})