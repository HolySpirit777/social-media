const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

const db = require('./database/social-database');
const socialRouter = require('./routes/social-routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', socialRouter);

app.listen(5000, () => console.log(`Server running on port 5000`));