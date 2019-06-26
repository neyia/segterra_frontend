/** Delete ALL imports before adding to HubSpot*/
import PopUp from './modules/PopUp';

window.addEventListener('load', () => {
    mobileMenu();
});

/** Create sidebar for header mobile menu */
function mobileMenu() {
    const overlay = document.querySelector('#overlay');
    const btn = document.querySelector('#btnMenu');
    
    new PopUp(btn, overlay);
}