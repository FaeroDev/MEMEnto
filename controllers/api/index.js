const router = require("express").Router();

const userRoutes = require("./user-routes");

const phraseRoutes = require("./phrase-routes");

router.use("/users", userRoutes);

router.use("/picture", phraseRoutes);

module.exports = router;
