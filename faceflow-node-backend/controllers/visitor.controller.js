const db = require("../models");
const Visitor = db.visitors;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Visitor.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving visitors."
            });
        });
};

exports.createOrUpdate = (req, res) => {
    const name = req.body.name;

    Visitor.findOne({ where: { name: name } })
        .then(visitor => {
            if (visitor) {
                visitor.visits += 1;
                visitor.last_visit = new Date();
                visitor.save()
                    .then(() => res.send({ message: "Visitor updated successfully!" }))
                    .catch(err => res.status(500).send({ message: err.message }));
            } else {
                Visitor.create({ name: name, visits: 1 })
                    .then(() => res.send({ message: "Visitor added successfully!" }))
                    .catch(err => res.status(500).send({ message: err.message }));
            }
        })
        .catch(err => res.status(500).send({ message: err.message }));
};