const configNext = require('./next')

module.exports = configNext({
    app: true,
    locales: {
        list: ['fa', 'en', 'ar'],
        default: 'fa',
    },
    storage: 'example.com',
})
