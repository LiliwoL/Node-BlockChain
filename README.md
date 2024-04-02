# blockchain.js - Build your own blockchain from scratch in 20 lines of javascript

inspired by
[Let's Build the Tiniest Blockchain In Less Than 50 Lines of Python](https://medium.com/crypto-currently/lets-build-the-tiniest-blockchain-e70965a248b)
by Gerald Nash


One time install:

    $ npm install         -- or npm install -g js-sha256


**Starter (Version)**

to run use:

    $ node ./blockchain.js


**Proof of Work (Version)**

to run use:

    $ node ./blockchain_with_proof_of_work.js


# Backend

Met à disposition une blockchain en tant que service.
Les données sont stockées dans un fichier JSON.

## Routes disponibles

### /blockchain

- GET: Récupérer la blockchain

Cette route permet de récupérer la blockchain dans sa totalité.

### /blockchain/block/:index

- GET: Récupérer un block de la blockchain

Cette route permet de récupérer un block de la blockchain en fonction de son index.

### /blockchain/block

- POST: Ajouter un block à la blockchain

Cette route permet d'ajouter un block à la blockchain.

### /blockchain/valid

- GET: Vérifier la validité de la blockchain

Cette route permet de vérifier la validité de la blockchain.
