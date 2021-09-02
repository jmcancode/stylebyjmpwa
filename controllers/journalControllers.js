const Journal = require("../models/Journal");

exports.createJournals = (req, res) => {
  let title = req.body.title;
  let body = req.body.body;
  let image = req.body.image;
  let date = req.body.date;

  console.log(title, body, image, date);

  const journal = new Journal({
    title: title,
    body: body,
    image: image,
    date: date,
  });

  console.log(image, title, body, date);

  journal.save((err, journal) => {
    if (err) {
      console.error(err);
      return res.status(400).json({
        errors: err.message,
      });
    }

    return res.json({
      message: "Journal was successfully added to the DB",
      journal,
    });
  });
};

exports.getAllJournals = async (req, res, next) => {
  try {
    const journals = await Journal.find({}).sort({ desc: -1 }).limit(10).exec();
    if (!journals) {
      return res.status(400).json({ msg: "Journals not found" });
    }
    res.json(journals);
    console.log("Here are your Journals JM", journals);
  } catch (err) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
