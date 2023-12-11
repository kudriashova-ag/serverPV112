const express = require('express');
const db = require('./db/index');
db.on("error", () => console.log("DB connect error"));
db.on("connected", () => console.log("DB connect"));


const postRoutes = require('./routes/PostRoutes');

const app = express();

app.get('/', (request, response) => {
    response.send('<h1>Hello!</h1>');
});

app.use('', postRoutes);


app.listen(4000);
