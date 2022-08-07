import express from 'express';
import router from './routes/weather.js';

const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));
app.use('/weather', router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
