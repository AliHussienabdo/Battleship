// Configure Babel to target your current version of Node 
// by creating a babel.config.js file in the root of your project:

module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};