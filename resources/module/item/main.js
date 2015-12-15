class ItemModule extends BaseModule{

    init() {
        console.log('ItemModule init');
        this.template = JST['resources/module/item/view.hbs'];
        super.init();
    }

    selectors() {
        console.log('ItemModule selectors', this.dom.el);
        this.dom.button = this.dom.el.querySelector('button');
    }

    events() {
        console.log(this.dom);
        if(this.dom.button) {
            this.dom.button.addEventListener('click', e=>this.eventButtonClick(e));
        }
    }

    eventButtonClick(e) {
        if(e) e.preventDefault();

        this.setData('name', 'yoda ' + Math.random());

        console.log('eventButtonClick');
    }

    initData() {
        this.data = {
            name: 'yadda'
        };
    }
}
