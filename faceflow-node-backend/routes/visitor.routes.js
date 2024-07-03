module.exports = app => {
    const visitors = require("../controllers/visitor.controller.js");

    let router = require("express").Router();

    router.get("/", visitors.findAll);
    router.post("/", visitors.createOrUpdate);

    app.use("/api/visitors", router);
};