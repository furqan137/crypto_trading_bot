require('dotenv').config();
const ccxt = require('ccxt');

const useTestnet = false; // Change to true if using testnet keys

const exchange = new ccxt.binance({
    apiKey: process.env.API_KEY,
    secret: process.env.API_SECRET,
    enableRateLimit: true,
    options: {
        defaultType: 'spot'
    }
});

// For testnet: override API URL
if (useTestnet) {
    exchange.setSandboxMode(true);
    exchange.urls['api'] = exchange.urls['test'];
}

const symbol = 'BTC/USDT';
const amount = 0.001;

async function runBot() {
    try {
        const ticker = await exchange.fetchTicker(symbol);
        const price = ticker.last;

        console.log(`[${new Date().toISOString()}] Current ${symbol} price: $${price}`);

        const balance = await exchange.fetchBalance();
        const usdtBalance = balance.total['USDT'] || 0;
        const btcBalance = balance.total['BTC'] || 0;

        if (price < 60000 && usdtBalance >= price * amount) {
            console.log('Buying...');
            const order = await exchange.createMarketBuyOrder(symbol, amount);
            console.log('Buy order placed:', order);
        } else if (price > 65000 && btcBalance >= amount) {
            console.log('Selling...');
            const order = await exchange.createMarketSellOrder(symbol, amount);
            console.log('Sell order placed:', order);
        } else {
            console.log('No action taken. Conditions not met or insufficient balance.');
        }

    } catch (error) {
        console.error('Error running bot:', error.message);
        if (error.response) {
            console.error('Exchange response:', error.response.data || error.response.body);
        }
    }
}

setInterval(runBot, 10000);
