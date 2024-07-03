module.exports = (sequelize, Sequelize) => {
    const Visitor = sequelize.define("visitor", {
        name: {
            type: Sequelize.STRING
        },
        visits: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        last_visit: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    });

    return Visitor;
};