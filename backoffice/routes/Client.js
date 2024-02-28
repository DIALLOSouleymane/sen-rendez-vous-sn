// Creation des routes de notre application
const express = require('express');
const router = express.Router();
// Recupération de notre modele de table
const { Client } = require("../models");

router.get("/", async (req, res) => {
    // res.json("Hello world!");
    const listClients = await Client.findAll();
    res.json(listClients);
});

router.post("/", async (req, res) => {
    const client = req.body;
    // Creation d'une client avec des proprietes correspondant aux instances de notre classe Client
    // async et await nous permet d'attendre que le process se termine
    await Client.create(client);
    res.json(client);

});


module.exports = router;