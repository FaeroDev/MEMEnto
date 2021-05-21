const router = require("express").Router();
const { Picture, Phrase } = require("../models");

let phrase1;
let picture1;
let dbPictureData;
let dbPhraseData;

// GET all galleries for homepage
router.get("/", async (req, res) => {
  try {
    const dbPictureData = await Picture.findAll({
      include: [
        {
          model: Picture,
          attributes: ["id", "url"],
        },
      ],
    });

    const pictures = dbPictureData.map((meme) => meme.get({ plain: true }));
    res.render("homepage", {
      pictures,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get("/picture/:id", async (req, res) => {
  try {
    dbPictureData = await Picture.findByPk(req.params.id, {
      include: [
        {
          model: Picture,
          attributes: ["id", "url", "descritpion"],
        },
      ],
    });

    dbPhraseData = await Phrase.findAll({
      where: {
        picture_id: req.params.id,
      },
      include: [
        {
          model: Phrase,
          attributes: ["id", "upper_text", "lower_text", "picture_id"],
        },
      ],
    });

    picture1 = dbPictureData.get({ plain: true });
    //res.render ---> Make sure that the handlebar page looks the same replace 'meme'

    phrase1 = dbPhraseData.get({ plain: true });
    res.render("picture", { picture, phrase, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // GET one painting
// router.get("/template/:id", async (req, res) => {
//   try {
//     const dbTemplateData = await Template.findByPk(req.params.id);

//     const meme = dbTemplateData.get({ plain: true });
//     res.render("template", { meme, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
