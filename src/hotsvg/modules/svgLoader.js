import getSprite from "./spriteProcessor";
import renderSvgSprites from "./svgLayout";

export default function addSvgLoader(input, wrapper) {
    input.addEventListener('change', () => {
        getSpriteFromInput(input.files)
            .then(sprites => renderSvgSprites(sprites, wrapper))
            .catch(e => console.log(e));
    });
}

function getSpriteFromInput(fileList) {
    const length = fileList.length;
    const spriteArr = [];
    
    for (let i = 0; i < length; i++) {
        spriteArr.push(fileList[i])
    }
    
    return getSprite(spriteArr);
}