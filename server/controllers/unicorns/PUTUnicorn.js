const fs = require("fs");

// Functions to EDIT a unicorns location

function readData() {
  return JSON.parse(fs.readFileSync("./data/unicorns.json"));
}

function editGame(req, res) {
  try {
    const unicornToFind = req.params.unicornId;
    const unicornData = readData();

    const unicornIndex = unicornData.findIndex(
      (unicorn) => unicorn.id == unicornToFind
    );

    if (unicornIndex === -1) {
      return res.status(404).json({ message: "Unicorn not found" });
    }

    const { location } = req.body;

    // change unicorn location in the object
    if (location) {
      unicornData[unicornIndex].location = location;
    }

    // remove unicorn, and add in new uniconrn (its actually the same unicorn, its just "moved")
    unicornData.splice(unicornIndex, 1, unicornData[unicornIndex]);

    // write to file
    fs.writeFileSync("./data/unicorns.json", JSON.stringify(unicornData));

    return res.status(202).json(unicornData[unicornIndex]);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = editGame;
