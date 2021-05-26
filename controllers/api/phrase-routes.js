const router = require("express").Router();

const { Phrase } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newPhrase = await Phrase.create({
      picture_id: req.body.pictureId,
      upper_text: req.body.upperText,
      lower_text: req.body.lowerText,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.post("/picture/:id", async (req, res) => {
//   try {

//   }
// }

module.exports = router;
