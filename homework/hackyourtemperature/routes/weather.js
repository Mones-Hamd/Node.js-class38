import express from 'express';
import fetchApi from '../helper/fetchApi.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.statusCode === 200
    ? res.render('index', { style: 'style' })
    : res.send(`Erorr ${res.statusCode}`);
});
router.post('/weather', async (req, res) => {
  const cityName = req.body.cityName;
  const data = await fetchApi(cityName);
  try {
    //convert to celsius
    const temp = (data.main.temp - 273.15).toFixed(2);
    res.render('index', {
      temp,
      cityName,
      cityIsFound: true,
      style: 'style',
      title: `${cityName}`,
    });
  } catch {
    res.status(404);
    res.render('index', {
      cityIsFound: false,
      style: 'style',
      data,
    });
  }
});

export default router;
