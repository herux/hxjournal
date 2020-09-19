module.exports = (sequelize, Sequelize) => {
    const Shipping = sequelize.define('shipping', {
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        address2: {
            type: Sequelize.STRING
        },
        address3: {
            type: Sequelize.STRING
        },
        address4: {
            type: Sequelize.STRING
        },
        postcode: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        }
    });

    return Shipping;
};