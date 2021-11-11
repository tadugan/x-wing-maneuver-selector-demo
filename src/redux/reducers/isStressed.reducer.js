const isStressed = (state = false, action) => {
    switch (action.type) {
        case 'SET_STRESS_TRUE':
            return true;
        case 'SET_STRESS_FALSE':
            return false;
        default:
            return state;
    }
};

export default isStressed;
