class BaseModule {

    constructor(el) {
        console.log('BaseModule constructor');
        this.template = null;
        this.data = {};
        this.dom = {
            el: el
        };

        this.init();
    }

    init() {
        console.log('BaseModule init');
        this.initData();

        this.selectors();
        this.events();

        this.render();

        this.subs();
    }

    // initialize lololo
    initData() {}

    selectors() {}

    // events
    events() {}

    subs() {}

    // set data
    setData(key, value) {
        this.data[key] = value;
        this.render();
    }

    // render me
    render() {
        if(!this.template) return false;

        console.log('module render', this.data);

        var markup = this.template(this.data);
        var domTemplateWrap = document.createElement('div');
        domTemplateWrap.innerHTML = markup;

        var oldNode = this.dom.el;
        var newNode = domTemplateWrap.firstChild;

        var parentNode = oldNode.parentNode;
        parentNode.insertBefore(newNode, oldNode);
        parentNode.removeChild(oldNode);

        this.dom.el = newNode;

        this.selectors();
        this.events();
    }
}
