/** Delete ALL imports before adding to HubSpot*/

import PopUp from './PopUp';

window.addEventListener('load', () => {
    mobileMenu();
});

/** Create sidebar for header mobile menu */
function mobileMenu() {
    const overlay = document.querySelector('#overlay');
    const showBtn = document.querySelector('#headerIcon');
    const btnClose = document.querySelector('#closeIcon');
    
    new PopUp(showBtn, overlay, btnClose, true);
}

