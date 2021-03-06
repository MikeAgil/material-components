import Component from 'vue-class-component';

@Component({
    props: {
        name: {
            type: String,
            required: false,
            'default': null,
            twoWay: false
        },
        href: {
            type: String,
            required: false,
            'default': 'javascript:void(0)',
            twoWay: false
        },
        active: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    events: {
        'nav-item::activated': function (id) {
            if (this.showActive == true) {
                this.active = this.id == id;
            }
        }
    },
    template: require('./nav-item.html')
})
export default class NavItem {
    private $parent: any;
    private $dispatch: any;
    private _slotContents: any;
    private _uid: any;

    private name: string;
    private active: boolean;

    ready() {
        if (this.active == true) {
            this.$dispatch('nav-item::activated', this.id);
        }
    }

    get id() {
        if (this.name != null) {
            return this.name;
        }
        return this._uid;
    }

    get content() {
        return this._slotContents ? this._slotContents.default : '';
    }

    get showActive() {
        return this.$parent.showActive;
    }

    clicked() {
        this.$dispatch('nav-item::activated', this.id);
    }
}