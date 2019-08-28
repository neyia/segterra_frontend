import actionTypes from "../actions/actionTypes";
import actions from "../actions/actions";
import {SvgModel} from "./model";
import {SvgLayout} from "./layout";

class Loader {
    constructor(input) {
        this.data = {};
        this.input = input;
        this.getData();
    }
    
    getData() {
        return {};
    }
}

class SVGLoader extends Loader {
    constructor(input) {
        super(input);
        this.wrapper = new SvgLayout(document.querySelector('#root'));
        this.svgModel = new SvgModel(this.wrapper);
    }
    
    getSprite(sprite) {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsText(sprite, "UTF-8");
            
            reader.onload = function ({target: {result}}) {
                resolve(result);
            }
        })
    }
    
    onLoad(data) {
        actions.updateData(data, this.svgModel);
    }
    
    getData() {
        this.input.addEventListener('change', ({target}) => {
            const dataSprite = target.files[0];
            this.getSprite(dataSprite)
            .then(result => this.onLoad({type: actionTypes.update_model_svg, data: result}))
            .catch(e => console.log(e));
        })
    };
}

export {
    SVGLoader,
    Loader
};