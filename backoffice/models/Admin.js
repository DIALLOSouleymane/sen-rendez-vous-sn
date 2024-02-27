// Creation de notre module exportable sous forme de fonction
module.exports = (sequelize, DataTypes) => {

    // definition de notre table Administrateur
    const Admin = sequelize.define("Admin", {
        telephone_fixe: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        id_personne: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
               
    });

    return Admin;

}