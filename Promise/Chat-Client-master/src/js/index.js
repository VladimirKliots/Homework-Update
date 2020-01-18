document.addEventListener('DOMContentLoaded', init);
import '../style.less';
import View from './View';
import Model from './Model';
import Controller from './Controller';

const init = () => {
    const view = new View();
    const model = new Model();

    new Controller(model, view);
};

init();

