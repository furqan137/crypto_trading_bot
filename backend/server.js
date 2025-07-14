require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const botRoutes = require('./routes/bot');
const priceRoutes = require('./routes/price');
const balanceRoutes = require('./routes/balance');
const tradeRoutes = require('./routes/trade');

app.use(express.json());

app.use('/api/bot', botRoutes);
app.use('/api/price', priceRoutes);
app.use('/api/balance', balanceRoutes);
app.use('/api/trade', tradeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));