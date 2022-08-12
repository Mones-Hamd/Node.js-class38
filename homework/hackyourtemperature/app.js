import express from 'express';
import router from './routes/weather.js';
import { engine } from 'express-handlebars';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', router);
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
  }),
);
app.set('view engine', 'hbs');

export default app;
