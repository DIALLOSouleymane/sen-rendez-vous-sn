// Creation de notre module exportable sous forme de fonction
module.exports = (sequelize, DataTypes) => {

    // definition de notre table Visiteur
    const Visiteur = sequelize.define("Visiteur", {
                       
    });

    return Visiteur;

}