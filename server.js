const express = require ('express');
const api = require ('./main/routes/api');
const html = require ('./main/routes/html');

const PORT = process.env.PORT || 3001
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));
app.use ('/', html);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);