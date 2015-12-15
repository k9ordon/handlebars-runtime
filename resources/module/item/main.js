class ItemModule extends BaseModule{

    init() {
        console.log('ItemModule init');
        this.template = JST['resources/module/item/view.hbs'];
        super.init();
    }

    initData() {
        this.data = {
            title: 'yadda'
        };
    }
}
