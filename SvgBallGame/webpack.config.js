const path = require('path');

module.exports = {
    entry: './model.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};