import addSvgDropper from './svgDropper';
import addSvgLoader from "./svgLoader";

const initLoader = (input, dropper, wrapper) => {
    switch (input.id) {
        case 'svgloader':
            initSvgLoader(input, dropper, wrapper);
            return;
        default:
            alert(`Input id's value must be 'svgloader'`);
    }
};

function initSvgLoader(input, dropper, wrapper) {
    addSvgLoader(input, wrapper);
    addSvgDropper(dropper, wrapper);
    
    input.addEventListener('change', addPulseListeners);
    dropper.addEventListener('drop', addPulseListeners);
    
    document.querySelector('#clear').addEventListener('click', () => {
        wrapper.innerHTML= '';
        while (document.body.firstElementChild.tagName === 'svg') {
            document.body.firstElementChild.remove();
        }
        dropper.removeEventListener('mouseout', removePulse);
        dropper.classList.add('pulse');
    });
    
    function addPulseListeners() {
        dropper.addEventListener('mouseover', addPulse);
        dropper.addEventListener('mouseout', removePulse);
    }
}

function addPulse({target}) {
    target.classList.add('pulse');
}

function removePulse({target}) {
    target.classList.remove('pulse');
}

export default initLoader;