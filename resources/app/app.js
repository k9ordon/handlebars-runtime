class App extends BaseModule {
    
    selectors() {
        //this.$itemDom = document.querySelector('.item');
        this.dom.list = document.querySelector('.list');
    }

    subs() {
        //this.item = new ItemModule(this.$itemDom);
        this.list = new ListModule(this.dom.list);
    }

}

window.app = new App();
