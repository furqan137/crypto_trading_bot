const express = require('express');
const ccxt = require('ccxt');
const router = express.Router();
require('dotenv').config();

const exchange = new ccxt.binance({
    apiKey: process.env.API_KEY,
    secret: process.env.API_SECRET,
    enableRateLimit: true
});

const symbol = 'BTC/USDT';
const amount = 0.001;

router.post('/buy', async (req, res) => {
    try {
        const order = await exchange.createMarketBuyOrder(symbol, amount);
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/sell', async (req, res) => {
    try {
        const order = await exchange.createMarketSellOrder(symbol, amount);
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
