const translateDirection = (directionString) => {
    switch (directionString) {
        case 'bull':
            return 'Bullseye';
        case 'Fr':
            return 'Front Right';
        case 'Rf':
            return 'Right Front';
        case 'Rr':
            return 'Right Rear';
        case 'Br':
            return 'Back Right';
        case 'Bl':
            return 'Back Left';
        case 'Lr':
            return 'Left Rear';
        case 'Lf':
            return 'Left Front';
        case 'Fl':
            return 'Front Left';
        default:
            console.log('error, could not translate direction.');
            break;
    }
};

const translateRange = (rangeString) => {
    if (rangeString === '4') {
        return 'Beyond 3';
    } else {
        return rangeString;
    }
};

export const logHello = () => {
    console.log('Hello World');
};

export const logLocation = (e, locationString) => {
    e.preventDefault();
    console.log(`The target location is: ${locationString}`);
};

export const setLocation = (e, locationString, dispatch) => {
    e.preventDefault();
    console.log(`The target location is: ${locationString}`);

    dispatch({ type: 'SET_SELECTED_LOCATION', payload: locationString });
};

export const parseLocation = (locationString) => {
    const parsedArray = locationString.split('-');

    let convertedDirection = translateDirection(parsedArray[0]);
    let convertedRange = translateRange(parsedArray[1]);

    return {
        direction: convertedDirection,
        range: convertedRange,
    };
};
