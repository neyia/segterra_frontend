const actions = {};

actions.updateData = ({type, data}, model) => {
    switch (type) {
        case 'UPDATE_MODEL_SVG' :
            return model.updateData(data);
    }
};

export default actions;