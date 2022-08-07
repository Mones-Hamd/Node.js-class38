import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('./index.html');
});
router.post('/', (req, res) => {
  const cityName = req.body.cityName;
  res.send(`<h2>${cityName}</h2>`);
});

export default router;
