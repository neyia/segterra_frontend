import {State, SvgObserver} from "./observer";

class Model {
    constructor () {
        this.data ={};
        this.state = new State();
    }
    
    updateData(data) {
        return this.data = {...this.data, data};
    }
}

class SvgModel extends Model {
    constructor (observer) {
        super();
        this.state.subscribe(new SvgObserver(observer));
    }
    
    updateData(data = {}) {
        const parser = new DOMParser();
        const spriteElement = parser.parseFromString(data, "text/xml");
        spriteElement.documentElement.style.display = 'none';
        document.body.insertAdjacentElement('afterbegin', spriteElement.documentElement);
        
        const spriteSymbolsMap = getSVGSymbols(data);
        return this.state.update(spriteSymbolsMap);
    }
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

export {
    Model,
    SvgModel
};