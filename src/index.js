require('dotenv').config();
require('./config/db');
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const mainRouter = require('./api/routes');

const app = express();
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
    },
  })
);

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  limit: 100,
  standardHeaders: false,
  legacyHeaders: false,
});
app.use(limiter);

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true }));
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.disable('x-powered-by');

app.use('/api', mainRouter);

// Controlador de rutas no encontradas
app.use('*', (req, res, next) => {
  res.status(404).json({ data: 'Not found' });
});

// Controlador de errores generales del servidor
app.use((error, req, res, next) => {
  console.log('>>>> Server error:', error);
  res.status(500).json({ data: 'Internal Server Error' });
});

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`App corriendo en: http://localhost:${PORT}`);
});
