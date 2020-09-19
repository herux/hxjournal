module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        }
    });

    return Customer;
};