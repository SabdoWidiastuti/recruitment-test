module.exports = {
    get HomePage() {
        return require('./HomePage').default;
    },
    get DetailTransaction() {
        return require('./DetailTransaction').default;
    }
}