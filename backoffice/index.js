// Creation de l'instance du framework
const express = require('express');
const app = express();
const cors = require("cors");

// Authentification route
const createUserRoute = require('./routes/user');


app.use(express.json());
app.use(cors());

const db = require("./models");

// Creation des points d'entrees à notre API
//  Routes
// const personneRouter = require('./routes/Personne');
// app.use("/personnes", personneRouter);

// recherche endpoint
const rechercher = require('./recherche/recherche');
app.use("/search", rechercher);

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



