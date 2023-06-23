const bugModel = require("../models/bug");


const findBugs = async (req, res) => {
  try {
    const filter = req.query; 
    const bugs = await bugModel.findBugs(filter);
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


const findBugByName = async (req, res) => {
  try {
    const { name } = req.params;
    const bug = await bugModel.findBugByName({ name });
    res.json(bug);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const findManyBugsByName = async (req, res) => {
  try {
    const { names } = req.body;
    const bugs = await bugModel.findManyBugsByName(names); 
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const findBugsByLocation = async (req, res) => {
  try {
    const { location } = req.params;
    const bug = await bugModel.findBugsByLocation({ location });
    res.json(bug);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


const findBugsDateAndTime = async (req, res) => {
  try {
    const filter = {
      "times.array": req.params.targetTime,
      "months.northern.array": req.params.targetMonth,
    };
    const bugs = await bugModel.findBugsDateAndTime(filter);
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const findBugsByTime = async (req, res) => {
  try {
    const time = {
      "times.array": req.params.time,
    };
    const bugs = await bugModel.findBugsByTime(time);
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const findBugsByMonth = async (req, res) => {
  try {
    const month = {
      "months.northern.array": req.params.month,
    };
    const bugs = await bugModel.findBugsByMonth(month);
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const findBugsByPrice = async (req, res) => {
  try {
    const { minPrice, maxPrice } = req.params;
    const bugs = await bugModel.findBugsByPrice(minPrice, maxPrice);
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const goingExtinctBugs = async (req, res) => {
  const currentMonth = parseInt(req.params.month);

  try {
    const bugs = await bugModel.goingExtinctBugs(currentMonth);
    res.status(200).json(bugs);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving bugs going extinct" });
  }
};

module.exports = {
  findBugs,
  findBugByName,
  findBugsByLocation,
  findBugsDateAndTime,
  findBugsByTime,
  findBugsByMonth,
  findBugsByPrice,
  goingExtinctBugs,
  findManyBugsByName,
};
