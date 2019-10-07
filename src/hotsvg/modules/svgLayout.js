export default function renderSvgSprites(spriteArr, wrapper) {
    const parsedSpriteArr = spriteArr.map(sprite => getSVGSymbols(sprite));
    parsedSpriteArr.forEach(sprite => renderSprite(sprite, wrapper));
}

function getSVGSymbols({spriteArr, title}) {
    const symbols = spriteArr.match(/<symbol.*?<\/symbol>/gmis);
    if (symbols === null) {
        return {symbol: spriteArr.match(/<svg.*?<\/svg>/gmis)[0], title};
    }
    const symbolArr = [];
    
    symbols.forEach(svg => {
        const symbol = {};
        
        symbol.id = svg.match(/<symbol.*id=["'](.*?)["']/i)[1] || '';
        symbol.title = svg.match(/<title>(.*?)<\/title>/i) ? svg.match(/<title>(.*?)<\/title>/i)[1] : null;
        symbol.viewBox = svg.match(/viewBox=["'](.*?)["']/i)[1] || '';
        
        symbolArr.push(symbol);
    });
    return {symbolArr, title};
}

function renderSprite(svgSprite, wrapper) {
    const spriteWrapper = document.createElement('li');
    spriteWrapper.className = 'layout__item';
    const title = document.createElement('h5');
    title.className = 'layout__item-title';
    title.innerHTML = svgSprite.title;
    spriteWrapper.appendChild(title);
    
    if (svgSprite.symbol) {
        const div = document.createElement('div');
        div.className = 'icon-wrapper';
    
        const title = svgSprite.symbol.match(/<title>(.*?)<\/title>/i);
        const id = svgSprite.symbol.match(/<symbol\s*id=["'](.*?)["']/i);
        
        div.innerHTML = `
            ${svgSprite.symbol}
            <div class="icon-info">
                ${id ? `<p class="icon-name">${id[1]}</p>` : `<p class="icon-name" style="color: red;">no id</p>`}
                ${title ? `<p class="icon-title">${title[1]}</p>` : `<p class="icon-title" style="color: red;">no title</p>`}
            </div>`;
        spriteWrapper.appendChild(div);
        wrapper.appendChild(spriteWrapper);
        return;
    }
    
    svgSprite.symbolArr.forEach(svg => {
        spriteWrapper.appendChild(createSvgElement(svg));
    });
    
    wrapper.appendChild(spriteWrapper);
    document.querySelector('#input-label').classList.remove('pulse');
}

function createSvgElement(svg) {
    const div = document.createElement('div');
    div.className = 'icon-wrapper';
    div.innerHTML = `
            <svg class="icon-sprited" viewbox="${svg.viewBox}">
                <use xlink:href="#${svg.id}"/>
            </svg>
            <div class="icon-info">
                <p class="icon-name">${svg.id}</p>
                ${svg.title ? `<p class="icon-title">${svg.title}</p>` : `<p class="icon-title" style="color: red;">no title</p>`}
            </div>`;
    
    return div;
}
