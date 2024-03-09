// Creation de l'instance du framework
const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Authentification route
const createUserRoute = require('./routes/user');



const db = require("./models");

// Creation des points d'entrees à notre API
//  Routes
// const personneRouter = require('./routes/Personne');
// app.use("/personnes", personneRouter);


/*
    Un point de terminaison d'API (endpoint) est un emplacement spécifique au sein d'une API qui accepte les demandes et renvoie les réponses. Il s'agit d'un moyen permettant à différents systèmes et applications 
    de communiquer entre eux, en envoyant et en recevant des informations et des instructions via le point final.

*/

// recherche endpoint
const rechercher = require('./recherche/recherche');
app.use("/search", rechercher);

/*
    point de terminaison (endpoint) de récupération de Prestataire par id
    endpoint
*/
const prestataireById = require('./routes/PrestataireById');
app.use("/prestataireId", prestataireById);


// create user route
app.use("/user", createUserRoute);

const adminRouter = require('./routes/Administrateur');
app.use("/admins", adminRouter);

const assurerRouter = require('./routes/Assurer');
app.use("/assurers", assurerRouter);

const clientRouter = require('./routes/Client');
app.use("/clients", clientRouter);

const prestataireRouter = require('./routes/Prestataire');
app.use("/prestataires", prestataireRouter);

const reservationRouter = require('./routes/Reservation');
app.use("/reservations", reservationRouter);

const serviceRouter = require('./routes/Service');
app.use("/services", serviceRouter);

// Nous utilisons sequelize pour la création automatique de nos tables de base de données
db.sequelize.sync().then(() => {
    // configuration de notre server
    const port = 3001;
    app.listen(port, () => {
        console.log("Le serveur est en cours d'execution !");
        console.log("\tIl écoute sur le port " + port);
    });

});



