const ccxt = require('ccxt');
require('dotenv').config();

const exchange = new ccxt.binance({
    apiKey: process.env.API_KEY,
    secret: process.env.API_SECRET,
    enableRateLimit: true,
});

module.exports = exchange;