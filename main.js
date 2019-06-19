//const { app } = './app.js';
var App = require('./app.js');

au.start({
    debug: true,
    root: App
    // root: 'app.js', // can be ommitted, default is app.js
    // host: document.body // can be ommitted, default is document.body
})
.catch(ex => {
    document.body.textContent = `Bootstrap error: ${ex}`;
});
