// Creation de l'instance du framework
const express = require('express');
const app = express();


const db = require("./models");

// Nous utilisons sequelize pour la création automatique de nos tables de base de données
db.sequelize.sync().then(() => {
    // configuration de notre server
    const port = 3001;
    app.listen(3001, () => {
        console.log("Le serveur est en cours d'execution !");
        console.log("\tIl écoute sur le port " + port);
    });

});



