const ccxt = require('ccxt');
const strategy = require('./strategy');
require('dotenv').config();

const exchange = new ccxt.binance({
    apiKey: process.env.API_KEY,
    secret: process.env.API_SECRET,
    enableRateLimit: true
});

const symbol = 'BTC/USDT';
const amount = 0.001;

let isBotRunning = false;

const runBotCycle = async () => {
    if (!isBotRunning) return;

    try {
        const ticker = await exchange.fetchTicker(symbol);
        const price = ticker.last;

        console.log(`[BOT] Current ${symbol} price: $${price}`);

        if (strategy.shouldBuy(price)) {
            console.log('[BOT] Buying...');
            await exchange.createMarketBuyOrder(symbol, amount);
        } else if (strategy.shouldSell(price)) {
            console.log('[BOT] Selling...');
            await exchange.createMarketSellOrder(symbol, amount);
        } else {
            console.log('[BOT] No action taken.');
        }
    } catch (err) {
        console.error('[BOT ERROR]', err.message);
    }
};

setInterval(runBotCycle, 10000); // every 10 sec

module.exports = {
    startBot: () => { isBotRunning = true; },
    stopBot: () => { isBotRunning = false; },
    isRunning: () => isBotRunning
};
