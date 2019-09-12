import initLoader from "./modules/loader";

window.addEventListener('load', () => {
    
    const dropArea = document.querySelector('#input-label');
    const input = document.querySelector('#svgloader');
    const wrapper = document.querySelector('#root');
    
    initLoader(input, dropArea, wrapper);
});

