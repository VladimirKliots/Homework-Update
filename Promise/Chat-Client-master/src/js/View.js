import {header} from './header/header';
import {modalSetting} from './modals/modalSetting';
import {modalUsers} from './modals/modalUsers';
import {mainChat} from './mainChat/main';
import {openCloseModals} from './modals/openClosing';
import {displayIp} from './modals/displayIp';
import {getIp} from './GetIp/getIp';
import {smilesAdd} from './mainChat/smiles';
import {smilesButton} from './mainChat/smiles';

//import {changeUserState} from './modals/OnOffsettings/changeUserState';
//import {displayOnlineUsers} from './modals/viewOnline';

class View {
    constructor() {
        this._root = document.getElementById('root');
        
        this.init();
    }

    init() {
        const wrapper = document.createElement('div');

        wrapper.className = 'wrapper';
        wrapper.id = 'wrapper';
        const wrapper__modals = document.createElement('div');

        wrapper__modals.id = 'modalBack';
        wrapper__modals.className = 'wrapper__modals';

        const wrapper__header = document.createElement('div');

        wrapper__header.className = 'wrapper__header';

        const wrapper__main = document.createElement('div');

        wrapper__main.className = 'wrapper__main';

        wrapper.append(wrapper__modals);
        wrapper.append(wrapper__header);
        wrapper.append(wrapper__main);

        wrapper__modals.append(modalUsers());
        wrapper__modals.append(modalSetting());
        wrapper__header.append(header());
        wrapper__main.append(mainChat());

        this._root.append(wrapper);
        smilesAdd();
        smilesButton();
        openCloseModals();
        getIp(displayIp);
    }
      
}

export default View;