class BaseModule {

    constructor($el) {
        console.log('BaseModule constructor');
        this.$el = $el;
        this.init();

        this.template = false;
        this.data = {};
    }

    init() {
        console.log('BaseModule init');
        this.initData();
        this.render();
    }

    // initialize lololo
    initData() {}

    // render me
    render() {
        if(!this.template) return false;

        var markup = this.template(this.data);
        var domTemplateWrap = document.createElement('div');
        domTemplateWrap.innerHTML = markup;

        var oldNode = this.$el;
        var newNode = domTemplateWrap.firstChild;

        var parentNode = oldNode.parentNode;
        parentNode.insertBefore(newNode, oldNode);
        parentNode.removeChild(oldNode);

        this.$el = newNode;
    }
}
