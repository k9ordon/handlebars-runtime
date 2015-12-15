class ListModule extends BaseModule{

    init() {
        console.log('ListModule init');
        this.template = JST['resources/module/list/view.hbs'];
        super.init();
    }

    selectors() {
        console.log('ListModule selectors', this.dom.el);
        this.dom.items = this.dom.el.querySelectorAll('.items');
    }

    subs() {
        
    }

    initData() {
        this.data = {
            items: [
                {name: 'yadda'},
                {name: 'dadda'},
                {name: 'doooh'}
            ]
        };
    }
}
