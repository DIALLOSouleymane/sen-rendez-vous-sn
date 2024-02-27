// Creation de notre module exportable sous forme de fonction
module.exports = (sequelize, DataTypes) => {

    // definition de notre table Prestataire
    const Prestataire = sequelize.define("Prestataire", {
        fonction: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nom_structure: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telephone_fixe: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        id_personne: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        
    });

    return Prestataire;

}