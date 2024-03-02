import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(openModal, 50000);

    tabs();
    modal('[data-modal]', '.modal');
    timer();
    cards();
    calc();
    forms();
    slider();

});

