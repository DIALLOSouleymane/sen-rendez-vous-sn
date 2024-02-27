// Creation de notre module exportable sous forme de fonction
module.exports = (sequelize, DataTypes) => {

    // definition de notre table Assurer
    const Assurer = sequelize.define("Assurer", {
        service_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prestataire_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
                       
    });

    return Assurer;

}