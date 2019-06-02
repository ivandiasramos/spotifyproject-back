const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');
const cors = require('cors');

const app = express();

const params = new URLSearchParams();
params.append('grant_type', 'client_credentials')
params.append('client_id', '974385e59bef428bb45df3c5836ef0d5')
params.append('client_secret', '7aad5c9ef159415fb92a18d98afec9a9')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
    fetch('https://accounts.spotify.com/api/token', { method: 'POST', body: params })
        .then(res => res.json())
        .then(json => res.send(json));
});

app.listen(3000);