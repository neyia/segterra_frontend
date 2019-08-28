import {SVGLoader} from "./modules/loader";

window.addEventListener('load', () => {
    initSVGLoader();
});

function initSVGLoader() {
    window.addEventListener('click', ({target}) => {
        return target.id === 'svgloader' ? new SVGLoader(target) : null;
    })
}


/*
window.addEventListener('load', () => {
    initSVGLoader();
});
function loadSvg(input) {
    input.addEventListener('change', function () {
        const sprite = this.files[0];
        
        const getSprite = (sprite) => new Promise(res => {
            const reader = new FileReader();
            reader.readAsText(sprite, "UTF-8");
            
            reader.onload = function ({target: {result}}) {
                const parser = new DOMParser();
                const spriteElement = parser.parseFromString(result, "text/xml");
                spriteElement.documentElement.style.display = 'none';
                document.body.insertAdjacentElement('afterbegin', spriteElement.documentElement);
                res(result);
            }
        });
        
        getSprite(sprite)
        .then(result => getSVGSymbols(result))
        .then(symbolArr => renderSprite(symbolArr))
        .catch(e => console.log(e));
    })
}

function getSVGSymbols(text) {
    const symbols = text.match(/<symbol.*?<\/symbol>/gmis);
    const svgMap = new Map();
    
    symbols.forEach((svg, idx) => {
        const symbol = {};
        symbol.id = svg.match(/<symbol\s*id=["'](.*?)["']/i)[1];
        symbol.title = svg.match(/<title>(.*?)<\/title>/i) ? svg.match(/<title>(.*?)<\/title>/i)[1] : null;
        symbol.viewBox = svg.match(/viewBox=["'](.*?)["']/i)[1];
        svgMap.set(idx + 1, symbol);
    });
    
    return svgMap;
}

function renderSprite(svgSymbols) {
    const svgSprite = document.createDocumentFragment();
    const root = document.querySelector('#root');
    root.innerHTML = '';
    
    svgSymbols.forEach(svg => {
        svgSprite.appendChild(createSvgElement(svg));
    });
    
    root.appendChild(svgSprite);
    document.querySelector('#input-label').classList.remove('pulse');
    
    function createSvgElement(svg) {
        const div = document.createElement('div');
        div.innerHTML = `<li class="layout__item col s2">
                            <svg class="icon-sprited" viewbox="${svg.viewBox}">
                                <use xlink:href="#${svg.id}"/>
                            </svg>
                            <div class="icon-info">
                                <p class="icon-name">${svg.id}</p>
                                ${svg.title ? `<p class="icon-title">${svg.title}</p>` : `<p class="icon-title" style="color: red;">no title</p>`}
                            </div>
                        </li>`;
        
        return div.firstChild;
    }
}
*/
