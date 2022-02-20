const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const unicornsRouter = require("./routes/unicorns/index");

app.use(express.json());
app.use(cors());
app.use("/", unicornsRouter);

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT} :-) !`);
});
