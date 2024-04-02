require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

/**
 * Liste des routes de l'API
 *
 * /blockchain *
 * - GET: Récupérer la blockchain
 *
 * /blockchain/block/:index
 * - GET: Récupérer un block de la blockchain
 *
 * /blockchain/block
 * - POST: Ajouter un block à la blockchain
 *
 * /blockchain/valid
 * - GET: Vérifier la validité de la blockchain
 */

/**
 * Route par défaut
 *
 * Renvoie la liste des routes disponibles
 */
app.get('/', (req, res) => {
    let output = 'Routes disponibles: /blockchain';
    output += '<br>';
    output += 'GET /blockchain';
    output += '<br>';
    output += 'GET /blockchain/block/:index';
    output += '<br>';
    output += 'POST /blockchain/block';
    output += '<br>';
    output += 'GET /blockchain/valid';

    res.send(output);
});

/**
 * Route /blockchain
 */
app.get('/blockchain', (req, res) => {



    res.send('GET blockchain');
});


// Lancement du serveur et attendre
app.listen(
    PORT);

