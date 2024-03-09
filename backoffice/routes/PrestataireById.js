// Creation des routes de notre application
const express = require('express');
const router = express.Router();
// Recupération de notre modele de table
const { Prestataire } = require("../models");

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const prestataire = await Prestataire.findByPk(id);
    res.json(prestataire);
});



module.exports = router;