module.exports = {
    shouldBuy(price) {
        return price < 60000;
    },

    shouldSell(price) {
        return price > 65000;
    }
};