import getSprite from "./spriteProcessor";
import renderSvgSprites from "./svgLayout";

function addSvgDropper(dropper, wrapper) {
    if (!isAdvancedUpload) return;
    
    document.body.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        getSpriteFromDropArea(e)
            .then(sprites => renderSvgSprites(sprites, wrapper))
            .catch(e => console.log(e));
    });
    
    document.body.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
    });
}

function isAdvancedUpload () {
    const div = document.createElement('div');
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}

function getSpriteFromDropArea({dataTransfer}) {
    const length = dataTransfer.files.length;
    const spriteArr = [];
    
    for (let i = 0; i < length; i++) {
        spriteArr.push(dataTransfer.files[i])
    }
    
    return getSprite(spriteArr);
}

export default addSvgDropper;