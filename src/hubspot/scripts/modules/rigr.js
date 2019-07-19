/** Deconste ALL imports before adding to HubSpot*/

import PopUp from './PopUp';

window.addEventListener('load', () => {
    mobileMenu();
    faq()
});

/** Create sidebar for header mobile menu */
function mobileMenu() {
    const overlay = document.querySelector('#overlay');
    const showBtn = document.querySelector('#headerIcon');
    const btnClose = document.querySelector('#closeIcon');
    
    new PopUp(showBtn, overlay, btnClose, true);
}

function faq() {
    const faq = document.querySelector('.faq-popup');
    const policy = document.querySelector('.policy-popup');
    const terms = document.querySelector('.terms-popup');
    const faqBtn = document.querySelectorAll('.faq');
    const policyBtn = document.querySelectorAll('.policy');
    const termsBtn = document.querySelectorAll('.terms');
    const closeBtn = document.querySelectorAll('.close-btn');
    const closeMobile = document.querySelectorAll('.close-mobile');
    
    new PopUp([...faqBtn], faq, [...closeMobile, ...closeBtn], true);
    new PopUp([...policyBtn], policy, [...closeMobile, ...closeBtn], true);
    new PopUp([...termsBtn], terms, [...closeMobile, ...closeBtn], true);
}



