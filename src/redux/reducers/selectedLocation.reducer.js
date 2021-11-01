const selectedLocation = (state = '', action) => {
    switch (action.type) {
        case 'SET_SELECTED_LOCATION':
            return action.payload;
        default:
            return state;
    }
};

export default selectedLocation;
