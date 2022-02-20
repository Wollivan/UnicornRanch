const fs = require("fs");

// Function to GET list of unicorns

function getUnicornList(req, res) {
  try {
    const unicornData = JSON.parse(fs.readFileSync("./data/unicorns.json"));

    if (!unicornData) {
      res.status(404).json({ message: "Unicorn list not found" });
    }
    return res.status(200).json(unicornData);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = getUnicornList;
