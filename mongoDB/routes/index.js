module.exports = (app) => {
    app.use('/api', require('./api'));
    app.get('/', (req, res) => {
        throw new Error('API is available on /api');
    });
};
