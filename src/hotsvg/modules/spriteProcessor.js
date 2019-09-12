export default function getSprite (fileArr) {
    return Promise.all(fileArr.map(file => {
        return new Promise(res => {
            const reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            
            reader.onload = function ({target: {result}}) {
                const parser = new DOMParser();
                const spriteElement = parser.parseFromString(result, "text/xml");
                spriteElement.documentElement.style.display = 'none';
                document.body.insertAdjacentElement('afterbegin', spriteElement.documentElement);
                res({spriteArr: result, title: file.name});
            }
        });
    }))
}
