import Component from 'vue-class-component';
import mdFab from '../../../components/fab';
import mdButton from '../../../components/button';
import mdIcon from '../../../components/icon';

@Component({
    components: {
        mdFab,
        mdButton,
        mdIcon
    },
    template: require('./fab.html')
})
export default class FabButtons {
}

