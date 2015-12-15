class App {
    constructor() {
        console.log('yey app');

        this.selectors();
        this.subs();
    }

    selectors() {
        this.$itemDom = document.querySelector('.item');
    }

    subs() {
        this.item = new ItemModule(this.$itemDom);
    }

}

window.app = new App();
