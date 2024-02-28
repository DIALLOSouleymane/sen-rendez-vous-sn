// Creation des routes de notre application
const express = require('express');
const router = express.Router();
// Recupération de notre modele de table
const { Service } = require("../models");

router.get("/", async (req, res) => {
    const listServices = await Service.findAll();
    res.json(listServices);
});

router.post("/", async (req, res) => {
    const service = req.body;
    // Creation d'une service avec des proprietes correspondant aux instances de notre classe Service
    // async et await nous permet d'attendre que le process se termine
    await Service.create(service);
    res.json(service);

});


module.exports = router;