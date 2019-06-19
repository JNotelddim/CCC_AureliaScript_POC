class App {
    static $view() {
        return document.querySelector('#app');
    }
    constructor() {
        this.message = 'Aurelia';
    }
}

module.exports = App
