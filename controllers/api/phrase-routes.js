const router = require("express").Router();

const { Phrase } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newPhrase = await Phrase.create({
      picture_id: req.body.pictureId,
      upper_text: req.body.upperText,
      lower_text: req.body.lowerText,
    });
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
