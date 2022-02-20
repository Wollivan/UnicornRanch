const unicornsRouter = require("express").Router();

const getUnicornList = require("../../controllers/unicorns/getUnicornList");
const editUnicorn = require("../../controllers/unicorns/PUTUnicorn");

unicornsRouter.route("/unicorns").get(getUnicornList);

unicornsRouter.route("/unicorns/:unicornId").put(editUnicorn);

module.exports = unicornsRouter;
