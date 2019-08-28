class Layout {
    constructor(wrapper) {
        this.wrapper = wrapper;
    }
    
    render(newHtml) {
        this.wrapper.innerHTML = newHtml;
    }
}

class SvgLayout extends Layout {
    constructor(wrapper) {
        super(wrapper);
    }
    
    render({data}) {
        console.log('render');
        this.wrapper.innerHTML = '';
        this.wrapper.appendChild( this.renderSprite(data));
    }
    
    renderSprite(data) {
        const svgSprite = document.createDocumentFragment();
        
        data.forEach((svg) => {
            svgSprite.appendChild(SvgLayout.createSpriteItem(svg));
        });
    
        document.querySelector('#input-label').classList.remove('pulse');
        return svgSprite;
    }
    
    static createSpriteItem(svg) {
        const li = document.createElement('li');
        li.className = "layout__item col s2";
        li.innerHTML = `<svg class="icon-sprited" viewbox="${svg.viewBox}">
                            <use xlink:href="#${svg.id}"/>
                        </svg>
                        <div class="icon-info">
                            <p class="icon-name">${svg.id}</p>
                            ${svg.title ? `<p class="icon-title">${svg.title}</p>` : `<p class="icon-title" style="color: red;">no title</p>`}
                        </div>`;
        return li;
    }
    
}

export {
    SvgLayout
}