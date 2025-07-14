const express = require('express');
const router = express.Router();
const bot = require('../bot/trader');

router.post('/start', (req, res) => {
    bot.startBot();
    res.json({ message: 'Bot started' });
});

router.post('/stop', (req, res) => {
    bot.stopBot();
    res.json({ message: 'Bot stopped' });
});

router.get('/status', (req, res) => {
    res.json({ running: bot.isRunning() });
});

module.exports = router;