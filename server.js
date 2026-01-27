const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Nap mache' });
});

app.listen(PORT, () => {
  console.log(`Serveur a lanse ${PORT}`);
});