const express = require('express');
const ccxt = require('ccxt');
const router = express.Router();
require('dotenv').config();

const exchange = new ccxt.binance({
    apiKey: process.env.API_KEY,
    secret: process.env.API_SECRET,
    enableRateLimit: true
});

router.get('/', async (req, res) => {
    try {
        const ticker = await exchange.fetchTicker('BTC/USDT');
        res.json({ price: ticker.last });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;