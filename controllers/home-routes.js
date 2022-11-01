const router = require('express').Router();
const {Products} = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');


// render the homepage
router.get('/', async (req, res) => {
  try {
    const cardData = await Products.findAll().catch((err) => res.json(err));
    const cards = cardData.map((card) => card.get({ plain: true }));
    console.log(cardData);
    res.render('homepage', { cards, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET one product and render a page for it.
router.get('/product/:id', async (req, res) => {
  try {
    const productData = await Products.findByPk(req.params.id).catch((err) => res.json(err));
    const product = productData.get({ plain: true });
    res.render('product', { product, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET all products with a matching zip code and render them on page.
router.get('/search/:zip', async (req, res) => {
  try {
    const cardData = await Products.findAll({where:{zip_code:req.params.zip}}).catch((err) => res.json(err));
    const cards = cardData.map((card) => card.get({ plain: true }));
    res.render('search', { cards, loggedIn: req.session.loggedIn, zip: req.params.zip });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//render the login page or redirect to homepage if the user is already logged in.
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login', { loggedIn: req.session.loggedIn });
});

//if the user is logged in render the post page. If not then redirect them to the log in page.
router.get('/post', withAuth, (req, res) => {
    if (req.session.loggedIn) {
    res.render('post', { loggedIn: req.session.loggedIn });
      return;
    }
    res.redirect('/login');
    
  });



module.exports = router;
