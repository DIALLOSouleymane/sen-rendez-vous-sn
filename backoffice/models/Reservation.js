// Creation de notre module exportable sous forme de fonction
module.exports = (sequelize, DataTypes) => {

    // definition de notre table Reservation
    const Reservation = sequelize.define("Reservation", {
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
                       
    });

    return Reservation;

}