const express = require('express');
const db = require('./db/index');
const cors = require('cors');

db.on("error", () => console.log("DB connect error"));
db.on("connected", () => console.log("DB connect"));


const postRoutes = require('./routes/PostRoutes');
const AuthRoutes = require('./routes/AuthRoutes');

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (request, response) => {
    response.send('<h1>Hello!</h1>');
});

app.use('', postRoutes);
app.use('', AuthRoutes);


app.listen(4000);
