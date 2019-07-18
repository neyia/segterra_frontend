/** Delete ALL imports before adding to HubSpot*/

import PopUp from './PopUp';

window.addEventListener('load', () => {
    mobileMenu();
    faq()
});

/** Create sidebar for header mobile menu */
function mobileMenu() {
    let overlay = document.querySelector('#overlay');
    let showBtn = document.querySelector('#headerIcon');
    let btnClose = document.querySelector('#closeIcon');
    
    new PopUp(showBtn, overlay, btnClose, true);
}

function faq() {
    let faq = document.querySelector('.faq-popup');
    let policy = document.querySelector('.policy-popup');
    let terms = document.querySelector('.terms-popup');
    let faqBtn = document.querySelectorAll('.faq');
    let policyBtn = document.querySelectorAll('.policy');
    let termsBtn = document.querySelectorAll('.terms');
    let closeBtn = document.querySelectorAll('.close-btn');
    let closeMobile = document.querySelectorAll('.close-mobile');
    
    new PopUp([...faqBtn], faq, [...closeMobile, ...closeBtn], true);
    new PopUp([...policyBtn], policy, [...closeMobile, ...closeBtn], true);
    new PopUp([...termsBtn], terms, [...closeMobile, ...closeBtn], true);
}



